"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fast, Reliable Moving & Junk Removal in <span className="text-red-600">Alpharetta</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Brison Culpepper offers affordable and stress-free local moves, cleanouts, and hauling.
            </p>
            <div className="mt-8">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Professional mover with truck"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
