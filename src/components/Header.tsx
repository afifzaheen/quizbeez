import Image from "next/image"

// Step 1️⃣: UI Implementation - Header Component
export default function Header() {
  return (
    <header className="border-b p-4">
      <div className="max-w-6xl mx-auto">
        <Image src="/logo.png" alt="The Helper Bees" width={200} height={60} className="h-12 w-auto" />
      </div>
    </header>
  )
}
