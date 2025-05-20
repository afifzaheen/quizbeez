/**
 * ProgressBar component for The Helper Bees Questionnaire
 * Displays the current progress through the questionnaire
 */
export default function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="mb-8">
      <div className="flex mb-2">
        {[...Array(totalSteps)].map((_, i) => (
          <div key={i} className={`h-2 flex-1 ${i < currentStep ? "bg-emerald-500" : "bg-gray-200"}`} />
        ))}
      </div>
      <p className="text-sm text-gray-600">
        {currentStep} of {totalSteps}
      </p>
    </div>
  )
}
