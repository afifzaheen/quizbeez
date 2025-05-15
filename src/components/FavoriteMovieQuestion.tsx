"use client"

import Button from "./Button"

// Step 1️⃣ & 2️⃣: UI Implementation and State Management
interface FavoriteMovieQuestionProps {
  formData: any
  setFormData: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

export default function FavoriteMovieQuestion({
  formData,
  setFormData,
  onNext,
  onPrevious,
}: FavoriteMovieQuestionProps) {
  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      favoriteMovie: {
        ...formData.favoriteMovie,
        [field]: value,
      },
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What is your favorite movie?</h2>
      <p className="text-sm text-gray-600 mb-4">
        (If you have more than one favorite movie, select Add Favorite Movie to enter its details.)
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="movieTitle" className="block mb-2">
            Title
          </label>
          <input
            id="movieTitle"
            type="text"
            value={formData.favoriteMovie.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="RoboCop"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="movieYear" className="block mb-2">
            Year of Release
          </label>
          <input
            id="movieYear"
            type="text"
            value={formData.favoriteMovie.year}
            onChange={(e) => handleInputChange("year", e.target.value)}
            placeholder="1987 not 2014, you monster"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <button className="mb-8 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
        Add Favorite Movie
      </button>

      <div className="flex justify-between mt-12">
        <Button variant="link" onClick={onPrevious}>
          ← Previous Question
        </Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  )
}
