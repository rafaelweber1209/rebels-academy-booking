import { BookingForm } from "@/components/BookingForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Transform Your <span className="text-red-500">Fitness</span> Journey
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
              Professional coaching tailored to your goals. Start your free consultation today.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto mt-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-red-500">100+</div>
              <div className="text-xs sm:text-sm text-slate-400">Clients Trained</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-red-500">15+</div>
              <div className="text-xs sm:text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-red-500">24/7</div>
              <div className="text-xs sm:text-sm text-slate-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-red-500">Free</span> Consultation
            </h2>
            <p className="text-lg text-slate-400">
              Tell us about your fitness goals and we'll match you with the perfect coach.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Why Choose MuscleCoach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Expert Coaching</h3>
              <p className="text-slate-400">
                Our coaches are certified professionals with years of experience in transforming bodies and building confidence.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Personalized Plans</h3>
              <p className="text-slate-400">
                Every program is customized to your unique goals, fitness level, and lifestyle for maximum results.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Real Results</h3>
              <p className="text-slate-400">
                Join hundreds of satisfied clients who've achieved their fitness goals with our proven coaching methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-slate-800 text-center text-slate-500">
        <p>&copy; 2024 MuscleCoach. All rights reserved.</p>
      </footer>
    </div>
  );
}
