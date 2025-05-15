import Image from "next/image"

/**
 * Header component for The Helper Bees Questionnaire
 * Displays the logo at the top of every page
 */
export default function Header() {
  return (
    <header className="border-b p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center">
          <Image src="/logo.png" alt="The Helper Bees" width={200} height={60} className="h-12 w-auto" />
        </div>
      </div>
    </header>
  )
}
