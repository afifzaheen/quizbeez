"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

/**
 * FavoriteMovieQuestion component for The Helper Bees Questionnaire
 * Allows users to enter details about their favorite movie
 */
export default function FavoriteMovieQuestion({ formData, setFormData, onNext, onPrevious }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What is your favorite movie?</h2>
      <p className="text-sm text-gray-600 mb-4">
        (If you have more than one favorite movie, select Add Favorite Movie to enter its details.)
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Movie title input */}
        <div>
          <Label htmlFor="movieTitle" className="block mb-2">
            Title
          </Label>
          <Input
            id="movieTitle"
            value={formData.favoriteMovie.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                favoriteMovie: {
                  ...formData.favoriteMovie,
                  title: e.target.value,
                },
              })
            }
            placeholder="RoboCop"
            className="w-full"
          />
        </div>

        {/* Movie year input */}
        <div>
          <Label htmlFor="movieYear" className="block mb-2">
            Year of Release
          </Label>
          <Input
            id="movieYear"
            value={formData.favoriteMovie.year}
            onChange={(e) =>
              setFormData({
                ...formData,
                favoriteMovie: {
                  ...formData.favoriteMovie,
                  year: e.target.value,
                },
              })
            }
            placeholder="1987 not 2014, you monster"
            className="w-full"
          />
        </div>
      </div>

      <Button variant="outline" className="mb-8 border-blue-600 text-blue-600">
        Add Favorite Movie
      </Button>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-12">
        <Button variant="link" onClick={onPrevious} className="text-blue-600">
          ← Previous Question
        </Button>
        <Button onClick={onNext} className="bg-yellow-400 hover:bg-yellow-500 text-black">
          Next
        </Button>
      </div>
    </div>
  )
}
