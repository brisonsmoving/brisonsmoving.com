export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brison Culpepper</h3>
            <p className="text-gray-300 leading-relaxed">
              Professional moving and junk removal services near Alpharetta, GA. Fast, reliable, and affordable solutions
              for all your needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Local Moving</li>
              <li>Junk Removal</li>
              <li>Curbside Pickups</li>
              <li>Property Cleanouts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>(678) 237-5235</p>
              <p>brisonculpepper@gmail.com</p>
              <p>Alpharetta, GA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2025 Brison's Moving & Junk Removal, LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors"> */}
              {/*   Privacy Policy */}
              {/* </a> */}
              {/* <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors"> */}
              {/*   Terms of Service */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
