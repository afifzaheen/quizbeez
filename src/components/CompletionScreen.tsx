"use client"

import Image from "next/image"
import { Button } from "./ui/button"

/**
 * CompletionScreen component for The Helper Bees Questionnaire
 * Displays the final screen after completing the questionnaire
 */
export default function CompletionScreen({ onSubmit }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">You&apos;ve completed your quiz</h1>
        <p className="text-lg mb-8">
          We really appreciate that you took the time to log the answers to this quiz to the console as a javascript
          object!
        </p>
        <Button onClick={onSubmit} className="bg-yellow-400 hover:bg-yellow-500 text-black w-fit">
          Take me to your leader
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="relative w-[563.23px] h-[559.19px] overflow-hidden rounded-lg transform rotate-6 clip-path-hexagon">
          {/* Image with pink tint overlay */}
          <div className="absolute inset-0 bg-pink-100 opacity-10 z-10"></div>
          <Image src="/elderly-couple.jpeg" alt="People looking at phone" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}
