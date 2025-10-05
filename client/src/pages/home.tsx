import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Dumbbell, TrendingUp, Activity, Brain, Zap, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { ChatBot } from "@/components/ChatBot";

import logoImage from "@assets/logo-red.png";
import watermarkImage from "@assets/logo-watermark.png";
import heroImage from "@assets/dashboard-hero-new.png";
import generatorImage from "@assets/program-generator-new.png";
import recoveryImage from "@assets/soreness-tracking-new.png";
import adviceImage from "@assets/overload-new.png";
import coachImage from "@assets/feedback-proactive-new.png";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('dark');

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      quote: "MuscleCoach heeft mijn training volledig getransformeerd. Geen gokwerk meer, alleen gebaseerde beslissingen en echte vooruitgang."
    },
    {
      quote: "De AI-coach begrijpt precies wanneer ik een deload nodig heb en wanneer ik kan pushen. Dit is de toekomst van training."
    },
    {
      quote: "Eindelijk een app die verder gaat dan alleen loggen. De gepersonaliseerde adviezen maken echt het verschil in mijn spiergroei."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logoImage} alt="MuscleCoach Logo" className="h-8 w-8 sm:h-10 sm:w-10" data-testid="img-logo" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">MuscleCoach</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('problem-cause')} 
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              data-testid="link-waarom"
            >
              Waarom MuscleCoach?
            </button>
          </nav>

          <Button 
            variant="default"
            size="sm"
            className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 text-xs sm:text-sm md:text-base h-9 sm:h-10 px-3 sm:px-4 md:px-6"
            data-testid="button-download-header"
            onClick={() => scrollToSection('cta')}
          >
            <span className="hidden sm:inline">Download App</span>
            <span className="sm:hidden">Download</span>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-background pointer-events-none" />
          
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <img 
              src={watermarkImage} 
              alt="" 
              className="w-full max-w-2xl md:max-w-4xl h-auto"
            />
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" 
                 style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
            <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" 
                 style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center md:text-left">
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight" data-testid="text-hero-title">
                    Stop met gokken. Begin met <span className="text-primary">groeien</span>.
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0" data-testid="text-hero-subtitle">
                    MuscleCoach is de slimme fitness-app die je trainingsschema continu personaliseert op basis van jouw prestaties en hersteldata. Geen templates, pure AI-coaching voor maximale spiergroei.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-lg shadow-primary/20 w-full sm:w-auto"
                    data-testid="button-download-hero"
                    onClick={() => scrollToSection('cta')}
                  >
                    Download de App
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 border-2 w-full sm:w-auto"
                    onClick={() => scrollToSection('features')}
                    data-testid="button-features"
                  >
                    Bekijk de Features
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center animate-fade-in mt-8 md:mt-0" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }} data-testid="container-hero-image">
                <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 animate-float">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                  <img 
                    src={heroImage} 
                    alt="MuscleCoach App Interface" 
                    className="relative z-10 w-full h-auto drop-shadow-2xl"
                    data-testid="img-hero-phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Cause Section */}
        <section id="problem-cause" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-card/30 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-problem-title">
                Waarom je progressie <span className="text-primary">stagneert</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-problem-subtitle">
                Spiergroei is geen magie, het is wetenschap. Progressie stopt wanneer de fundamentele principes – Progressive Overload, Effort, Volume, Load en Herstel – niet consistent en gepersonaliseerd worden toegepast.
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold pt-2 sm:pt-4" data-testid="text-valkuilen-intro">
                Dit leidt tot de drie meest voorkomende 'valkuilen':
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 space-y-4 hover-elevate active-elevate-2 sm:col-span-1" data-testid="card-valkuil-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Statische Schema's</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Gekochte of zelfgemaakte schema's zijn niet adaptief. Ze houden geen rekening met jouw herstel, slaap of stress, waardoor progressie stopt.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 space-y-4 hover-elevate active-elevate-2 sm:col-span-1" data-testid="card-valkuil-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Program-hopping</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Constant wisselen van schema's reset je adaptatie. Zonder consistente, progressieve overload blijft echte spiergroei uit.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 space-y-4 hover-elevate active-elevate-2 sm:col-span-2 md:col-span-1" data-testid="card-valkuil-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Simpele Tracking Apps</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  De meeste apps loggen alleen data, maar nemen geen beslissingen. Data zonder actie leidt niet tot een beter plan.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-16 md:py-24 lg:py-32 relative">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <img 
              src={watermarkImage} 
              alt="" 
              className="w-full max-w-2xl md:max-w-4xl h-auto"
            />
          </div>
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-features-title">
                Waarom MuscleCoach <span className="text-primary">wél</span> de kern raakt
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-features-subtitle">
                Wij maken personalisatie werkend in de praktijk door de vijf basisprincipes van spiergroei te automatiseren.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <Card className="overflow-hidden hover-elevate" data-testid="card-feature-generator">
                <div className="relative bg-card overflow-hidden h-64 sm:h-72 md:h-80 flex items-center justify-center">
                  <img 
                    src={generatorImage} 
                    alt="AI Program Generator" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">AI Program Generator</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Onze AI voert een 'Needs Analysis' uit om een perfect startprogramma te bouwen, gebaseerd op jouw doelen, stijl en materiaal.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden hover-elevate" data-testid="card-feature-recovery">
                <div className="relative bg-card overflow-hidden h-64 sm:h-72 md:h-80 flex items-center justify-center">
                  <img 
                    src={recoveryImage} 
                    alt="Recovery Tracking" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Adaptief Herstel</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    De app meet je herstel en past je trainingsvolume wekelijks aan. Ruim op tijd hersteld? Een extra set. Vermoeid? Tijd voor een deload.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden hover-elevate" data-testid="card-feature-overload">
                <div className="relative bg-card overflow-hidden h-64 sm:h-72 md:h-80 flex items-center justify-center">
                  <img 
                    src={adviceImage} 
                    alt="Progressive Overload" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Automatische Progressive Overload</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nooit meer gokken in de gym. Na elke set geeft de AI een concreet advies voor het gewicht en de herhalingen van je volgende set om vooruitgang te garanderen.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden hover-elevate" data-testid="card-feature-coach">
                <div className="relative bg-card overflow-hidden h-64 sm:h-72 md:h-80 flex items-center justify-center">
                  <img 
                    src={coachImage} 
                    alt="AI Coach" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Proactieve AI Coach</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    De app is meer dan een tool; het is je coach. Krijg proactief inzicht, feedback en aanpassingen om plateaus te doorbreken.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-card/30 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16" data-testid="text-testimonials-title">
              Wat onze gebruikers <span className="text-primary">zeggen</span>
            </h2>

            <div className="max-w-4xl mx-auto relative">
              <Card className="p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6 hover-elevate" data-testid={`card-testimonial-${currentTestimonial}`}>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </Card>

              <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevTestimonial}
                  data-testid="button-testimonial-prev"
                  className="h-9 w-9 sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextTestimonial}
                  data-testid="button-testimonial-next"
                  className="h-9 w-9 sm:h-10 sm:w-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
          
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <img 
              src={watermarkImage} 
              alt="" 
              className="w-full max-w-2xl md:max-w-4xl h-auto"
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-cta-title">
              Klaar om je training <span className="text-primary">serieus</span> te nemen?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground" data-testid="text-cta-subtitle">
              Download MuscleCoach vandaag en ervaar het verschil dat échte personalisatie maakt.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <a 
                href="https://apps.apple.com/nl/app/muscle-coach/id6478009374"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 w-full sm:w-auto"
                data-testid="link-appstore"
              >
                <div className="bg-card border border-border rounded-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-3 sm:gap-4 min-w-[200px]">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground whitespace-nowrap">Download on the</p>
                    <p className="text-lg sm:text-xl font-semibold whitespace-nowrap">App Store</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://play.google.com/store/apps/details?id=com.muscle_coach.android"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 w-full sm:w-auto"
                data-testid="link-playstore"
              >
                <div className="bg-card border border-border rounded-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-3 sm:gap-4 min-w-[200px]">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground whitespace-nowrap">GET IT ON</p>
                    <p className="text-lg sm:text-xl font-semibold whitespace-nowrap">Google Play</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card/50 border-t border-border py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
              <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                  <img src={logoImage} alt="MuscleCoach Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
                  <span className="text-lg sm:text-xl font-bold">MuscleCoach</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  De intelligente fitness coach die je helpt je doelen te bereiken.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Product</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <button onClick={() => scrollToSection('features')} className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-features">
                      Features
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('problem-cause')} className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-waarom">
                      Waarom MuscleCoach?
                    </button>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="text-sm sm:text-base text-muted-foreground" data-testid="text-footer-email">
                    rafael@xxlnutrition.nl
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground" data-testid="text-copyright">
              © 2024 MuscleCoach. Alle rechten voorbehouden.
            </div>
          </div>
        </footer>
      </main>
      
      <ChatBot />
    </div>
  );
}
