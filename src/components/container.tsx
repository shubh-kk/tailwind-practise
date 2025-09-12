import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-0 w-full max-w-5xl px-4 py-2">
      {children}
    </div>
  )
}
