export const metadata = {
  title: 'BlogSpace – Dashboard',
  description: 'Manage your multi-tenant blog',
}
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
        <body style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>{children}</body>
      </ClerkProvider>
    </html>
  )
}
