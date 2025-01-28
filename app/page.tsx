"use client";
import { Hero } from "@/components/blocks/hero";
import { Icons } from "@/components/ui/icons";
import { Pricing } from "@/components/ui/pricing";
import { Footerdemo } from "@/components/ui/footer-section";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home as HomeIcon, Sparkles, CreditCard, Phone } from 'lucide-react';
import { PatternCardDemo } from "@/components/ui/code.demo";
// import { Header1 } from "@/components/ui/header";
import NavigationBar from "@/components/ui/header";

const navItems = [
  { name: 'Home', url: '#home', icon: HomeIcon },
  { name: 'Features', url: '#features', icon: Sparkles },
  { name: 'Pricing', url: '#pricing', icon: CreditCard },
  { name: 'Contact', url: '#contact', icon: Phone }
];

const pricingPlans = [
  {
    name: "BASIC",
    price: "9",
    yearlyPrice: "7",
    period: "per month",
    features: [
      "5 AI Interview Sessions",
      "Basic feedback analysis",
      "Common interview questions",
      "Email support",
      "Interview preparation guides",
    ],
    description: "Perfect for beginners starting their interview preparation",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PRO",
    price: "29",
    yearlyPrice: "23",
    period: "per month",
    features: [
      "Unlimited AI Interview Sessions",
      "Advanced feedback analysis",
      "Industry-specific questions",
      "Priority support",
      "Custom interview scenarios",
      "Performance tracking",
      "Interview recording",
    ],
    description: "Best for active job seekers",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Everything in Pro",
      "Custom question sets",
      "Team management",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "Bulk licenses",
      "Analytics dashboard",
    ],
    description: "For organizations and career counselors",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full max-w-[2000px] mx-auto overflow-hidden scroll-smooth">
      <NavigationBar />
      <div className="flex-grow w-full">
        <div id="home" className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero
            pill={{
              text: "AI-Powered Interview Practice",
              icon: <Icons.logo className="h-4 w-4" />,
              variant: "default",
              size: "md",
            }}
            content={{
              title: "Master Your",
              titleHighlight: "Interview Skills",
              description:
                "Practice interviews with advanced AI that simulates real-world scenarios. Get instant feedback, improve your responses, and build confidence for your next big opportunity.",
              primaryAction: {
                href: "/practice",
                text: "Start Practicing",
                icon: <Icons.logo className="h-4 w-4" />,
              },
              secondaryAction: {
                href: "/explore",
                text: "View Interview Types",
                icon: <Icons.component className="h-4 w-4" />,
              },
            }}
          />
        </div>
        <div id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full max-w-7xl">
          <PatternCardDemo></PatternCardDemo>
        </div>
        <div id="pricing" className="mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pricing 
            plans={pricingPlans}
            title="Choose Your Interview Practice Plan"
            description="Start with a plan that suits your needs. Upgrade or downgrade anytime."
          />
        </div>
      </div>
      <div id="contact" className="w-full">
        <Footerdemo />
      </div>
    </main>
  );
}