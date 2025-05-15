"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

/**
 * AddressQuestion component for The Helper Bees Questionnaire
 * Allows users to enter Jerry Seinfeld's address
 */
export default function AddressQuestion({ formData, setFormData, onNext, onPrevious }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What is Jerry Seinfeld&apos;s address in Seinfeld?</h2>

      <div className="space-y-4 max-w-2xl">
        {/* Address line 1 */}
        <div>
          <Label htmlFor="address1" className="block mb-2">
            Address 1
          </Label>
          <Input
            id="address1"
            value={formData.jerryAddress.address1}
            onChange={(e) =>
              setFormData({
                ...formData,
                jerryAddress: {
                  ...formData.jerryAddress,
                  address1: e.target.value,
                },
              })
            }
            placeholder="Address 1"
            className="w-full"
          />
        </div>

        {/* Address line 2 */}
        <div>
          <Label htmlFor="address2" className="block mb-2">
            Address 2
          </Label>
          <Input
            id="address2"
            value={formData.jerryAddress.address2}
            onChange={(e) =>
              setFormData({
                ...formData,
                jerryAddress: {
                  ...formData.jerryAddress,
                  address2: e.target.value,
                },
              })
            }
            placeholder="Address 2"
            className="w-full"
          />
        </div>

        {/* City, State, Zip */}
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <Label htmlFor="city" className="block mb-2">
              City
            </Label>
            <Input
              id="city"
              value={formData.jerryAddress.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  jerryAddress: {
                    ...formData.jerryAddress,
                    city: e.target.value,
                  },
                })
              }
              placeholder="City"
              className="w-full"
            />
          </div>

          <div className="col-span-1">
            <Label htmlFor="state" className="block mb-2">
              State
            </Label>
            <Input
              id="state"
              value={formData.jerryAddress.state}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  jerryAddress: {
                    ...formData.jerryAddress,
                    state: e.target.value,
                  },
                })
              }
              placeholder="State"
              className="w-full"
            />
          </div>

          <div className="col-span-2">
            <Label htmlFor="zipCode" className="block mb-2">
              Zip Code
            </Label>
            <Input
              id="zipCode"
              value={formData.jerryAddress.zipCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  jerryAddress: {
                    ...formData.jerryAddress,
                    zipCode: e.target.value,
                  },
                })
              }
              placeholder="Zip code"
              className="w-full"
            />
          </div>
        </div>
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
