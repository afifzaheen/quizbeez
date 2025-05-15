"use client"

import { useState } from "react"
import Head from "next/head"
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

// Step 2️⃣: State Management with React Hooks
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
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

  const totalSteps = 7

  // Navigation functions
  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Form submission handler
  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  // Step 1️⃣: UI Implementation with Next.js and Tailwind CSS
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      <Head>
        <title>The Helper Bees Questionnaire</title>
        <meta name="description" content="The Helper Bees Questionnaire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-4 py-8 w-full">
        {/* Show progress bar only for question screens */}
        {currentStep > 0 && currentStep < 6 && <ProgressBar currentStep={currentStep} totalSteps={5} />}

        {/* Step 5️⃣: Routing - Using conditional rendering for simplicity */}
        {currentStep === 0 && <WelcomeScreen onNext={handleNextStep} />}

        {currentStep === 1 && (
          <MovieGenreQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={() => setCurrentStep(0)}
          />
        )}

        {currentStep === 2 && (
          <DeveloperExperienceQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {currentStep === 3 && (
          <FavoriteMovieQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {currentStep === 4 && (
          <MovieSnackQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {currentStep === 5 && (
          <AddressQuestion
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        )}

        {currentStep === 6 && <CompletionScreen onSubmit={handleSubmit} />}
      </main>

      <Footer />
    </div>
  )
}
