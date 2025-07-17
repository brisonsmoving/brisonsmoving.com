import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600">
            Ready to get started? Here's how to reach us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a
                  href="tel:+16782375235"
                  className="hover:text-red-600 transition-colors"
                >
                  (678) 237-5235
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:brison@brisonsmoving.com"
                  className="hover:text-red-600 transition-colors"
                >
                  brison@brisonsmoving.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                Alpharetta, GA
                <br />& Surrounding Areas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600">
                Mon-Sat: 7AM-7PM
                <br />
                Sun: 9AM-5PM
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Stay Connected
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100064042326961"
              className="text-muted-foreground hover:text-red-600 transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/brison-culpepper"
              className="text-muted-foreground hover:text-red-600 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
