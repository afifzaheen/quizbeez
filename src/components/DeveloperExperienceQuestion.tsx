"use client"

import Button from "./Button"

// Step 1️⃣ & 2️⃣: UI Implementation and State Management
interface DeveloperExperienceQuestionProps {
  formData: any
  setFormData: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

export default function DeveloperExperienceQuestion({
  formData,
  setFormData,
  onNext,
  onPrevious,
}: DeveloperExperienceQuestionProps) {
  // Handle radio button changes
  const handleExperienceChange = (value: string) => {
    setFormData({
      ...formData,
      developerExperience: value,
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">How long have you been an angular developer?</h2>

      <div className="space-y-4">
        {["0-3", "4-6", "7+"].map((value) => (
          <div key={value} className="flex items-center space-x-2">
            <input
              type="radio"
              id={value}
              name="developerExperience"
              value={value}
              checked={formData.developerExperience === value}
              onChange={() => handleExperienceChange(value)}
              className="h-4 w-4"
            />
            <label htmlFor={value} className="font-normal">
              {value === "7+" ? "7 or more years" : `${value} years`}
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-12">
        <Button variant="link" onClick={onPrevious}>
          ← Previous Question
        </Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  )
}
