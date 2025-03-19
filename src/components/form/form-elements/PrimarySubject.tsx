import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import MultiSelect from "../MultiSelect";


export default function PrimarySubject() {
  const options = [
    { value: "math", label: "Math" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label:"Biology" },
    { value: "english", label: "English" },
    { value: "history", label: "History" },
    { value: "geography", label: "Geography"},
    { value: "computer-science", label: "Computer Science" },

  ];

  const dayselection = [
    { value:"monday", label:"Monday"},
    { value:"tuesday", label:"Tuesday"},
    { value:"wednesday", label:"Wednesday"},
    { value:"thursday", label:"Thursday"},
    { value:"friday", label:"Friday"},
    { value:"saturday", label:"Saturday"},
  ];

  const multiOptions = [
    { value: "1", text: "TimeSlot 1", selected: false },
    { value: "2", text: "TimeSlot 2", selected: false },
    { value: "3", text: "TimeSlot 3", selected: false },
    { value: "4", text: "TimeSlot 4", selected: false },
    { value: "5", text: "TimeSlot 5", selected: false },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <ComponentCard title="Primary Subject Selection">
      <div className="space-y-6">
        <div>
          <Label htmlFor="empid">Enter EMP id</Label>
          <Input type="text" id="empid" placeholder="ASDXXXXX" />
        </div>
        <div>
          <Label>Select Primary Subject</Label>
          <Select
            options={options}
            placeholder="Select an subject"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label>Choose Your Availability</Label>
          <Select
            options={dayselection}
            placeholder="Choose your day"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <MultiSelect
            label="Preffered Time Slot"
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            Selected Values: {selectedValues.join(", ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
