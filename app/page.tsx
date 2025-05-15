/**
 * The Helper Bees Questionnaire
 *
 * This is the main page component for The Helper Bees questionnaire application.
 * It implements a multi-step form that collects various information from users.
 *
 * Features:
 * - Multi-step form with progress tracking
 * - Various question types (multiple choice, text input, etc.)
 * - Responsive design for all device sizes
 *
 * The form has the following steps:
 * 1. Welcome screen
 * 2. Movie genre preferences (checkboxes)
 * 3. Angular developer experience (radio buttons)
 * 4. Favorite movie details (text inputs)
 * 5. Favorite movie snack (radio buttons)
 * 6. Address information (form fields)
 * 7. Completion screen
 */

import { useState } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Checkbox } from "../components/ui/checkbox"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export default function QuestionnairePage() {
  // State to track the current step of the questionnaire
  const [currentStep, setCurrentStep] = useState(0)

  // State to store all form data
  const [formData, setFormData] = useState({
    movieGenre: [] as string[],
    developerExperience: "",
    favoriteMovie: { title: "", year: "" },
    favoriteSnack: "",
    jerryAddress: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
  })

  // Constants for tracking progress
  const totalSteps = 7

  /**
   * Handles navigation to the next step
   */
  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  /**
   * Handles navigation to the previous step
   */
  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  /**
   * Handles checkbox changes for movie genre selection
   */
  const handleGenreChange = (genre, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        movieGenre: [...formData.movieGenre, genre],
      })
    } else {
      setFormData({
        ...formData,
        movieGenre: formData.movieGenre.filter((g) => g !== genre),
      })
    }
  }

  /**
   * Handles form submission
   */
  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5]">
      {/* Header with logo */}
      <header className="border-b p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <Image src="/logo.png" alt="The Helper Bees" width={200} height={60} className="h-12 w-auto" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 py-8">
        {/* Progress bar - only shown for question screens */}
        {currentStep > 0 && currentStep < 6 && (
          <div className="mb-8">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-2 flex-1 ${i < currentStep ? "bg-emerald-500" : "bg-gray-200"}`} />
              ))}
            </div>
            <p className="text-sm text-gray-600">{currentStep} of 5</p>
          </div>
        )}

        {/* Step 1: Welcome Screen */}
        {currentStep === 0 && (
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-[#FFFDF5] flex items-center justify-center p-8">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-lg transform rotate-6 clip-path-hexagon">
                {/* Image with pink tint overlay */}
                <div className="absolute inset-0 bg-pink-100 opacity-10 z-10"></div>
                <Image src="/elderly-couple.jpeg" alt="Elderly couple looking at phone" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center bg-white p-8 rounded-r-lg">
              <h1 className="text-4xl font-bold mb-4">Let&apos;s get started filling out your profile</h1>
              <p className="text-lg mb-8">
                The best way for us to get you the right kind of help is to know you as well as possible.
              </p>
              <Button onClick={handleNextStep} className="bg-yellow-400 hover:bg-yellow-500 text-black w-fit">
                Start
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Movie Genre Question */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">My favorite movie genre is:</h2>
            <p className="text-sm text-gray-600 mb-4">(Check all that apply)</p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* List of movie genres */}
              {[
                "Action",
                "Western",
                "Horror",
                "Romantic",
                "Drama",
                "Comedy",
                "Thriller",
                "Kevin Hart Buddy Comedy",
                "Science Fiction",
                "Noir",
                "Fantasy",
                "None of the above",
              ].map((genre) => (
                <div key={genre} className="flex items-start space-x-2">
                  <Checkbox
                    id={genre}
                    checked={formData.movieGenre.includes(genre)}
                    onCheckedChange={(checked) => handleGenreChange(genre, checked)}
                  />
                  <Label htmlFor={genre} className="font-normal">
                    {genre}
                  </Label>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              <Button variant="link" onClick={() => setCurrentStep(0)} className="text-blue-600">
                Exit Assessment
              </Button>
              <Button onClick={handleNextStep} className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Developer Experience Question */}
        {currentStep === 2 && (
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
              <Button variant="link" onClick={handlePreviousStep} className="text-blue-600">
                ← Previous Question
              </Button>
              <Button onClick={handleNextStep} className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Favorite Movie Question */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">What is your favorite movie?</h2>
            <p className="text-sm text-gray-600 mb-4">
              (If you have more than one favorite movie, select Add Favorite Movie to enter its details.)
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Movie title input */}
              <div>
                <Label htmlFor="movieTitle" className="block mb-2">
                  Title
                </Label>
                <Input
                  id="movieTitle"
                  value={formData.favoriteMovie.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      favoriteMovie: {
                        ...formData.favoriteMovie,
                        title: e.target.value,
                      },
                    })
                  }
                  placeholder="RoboCop"
                  className="w-full"
                />
              </div>

              {/* Movie year input */}
              <div>
                <Label htmlFor="movieYear" className="block mb-2">
                  Year of Release
                </Label>
                <Input
                  id="movieYear"
                  value={formData.favoriteMovie.year}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      favoriteMovie: {
                        ...formData.favoriteMovie,
                        year: e.target.value,
                      },
                    })
                  }
                  placeholder="1987 not 2014, you monster"
                  className="w-full"
                />
              </div>
            </div>

            <Button variant="outline" className="mb-8 border-blue-600 text-blue-600">
              Add Favorite Movie
            </Button>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              <Button variant="link" onClick={handlePreviousStep} className="text-blue-600">
                ← Previous Question
              </Button>
              <Button onClick={handleNextStep} className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Movie Snack Question */}
        {currentStep === 4 && (
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
              <Button variant="link" onClick={handlePreviousStep} className="text-blue-600">
                ← Previous Question
              </Button>
              <Button onClick={handleNextStep} className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Address Question */}
        {currentStep === 5 && (
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
              <Button variant="link" onClick={handlePreviousStep} className="text-blue-600">
                ← Previous Question
              </Button>
              <Button onClick={handleNextStep} className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 7: Completion Screen */}
        {currentStep === 6 && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">You&apos;ve completed your quiz</h1>
              <p className="text-lg mb-8">
                We really appreciate that you took the time to log the answers to this quiz to the console as a
                javascript object!
              </p>
              <Button onClick={handleSubmit} className="bg-yellow-400 hover:bg-yellow-500 text-black w-fit">
                Take me to your leader
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-lg transform rotate-6 clip-path-hexagon">
                {/* Image with pink tint overlay */}
                <div className="absolute inset-0 bg-pink-100 opacity-10 z-10"></div>
                <Image src="/elderly-couple.jpeg" alt="People looking at phone" fill className="object-cover" />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t p-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2023, The Helper Bees All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
