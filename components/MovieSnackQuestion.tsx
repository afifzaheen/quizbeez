"use client"

import { Button } from "./ui/button"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"

/**
 * MovieSnackQuestion component for The Helper Bees Questionnaire
 * Allows users to select their favorite movie snack
 */
export default function MovieSnackQuestion({ formData, setFormData, onNext, onPrevious }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What&apos;s your favorite movie snack?</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <RadioGroup
          value={formData.favoriteSnack}
          onValueChange={(value) => setFormData({ ...formData, favoriteSnack: value })}
          className="space-y-4"
        >
          {/* Snack options */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Popcorn" id="popcorn" />
            <Label htmlFor="popcorn" className="font-normal">
              Popcorn
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nachos" id="nachos" />
            <Label htmlFor="nachos" className="font-normal">
              Nachos
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Junior Mints" id="junior-mints" />
            <Label htmlFor="junior-mints" className="font-normal">
              Junior Mints
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Milk Duds" id="milk-duds" />
            <Label htmlFor="milk-duds" className="font-normal">
              Milk Duds
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Skittles" id="skittles" />
            <Label htmlFor="skittles" className="font-normal">
              Skittles
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Criterion" id="criterion" />
            <Label htmlFor="criterion" className="font-normal max-w-md">
              I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a
              crinkling sound that disrupts other patrons.
            </Label>
          </div>
        </RadioGroup>
      </div>

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
