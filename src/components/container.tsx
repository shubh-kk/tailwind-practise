import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-0 max-w-xl w-full px-4 py-2">{children}</div>
  )
}
