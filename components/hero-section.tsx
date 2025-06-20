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
              Fast, Reliable Moving & Junk Removal Near <span className="text-red-600">Alpharetta, GA</span>
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
              src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/486648721_1137644465046954_2099064320429551283_n.jpg?stp=cp6_dst-jpg_s1080x2048_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FF8BufEQ1VIQ7kNvwFEIxEy&_nc_oc=Adls4AMk027HL3Q081xICzDbPSY8e89C28x0nGVSaY81OUeCBh2pkA6RyeQfn5EAjOc&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=O7728uTfwbYqIbtwslfSjQ&oh=00_AfNn-NQ4p18xy2Zi1hd_z5aLk0IZPYUQwXImYm48bIhdjQ&oe=685A408F"
              alt="Professional mover with truck"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
