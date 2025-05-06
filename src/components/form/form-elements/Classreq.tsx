import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";

type Option = { value: string; label: string };
type SubjectMap = Record< "2nd" | "4th" | "6th" | "8th", Option[]>;

export default function Classreq() {
  const subjectsBySemester: SubjectMap = {

    "2nd": [

      { value: "data-structures", label: "Data Structures" },
      { value: "technical-writing", label: "Technical Writing" }
    ],

    "4th": [

      { value: "probability", label: "Probability & Statistics" },
    ],

    "6th": [
      { value: "artificial-intelligence", label: "Artificial Intelligence" },
      { value: "computer-architecture", label: "Computer Architecture" },
    ],
    "8th": [
      { value: "final-project", label: "Final Year Project" }
    ],
  };

  const semesterOptions: Option[] = Object.keys(subjectsBySemester).map((sem) => ({
    value: sem,
    label: sem,
  }));

  const [selectedSemester, setSelectedSemester] = useState<keyof SubjectMap | "">("");
  const [subjectOptions, setSubjectOptions] = useState<Option[]>([]);
  const [primarySubject, setPrimarySubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSemesterChange = (value: string) => {
    setSelectedSemester(value as keyof SubjectMap);
    setSubjectOptions(subjectsBySemester[value as keyof SubjectMap] || []);
    setPrimarySubject("");
  };

  const handleSubmit = () => {
    if (!selectedSemester || !primarySubject ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      semester: selectedSemester,
      primarySubject: {
        subject: primarySubject,
      },
      submittedAt: new Date().toISOString(),
    };

    setTimeout(() => {
      console.log("Form data submitted:", formData);
      setIsSubmitting(false);
      alert("Your selection is saved ✅");
    }, 1000);
  };

  return (
    <div>
      <ComponentCard title="Subject Selection">
        <div className="space-y-6">
          <div>
            <Label>Select Your Semester</Label>
            <Select
              options={semesterOptions}
              placeholder="Select a semester"
              onChange={handleSemesterChange}
              className="dark:bg-dark-900"
              value={selectedSemester}
            />
          </div>

          {selectedSemester && (
            <>
              <div>
                <Label>Select Your Subject</Label>
                <Select
                  options={subjectOptions}
                  placeholder="Select a subject"
                  onChange={(value) => setPrimarySubject(value)}
                  className="dark:bg-dark-900"
                  value={primarySubject}
                />
              </div>

              {primarySubject && (
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Selection"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </ComponentCard>
    </div>
  );
}
