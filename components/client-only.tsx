/**
 * ClientOnly Component
 *
 * Wrapper that prevents rendering on the server and only renders on the client.
 * Used to prevent hydration mismatches for components that rely on client-only APIs.
 *
 * @example
 * <ClientOnly>
 *   <ComponentThatUsesWindowObject />
 * </ClientOnly>
 */

"use client"

import { useEffect, useState } from "react"

interface ClientOnlyProps {
  children: React.ReactNode
}

export function ClientOnly({ children }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <>{children}</>
}
