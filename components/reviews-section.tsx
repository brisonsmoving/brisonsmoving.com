import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Amanda Mizell Swift",
      text: "I had the best experience with Brison! He responded quickly and was extremely accommodating. He removed some outdoor furniture and a grill that I’ve been trying to get rid of for years. His price was unbeatable and he was extremely polite & professional. I 100% recommend using Brison and will definitely be utilizing his services again.",
      rating: 5,
    },
    {
      name: "Carrie McAtee",
      text: "I would 100% recommend Brison. He helped me move some storage tubs and was meticulous in making sure everything was secure in the trailer. He kind of embodies the “if you’re going to do it, do it right the first time” mentality. Communication and punctuality was also stellar. We’ll definitely hire him again.",
      rating: 5,
    },
    {
      name: "Tom Gay",
      text: "Brison has helped me on multiple occasions over the last couple of years. He has my highest recommendation. Always on time and does exactly what he commits to do at the quoted price.  If you need help with junk removal or moving jobs he will not disappoint.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it – hear from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-semibold text-gray-900">– {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-2">
              Still not convinced?
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Check out more reviews from our happy customers.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100064042326961&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-semibold bg-blue-600">View on Facebook</Button>
            </a>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-2">
              Want to share your experience?
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Your feedback helps us improve and serve you better.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100064042326961&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-semibold">Leave a Review</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
