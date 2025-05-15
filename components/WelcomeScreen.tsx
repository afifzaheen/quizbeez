"use client"

import Image from "next/image"
import { Button } from "../components/ui/button"

/**
 * WelcomeScreen component for The Helper Bees Questionnaire
 * Displays the initial welcome screen with image and start button
 */
export default function WelcomeScreen({ onNext }) {
  return (
    <div className="grid md:grid-cols-2 gap-0">
      <div className="bg-[#FFFDF5] flex items-center justify-center p-8">
        <div className="relative w-[563.23px] h-[559.19px] overflow-hidden rounded-lg transform rotate-6 clip-path-hexagon">
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
        <Button onClick={onNext} className="bg-yellow-400 hover:bg-yellow-500 text-black w-fit">
          Start
        </Button>
      </div>
    </div>
  )
}
