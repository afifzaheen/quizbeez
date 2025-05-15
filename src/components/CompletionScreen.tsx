"use client"

import Image from "next/image"
import Button from "./Button"

// Step 1️⃣: UI Implementation - Completion Screen Component
interface CompletionScreenProps {
  onSubmit: () => void
}

export default function CompletionScreen({ onSubmit }: CompletionScreenProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">You&apos;ve completed your quiz</h1>
        <p className="text-lg mb-8">
          We really appreciate that you took the time to log the answers to this quiz to the console as a javascript
          object!
        </p>
        <Button onClick={onSubmit} className="w-fit">
          Take me to your leader
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-lg transform rotate-6">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="People looking at phone"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
