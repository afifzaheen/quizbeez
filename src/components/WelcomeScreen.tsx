"use client"

import Image from "next/image"
import Button from "./Button"

// Step 1️⃣: UI Implementation - Welcome Screen Component
interface WelcomeScreenProps {
  onNext: () => void
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Let&apos;s get started filling out your profile</h1>
        <p className="text-lg mb-8">
          The best way for us to get you the right kind of help is to know you as well as possible.
        </p>
        <Button onClick={onNext} className="w-fit">
          Start
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-lg transform rotate-6">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Elderly couple looking at phone"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
