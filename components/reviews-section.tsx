import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Brison was amazing! He helped us move our entire apartment in just a few hours. Very professional, careful with our furniture, and reasonably priced. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "Needed to clear out my garage after years of accumulation. Brison was prompt, efficient, and even swept up afterward. Great service and fair pricing.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      text: "Called Brison for a last-minute move and he was able to accommodate us the same day. He worked quickly but carefully, and made a stressful day much easier. Will definitely use again!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it – hear from satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-gray-900">– {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
