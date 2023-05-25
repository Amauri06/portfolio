"use client"

import { ThemeProvider } from 'next-themes'


type MyComponent = {
    children: React.ReactNode
}

export function Providers({ children }: MyComponent) {
  return <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
}

