"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">Brison Culpepper</h1>
            <p className="text-sm text-gray-600">Moving & Junk Removal</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Get a Quote
            </button>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("booking")} className="bg-red-600 hover:bg-red-700 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-red-600 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-red-600 text-left"
              >
                How It Works
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-red-600 text-left">
                Contact
              </button>
              <button onClick={() => scrollToSection("booking")} className="text-gray-700 hover:text-red-600 text-left">
                Get a Quote
              </button>
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-red-600 hover:bg-red-700 text-white w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
