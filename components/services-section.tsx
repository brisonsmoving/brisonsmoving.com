import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sofa, Trash2 } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Sofa className="h-12 w-12 text-blue-600" />,
      title: "Small Moves",
      description:
        "Local residential moves with careful handling of your belongings. From bedrooms to patios, we make your move smooth and stress-free.",
    },
    {
      icon: <Trash2 className="h-12 w-12 text-blue-600" />,
      title: "Junk Removal",
      description:
        "Fast and eco-friendly removal of unwanted items. We handle everything from old furniture to appliances, disposing of items responsibly.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional, reliable, and affordable solutions for all your moving and junk removal needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
