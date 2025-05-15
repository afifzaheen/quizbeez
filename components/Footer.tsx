/**
 * Footer component for The Helper Bees Questionnaire
 * Displays copyright information and links
 */
export default function Footer() {
  return (
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
  )
}
