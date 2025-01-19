"use client";
import { Hero } from "@/components/blocks/hero";
import { Icons } from "@/components/ui/icons";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { Pricing } from "@/components/ui/pricing";
import { Footerdemo } from "@/components/ui/footer-section";

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
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="pt-6">
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
        <div className="container mx-auto px-4 mt-20">
          <FeaturesSectionWithHoverEffects />
        </div>
        <div className="mt-20">
          <Pricing 
            plans={pricingPlans}
            title="Choose Your Interview Practice Plan"
            description="Start with a plan that suits your needs. Upgrade or downgrade anytime."
          />
        </div>
      </div>
      <Footerdemo />
    </main>
  );
}
