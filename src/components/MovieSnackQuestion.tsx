"use client"

import Button from "./Button"

// Step 1️⃣ & 2️⃣: UI Implementation and State Management
interface MovieSnackQuestionProps {
  formData: any
  setFormData: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

export default function MovieSnackQuestion({ formData, setFormData, onNext, onPrevious }: MovieSnackQuestionProps) {
  // Handle radio button changes
  const handleSnackChange = (value: string) => {
    setFormData({
      ...formData,
      favoriteSnack: value,
    })
  }

  // List of snack options
  const snackOptions = [
    { value: "Popcorn", label: "Popcorn" },
    { value: "Nachos", label: "Nachos" },
    { value: "Junior Mints", label: "Junior Mints" },
    { value: "Milk Duds", label: "Milk Duds" },
    { value: "Skittles", label: "Skittles" },
    {
      value: "Criterion",
      label:
        "I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a crinkling sound that disrupts other patrons.",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What&apos;s your favorite movie snack?</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {snackOptions.map((option) => (
            <div key={option.value} className="flex items-start space-x-2">
              <input
                type="radio"
                id={option.value}
                name="favoriteSnack"
                value={option.value}
                checked={formData.favoriteSnack === option.value}
                onChange={() => handleSnackChange(option.value)}
                className="mt-1"
              />
              <label htmlFor={option.value} className="font-normal max-w-md">
                {option.label}
              </label>
            </div>
          ))}
        </div>
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
