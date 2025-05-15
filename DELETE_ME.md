# IMPORTANT: Delete the "pages" directory

You're seeing a deployment error because your project has both:
- App Router (app/page.tsx)
- Pages Router (pages/index.tsx)

These two routing systems are conflicting with each other.

## To fix the error:

1. Delete the entire "pages" directory from your project
2. Keep only the "app" directory for routing

## Steps to delete the pages directory:

\`\`\`bash
# Run this command in your project root
rm -rf pages
\`\`\`

After deleting the pages directory, try deploying again.
