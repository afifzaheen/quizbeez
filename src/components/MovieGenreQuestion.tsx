"use client"

import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

/**
 * MovieGenreQuestion component for The Helper Bees Questionnaire
 * Allows users to select their favorite movie genres
 */
export default function MovieGenreQuestion({ formData, setFormData, onNext, onPrevious }) {
  /**
   * Handles checkbox changes for movie genre selection
   */
  const handleGenreChange = (genre, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        movieGenre: [...formData.movieGenre, genre],
      })
    } else {
      setFormData({
        ...formData,
        movieGenre: formData.movieGenre.filter((g) => g !== genre),
      })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My favorite movie genre is:</h2>
      <p className="text-sm text-gray-600 mb-4">(Check all that apply)</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* List of movie genres */}
        {[
          "Action",
          "Western",
          "Horror",
          "Romantic",
          "Drama",
          "Comedy",
          "Thriller",
          "Kevin Hart Buddy Comedy",
          "Science Fiction",
          "Noir",
          "Fantasy",
          "None of the above",
        ].map((genre) => (
          <div key={genre} className="flex items-start space-x-2">
            <Checkbox
              id={genre}
              checked={formData.movieGenre.includes(genre)}
              onCheckedChange={(checked) => handleGenreChange(genre, checked)}
            />
            <Label htmlFor={genre} className="font-normal">
              {genre}
            </Label>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-12">
        <Button variant="link" onClick={onPrevious} className="text-blue-600">
          Exit Assessment
        </Button>
        <Button onClick={onNext} className="bg-yellow-400 hover:bg-yellow-500 text-black">
          Next
        </Button>
      </div>
    </div>
  )
}
