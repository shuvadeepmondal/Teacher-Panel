import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Input from "../input/InputField";
import Label from "../Label";

export default function TextAreaInput() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  // const [messageTwo, setMessageTwo] = useState("");

  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <ComponentCard title="Any Queries ?">
      <div className="space-y-6">
      <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            error={error}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            hint={error ? "This is an invalid email address." : ""}
          />
        </div>

        <div>
          <Label htmlFor="query-topic">Query Topic</Label>
          <Input type="text" id="query-topic" placeholder="Enter the Query Topic" />
        </div>

        <div>
          <Label>Description</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

         {/* Disabled TextArea
        <div>
          <Label>Description</Label>
          <TextArea rows={6} disabled />
        </div>

        Error TextArea
        <div>
          <Label>Description</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint="Please enter a valid message."
          />
        </div> */}
      </div>
    </ComponentCard>
  );
}
