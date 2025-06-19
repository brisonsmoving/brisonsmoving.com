import { MessageCircle, Calculator, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <MessageCircle className="h-16 w-16 text-red-600" />,
      title: "Tell us what you need",
      description: "Contact us via chat, form, or phone call to describe your moving or removal needs.",
    },
    {
      icon: <Calculator className="h-16 w-16 text-red-600" />,
      title: "Get a quote with timing",
      description: "Receive a fair, transparent quote with estimated timing for your project.",
    },
    {
      icon: <CheckCircle className="h-16 w-16 text-red-600" />,
      title: "We handle the job",
      description: "Sit back and relax while we complete your job fast, fair, and friendly.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, straightforward process from quote to completion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
