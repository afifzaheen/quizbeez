"use client"
import Button from "./Button"

// Step 1️⃣ & 2️⃣: UI Implementation and State Management
interface MovieGenreQuestionProps {
  formData: any
  setFormData: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

export default function MovieGenreQuestion({ formData, setFormData, onNext, onPrevious }: MovieGenreQuestionProps) {
  // Handle checkbox changes
  const handleGenreChange = (genre: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        movieGenre: [...formData.movieGenre, genre],
      })
    } else {
      setFormData({
        ...formData,
        movieGenre: formData.movieGenre.filter((g: string) => g !== genre),
      })
    }
  }

  // List of movie genres
  const genres = [
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
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My favorite movie genre is:</h2>
      <p className="text-sm text-gray-600 mb-4">(Check all that apply)</p>

      <div className="grid md:grid-cols-2 gap-4">
        {genres.map((genre) => (
          <div key={genre} className="flex items-start space-x-2">
            <input
              type="checkbox"
              id={genre}
              checked={formData.movieGenre.includes(genre)}
              onChange={(e) => handleGenreChange(genre, e.target.checked)}
              className="mt-1"
            />
            <label htmlFor={genre} className="font-normal">
              {genre}
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-12">
        <Button variant="link" onClick={onPrevious}>
          Exit Assessment
        </Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  )
}
