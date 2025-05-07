"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    toggleVisibility()
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 border-t-[3px] border-[3px] border-green-800 rounded-lg  bg-white text-black  transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top "
    >
      <ChevronUp size={50}  className="h-6 w-6 font-bold" />
    </button>
  )
}

