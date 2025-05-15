import type React from "react"
/**
 * Root layout component for The Helper Bees Questionnaire
 *
 * This component wraps all pages in the application and provides
 * the basic HTML structure and metadata.
 */

import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Helper Bees Questionnaire",
  description: "A multi-step questionnaire for The Helper Bees",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
