"use client"

import { Button } from "./ui/button"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"

/**
 * DeveloperExperienceQuestion component for The Helper Bees Questionnaire
 * Allows users to select their years of experience as an Angular developer
 */
export default function DeveloperExperienceQuestion({ formData, setFormData, onNext, onPrevious }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">How long have you been an angular developer?</h2>

      <RadioGroup
        value={formData.developerExperience}
        onValueChange={(value) => setFormData({ ...formData, developerExperience: value })}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="0-3" id="0-3" />
          <Label htmlFor="0-3" className="font-normal">
            0-3 years
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="4-6" id="4-6" />
          <Label htmlFor="4-6" className="font-normal">
            4-6 years
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="7+" id="7+" />
          <Label htmlFor="7+" className="font-normal">
            7 or more years
          </Label>
        </div>
      </RadioGroup>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-12">
        <Button variant="link" onClick={onPrevious} className="text-blue-600">
          ← Previous Question
        </Button>
        <Button onClick={onNext} className="bg-yellow-400 hover:bg-yellow-500 text-black">
          Next
        </Button>
      </div>
    </div>
  )
}
