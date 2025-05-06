import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";

type Option = { value: string; label: string };
type SubjectMap = Record<"1st" | "2nd" | "3rd" | "4th" | "5th" | "6th" | "7th" | "8th", Option[]>;

export default function PrimarySubject() {
  const subjectsBySemester: SubjectMap = {
    "1st": [
      { value: "calculus", label: "Calculus I" },
      { value: "intro-physics", label: "Introduction to Physics" },
      { value: "intro-programming", label: "Introduction to Programming" },
      { value: "english-composition", label: "English Composition" },
    ],
    "2nd": [
      { value: "calculus-2", label: "Calculus II" },
      { value: "mechanics", label: "Mechanics" },
      { value: "data-structures", label: "Data Structures" },
      { value: "technical-writing", label: "Technical Writing" },
    ],
    "3rd": [
      { value: "linear-algebra", label: "Linear Algebra" },
      { value: "electronics", label: "Electronics" },
      { value: "algorithms", label: "Algorithms" },
      { value: "discrete-mathematics", label: "Discrete Mathematics" },
    ],
    "4th": [
      { value: "differential-equations", label: "Differential Equations" },
      { value: "thermodynamics", label: "Thermodynamics" },
      { value: "database-systems", label: "Database Systems" },
      { value: "probability", label: "Probability & Statistics" },
    ],
    "5th": [
      { value: "numerical-methods", label: "Numerical Methods" },
      { value: "signals-systems", label: "Signals & Systems" },
      { value: "computer-networks", label: "Computer Networks" },
      { value: "operating-systems", label: "Operating Systems" },
    ],
    "6th": [
      { value: "control-systems", label: "Control Systems" },
      { value: "artificial-intelligence", label: "Artificial Intelligence" },
      { value: "software-engineering", label: "Software Engineering" },
      { value: "computer-architecture", label: "Computer Architecture" },
    ],
    "7th": [
      { value: "machine-learning", label: "Machine Learning" },
      { value: "embedded-systems", label: "Embedded Systems" },
      { value: "computer-vision", label: "Computer Vision" },
      { value: "web-development", label: "Web Development" },
    ],
    "8th": [
      { value: "deep-learning", label: "Deep Learning" },
      { value: "cloud-computing", label: "Cloud Computing" },
      { value: "blockchain", label: "Blockchain Technologies" },
      { value: "final-project", label: "Final Year Project" },
    ],
  };

  const dayselection: Option[] = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
  ];

  const multiOptions = [
    { value: "1", text: "TimeSlot 1", selected: false },
    { value: "2", text: "TimeSlot 2", selected: false },
    { value: "3", text: "TimeSlot 3", selected: false },
    { value: "4", text: "TimeSlot 4", selected: false },
    { value: "5", text: "TimeSlot 5", selected: false },
  ];

  const semesterOptions: Option[] = Object.keys(subjectsBySemester).map((sem) => ({
    value: sem,
    label: sem,
  }));

  const [selectedSemester, setSelectedSemester] = useState<keyof SubjectMap | "">("");
  const [subjectOptions, setSubjectOptions] = useState<Option[]>([]);
  const [primarySubject, setPrimarySubject] = useState("");
  const [secondarySubject, setSecondarySubject] = useState("");
  const [primaryDay, setPrimaryDay] = useState("");
  const [secondaryDay, setSecondaryDay] = useState("");
  const [primaryTimeSlots, setPrimaryTimeSlots] = useState<string[]>(["1", "3"]);
  const [secondaryTimeSlots, setSecondaryTimeSlots] = useState<string[]>(["1", "3"]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSemesterChange = (value: string) => {
    setSelectedSemester(value as keyof SubjectMap);
    setSubjectOptions(subjectsBySemester[value as keyof SubjectMap] || []);
    setPrimarySubject("");
    setSecondarySubject("");
    setPrimaryDay("");
    setSecondaryDay("");
    setPrimaryTimeSlots(["1", "3"]);
    setSecondaryTimeSlots(["1", "3"]);
  };

  const handleSubmit = () => {
    if (!selectedSemester || !primarySubject || !primaryDay || !secondarySubject || !secondaryDay) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      semester: selectedSemester,
      primarySubject: {
        subject: primarySubject,
        day: primaryDay,
        timeSlots: primaryTimeSlots,
      },
      secondarySubject: {
        subject: secondarySubject,
        day: secondaryDay,
        timeSlots: secondaryTimeSlots,
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
            <Label>Select Your Required Semester</Label>
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
                <Label>Select Primary Subject</Label>
                <Select
                  options={subjectOptions}
                  placeholder="Select a subject"
                  onChange={(value) => setPrimarySubject(value)}
                  className="dark:bg-dark-900"
                  value={primarySubject}
                />
              </div>

              {primarySubject && (
                <>
                  <div>
                    <Label>Choose Your Availability</Label>
                    <Select
                      options={dayselection}
                      placeholder="Choose your day"
                      onChange={(value) => setPrimaryDay(value)}
                      className="dark:bg-dark-900"
                      value={primaryDay}
                    />
                  </div>
                  <div>
                    <MultiSelect
                      label="Preferred Time Slot"
                      options={multiOptions}
                      defaultSelected={primaryTimeSlots}
                      onChange={(values) => setPrimaryTimeSlots(values)}
                    />
                  </div>
                </>
              )}

              <div>
                <Label>Select Secondary Subject</Label>
                <Select
                  options={subjectOptions.filter((subject) => subject.value !== primarySubject)}
                  placeholder="Select a subject"
                  onChange={(value) => setSecondarySubject(value)}
                  className="dark:bg-dark-900"
                  value={secondarySubject}
                  disabled={!primarySubject}
                />
              </div>

              {secondarySubject && (
                <>
                  <div>
                    <Label>Choose Your Availability</Label>
                    <Select
                      options={dayselection}
                      placeholder="Choose your day"
                      onChange={(value) => setSecondaryDay(value)}
                      className="dark:bg-dark-900"
                      value={secondaryDay}
                    />
                  </div>
                  <div>
                    <MultiSelect
                      label="Preferred Time Slot"
                      options={multiOptions}
                      defaultSelected={secondaryTimeSlots}
                      onChange={(values) => setSecondaryTimeSlots(values)}
                    />
                  </div>
                </>
              )}

              {primarySubject && secondarySubject && primaryDay && secondaryDay && (
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
