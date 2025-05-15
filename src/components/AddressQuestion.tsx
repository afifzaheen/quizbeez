"use client"

import Button from "./Button"

// Step 1️⃣ & 2️⃣: UI Implementation and State Management
interface AddressQuestionProps {
  formData: any
  setFormData: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

export default function AddressQuestion({ formData, setFormData, onNext, onPrevious }: AddressQuestionProps) {
  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      jerryAddress: {
        ...formData.jerryAddress,
        [field]: value,
      },
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What is Jerry Seinfeld&apos;s address in Seinfeld?</h2>

      <div className="space-y-4 max-w-2xl">
        <div>
          <label htmlFor="address1" className="block mb-2">
            Address 1
          </label>
          <input
            id="address1"
            type="text"
            value={formData.jerryAddress.address1}
            onChange={(e) => handleInputChange("address1", e.target.value)}
            placeholder="Address 1"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="address2" className="block mb-2">
            Address 2
          </label>
          <input
            id="address2"
            type="text"
            value={formData.jerryAddress.address2}
            onChange={(e) => handleInputChange("address2", e.target.value)}
            placeholder="Address 2"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <label htmlFor="city" className="block mb-2">
              City
            </label>
            <input
              id="city"
              type="text"
              value={formData.jerryAddress.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="City"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="state" className="block mb-2">
              State
            </label>
            <input
              id="state"
              type="text"
              value={formData.jerryAddress.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="State"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="zipCode" className="block mb-2">
              Zip Code
            </label>
            <input
              id="zipCode"
              type="text"
              value={formData.jerryAddress.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="Zip code"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
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
