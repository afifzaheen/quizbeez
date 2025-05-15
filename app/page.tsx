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

"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import WelcomeScreen from "@/components/WelcomeScreen"
import MovieGenreQuestion from "@/components/MovieGenreQuestion"
import DeveloperExperienceQuestion from "@/components/DeveloperExperienceQuestion"
import FavoriteMovieQuestion from "@/components/FavoriteMovieQuestion"
import MovieSnackQuestion from "@/components/MovieSnackQuestion"
import AddressQuestion from "@/components/AddressQuestion"
import CompletionScreen from "@/components/CompletionScreen"

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
   * Handles form submission
   */
  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5]">
      {/* Header with logo */}
      <Header />

      <main className="max-w-6xl mx-auto p-4 py-8">
        {/* Progress bar - only shown for question screens */}
        {currentStep > 0 && currentStep < 6 && <ProgressBar currentStep={currentStep} totalSteps={5} />}

        {/* Step 1: Welcome Screen */}
        {currentStep === 0 && <WelcomeScreen onNext={handleNextStep} />}

        {/* Step 2: Movie Genre Question */}
        {currentStep === 1 && (
          <MovieGenreQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={() => setCurrentStep(0)}
          />
        )}

        {/* Step 3: Developer Experience Question */}
        {currentStep === 2 && (
          <DeveloperExperienceQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {/* Step 4: Favorite Movie Question */}
        {currentStep === 3 && (
          <FavoriteMovieQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {/* Step 5: Movie Snack Question */}
        {currentStep === 4 && (
          <MovieSnackQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {/* Step 6: Address Question */}
        {currentStep === 5 && (
          <AddressQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {/* Step 7: Completion Screen */}
        {currentStep === 6 && <CompletionScreen onSubmit={handleSubmit} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
