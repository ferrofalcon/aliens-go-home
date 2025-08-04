import type { Metadata } from "next"
import "./globals.css"
import { ReactNode } from "react"
import ReduxProvider from "@/store/Proivder"

export const metadata: Metadata = {
  title: "Aliens Go Home",
  description: "A game built with Next.js",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
