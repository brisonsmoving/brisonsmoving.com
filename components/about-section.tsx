export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/450686623_935314165279986_5812397226830718154_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=E1EHkaYWZzAQ7kNvwHJ7MKc&_nc_oc=Adl5Vbwvs9c7vH4b-EZR2PItMmoBFiAZdOKReelMHXexIk_R_Utywrl60xQVnuOwHT8&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=u28oCjxVwHL12Wovxf60-A&oh=00_AfNgGQneDVE7iIcEDDtrk8MRNrrlFXYY-tP677Tz98iKNQ&oe=685A522E"
              alt="Brison Culpepper"
              className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Brison
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I'm Brison Culpepper, and I've been serving the Alpharetta
                community with reliable moving and junk removal services. As a
                local, solo operator, I understand the importance of personal
                service and building trust with my neighbors.
              </p>
              <p>
                What sets me apart is my commitment to treating your belongings
                with the same care I'd want for my own. Whether you're moving
                across town or need to clear out years of accumulated items, I'm
                here to make the process as smooth and stress-free as possible.
              </p>
              <p>
                I take pride in being punctual, fair with pricing, and going the
                extra mile to ensure you're completely satisfied. When you work
                with me, you're not just hiring a service – you're working with
                someone who genuinely cares about your experience.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                Local Alpharetta Roots
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Personal Service
              </div>
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                Reliable & Trustworthy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
