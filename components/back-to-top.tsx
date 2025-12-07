'use client'
import React, { useEffect, useState } from "react"

export default function BackToTop(): JSX.Element | null {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!mounted) return null

  return (
    <button
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        "fixed z-50 right-4 bottom-4 md:right-8 md:bottom-8 p-3 rounded-full shadow-lg transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 " +
        (visible
          ? "opacity-100 pointer-events-auto bg-primary text-primary-foreground"
          : "opacity-0 pointer-events-none bg-transparent text-transparent")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  )
}
