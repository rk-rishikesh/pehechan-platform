import type { CSSProperties } from "react";

export const ASSET = "/influencely/";

export function assetUrl(file: string) {
  return `${ASSET}${file}`;
}

export function imageStyle(file: string): CSSProperties {
  return {
    backgroundImage: `url(${assetUrl(file)})`,
  };
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Clients", href: "/talents" },
  { label: "Contact Us", href: "/contact" },
];

export const pageLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faq" },
];

export const partnerLogos = [
  "logo-49.png",
  "Logo-52.png",
  "logo-50.png",
  "Logo-51.png",
  "logo-40.png",
  "logo-47.png",
];

export const services = [
  {
    slug: "business-consulting",
    title: "Business Consulting",
    image: "successful-multiethnic-colleagues-in-stylish-casua-2024-11-07-21-55-39-utc.jpg",
    description:
      "Positioning, offers, audience clarity, and growth strategy for businesses that need sharper direction before more content.",
    tall: true,
    deliverables: [
      "Business positioning and audience diagnosis",
      "Offer, funnel, and conversion clarity",
      "Monthly growth direction and decision support",
    ],
    metric: "3+ years",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    image: "smiling-multicultural-businesspeople-taking-selfie-2024-11-10-19-49-19-utc.jpg",
    description:
      "Content systems for doctors, founders, clinics, and brands that need to be remembered by the right audience.",
    deliverables: [
      "Content pillars and monthly calendars",
      "Reels, carousels, captions, and publishing rhythm",
      "Audience engagement and growth reporting",
    ],
    metric: "92% growth rate",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    image: "colleagues-greeting-at-a-presentation-in-the-offic-2024-09-21-18-01-05-utc.jpg",
    description:
      "Campaign strategy, landing journeys, paid reach, and performance learning that connect visibility to business movement.",
    deliverables: [
      "Campaign planning and channel mix",
      "Landing page and lead-generation direction",
      "Performance review and next-step optimization",
    ],
    metric: "97% campaign success",
  },
  {
    slug: "branding",
    title: "Branding",
    image: "workers-using-a-graphic-to-explain-data-in-a-meeti-2024-12-09-03-11-20-utc.jpg",
    description:
      "Identity, voice, messaging, and visual direction that make people recognize your business before they read the caption.",
    deliverables: [
      "Brand story, voice, and messaging system",
      "Visual direction for social and digital touchpoints",
      "Campaign-ready content language",
    ],
    metric: "50+ brands",
  },
];

export const talents = [
  {
    slug: "dr-aisha-mehta",
    name: "Dr. Aisha Mehta",
    role: "Dermatologist",
    image: "front-view-of-mature-middle-aged-confident-high-sk-2024-12-13-07-54-41-utc.jpg",
    bio:
      "A skin clinic identity system built around patient education, trust, and high-intent discovery.",
    audience: "10K followers",
    channels: ["Patient education", "Instagram growth", "Clinic inquiries"],
  },
  {
    slug: "kavya-rao",
    name: "Kavya Rao",
    role: "D2C Founder",
    image: "close-up-portrait-of-confident-indian-financial-ex-2024-12-10-04-06-45-utc.jpg",
    bio:
      "A founder-led brand voice sharpened for launches, retention content, and category authority.",
    audience: "50+ SKUs",
    channels: ["Brand story", "Launch content", "Digital campaigns"],
  },
  {
    slug: "arya-wellness",
    name: "Arya Wellness",
    role: "Clinic Brand",
    image: "beauty-blogger-girl-is-broadcasting-live-from-her-2024-09-23-00-08-47-utc.jpg",
    bio:
      "A warmer digital presence for consultations, wellness education, and recurring patient trust.",
    audience: "3x reach",
    channels: ["Content calendar", "Video production", "Lead flow"],
  },
  {
    slug: "arjun-malhotra",
    name: "Arjun Malhotra",
    role: "Clinic Entrepreneur",
    image: "portrait-of-attractive-asian-car-designer-in-offic-2023-11-27-05-05-21-utc.jpg",
    bio:
      "A multi-location clinic narrative translated into clear service pages and social proof.",
    audience: "100% retention",
    channels: ["Service positioning", "Trust content", "Campaign reporting"],
  },
  {
    slug: "meera-studio",
    name: "Meera Studio",
    role: "Creator-Led Brand",
    image: "creative-teenager-girl-sitting-at-home-in-front-of-2024-12-08-04-09-35-utc.jpg",
    bio:
      "A personal brand turned into a consistent identity for offers, collaborations, and audience trust.",
    audience: "92% growth",
    channels: ["Personal branding", "Short-form video", "Community building"],
  },
  {
    slug: "nova-care",
    name: "Nova Care",
    role: "Healthcare Brand",
    image: "group-portrait-of-confident-interracial-entreprene-2024-11-13-22-56-07-utc.jpg",
    bio:
      "A healthcare brand made easier to recognize through service education and digital campaigns.",
    audience: "97% campaign success",
    channels: ["Digital marketing", "Branding", "Social media"],
  },
];

export const testimonials = [
  {
    name: "Olivia Carter",
    role: "Brand Manager at Shine Glow",
    image: "portrait-of-attractive-asian-car-designer-in-offic-2023-11-27-05-05-21-utc.jpg",
    quote:
      "The team translated a broad growth goal into a Pehechan that finally sounded like our business.",
    rating: "5",
  },
  {
    name: "Sophia Clarke",
    role: "Clinic Founder",
    image: "creative-teenager-girl-sitting-at-home-in-front-of-2024-12-08-04-09-35-utc.jpg",
    quote:
      "They helped us explain our services clearly and create content patients actually responded to.",
    rating: "4.5",
  },
  {
    name: "Jackie Stevens",
    role: "Brand Operator",
    image: "portrait-of-smiling-male-college-student-in-busy-c-2024-10-21-05-38-40-utc.jpg",
    quote:
      "Every brief came with clear direction, a sharper message, and a reason behind the content.",
    rating: "5",
  },
];

export const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What does your agency do?",
        answer:
          "We build identity, social media, digital marketing, branding, and business consulting systems for doctors, founders, clinics, and brands.",
      },
      {
        question: "Who do you work with?",
        answer:
          "We work with doctors, clinics, D2C founders, entrepreneurs, and brand teams that want to be remembered by the right audience.",
      },
      {
        question: "What are your fees and commission rates?",
        answer:
          "Fees depend on scope. Most work is scoped as a consulting sprint, campaign, brand project, or monthly growth retainer.",
      },
    ],
  },
  {
    category: "Doctors & Founders",
    items: [
      {
        question: "Can you work with regulated or trust-heavy industries?",
        answer:
          "Yes. We build content around clarity, credibility, patient or customer questions, and the boundaries your industry requires.",
      },
      {
        question: "What support do you provide?",
        answer:
          "We support positioning, content strategy, video production direction, campaign planning, reporting, and long-term growth decisions.",
      },
      {
        question: "How do I start with Pehechan?",
        answer:
          "Start with the contact form, share your business, and tell us what you want people to know, trust, or buy.",
      },
    ],
  },
  {
    category: "Brands",
    items: [
      {
        question: "How can my brand work with Pehechan?",
        answer:
          "Send us the business goal, audience, timing, and budget range. We will recommend the right mix of strategy, content, and campaign work.",
      },
      {
        question: "How do you build a brand identity?",
        answer:
          "We clarify what the business should be known for, then shape messaging, visuals, content formats, and growth channels around that position.",
      },
      {
        question: "How do you measure campaign success?",
        answer:
          "We track reach, engagement, content quality, inquiry signals, conversion signals, and post-campaign learning for the next move.",
      },
    ],
  },
];

export const posts = [
  {
    slug: "identity-before-content",
    title: "Identity Before Content: Why Posting More Is Not a Strategy",
    image: "beauty-blogger-recommending-quartz-roller-2025-01-29-07-52-49-utc.jpg",
    date: "March 28, 2025",
    excerpt:
      "A practical look at why doctors, founders, and brands need a clear Pehechan before scaling content.",
    body: [
      "More posts can make a weak identity louder. It cannot make it clearer. The work starts with what your business should be known for.",
      "When identity is clear, content decisions get easier: what to say, what to repeat, what to ignore, and which audience signals matter.",
      "Growth follows when strategy, audience fit, and operational discipline are all present at once.",
    ],
  },
  {
    slug: "doctors-need-recognition",
    title: "Why Doctors and Clinics Need Recognition, Not Just Reach",
    image: "diverse-office-colleagues-stacking-their-hands-aft-2024-12-13-05-39-23-utc.jpg",
    date: "March 28, 2025",
    excerpt:
      "How trust-led content helps healthcare businesses become easier to find, understand, and choose.",
    body: [
      "Patients do not choose a clinic because it posts often. They choose when the information feels credible, specific, and relevant to their concern.",
      "Recognition shortens the path from awareness to trust. The key is answering real questions in a voice the audience can remember.",
      "Strong healthcare marketing respects the decision journey: clarity first, proof second, inquiry third.",
    ],
  },
  {
    slug: "founder-led-branding",
    title: "Founder-Led Branding: Turning Expertise into a Clear Market Position",
    image: "young-smiling-blogger-is-sitting-in-front-of-a-lap-2024-10-18-00-07-11-utc.jpg",
    date: "March 28, 2025",
    excerpt:
      "Where Pehechan helps most: clarity, consistency, market fit, and better growth decisions.",
    body: [
      "Founder-led brands already have expertise. The challenge is translating that expertise into language, visuals, and content people can recognize quickly.",
      "A clear brand system removes friction: offers, campaign timelines, content themes, and reporting all become easier to manage.",
      "The goal is not to make every founder sound the same. The goal is to make their strongest point of view easier to repeat.",
    ],
  },
];

export const pricingPlans = [
  {
    name: "Identity Sprint",
    price: "$1.9K",
    summary: "For businesses that need clear positioning before scaling content.",
    features: ["Brand diagnosis", "Audience clarity", "Messaging system", "Action plan"],
  },
  {
    name: "Growth Partnership",
    price: "$5.8K",
    summary: "For doctors, founders, and brands building consistent monthly growth.",
    features: ["Strategy workshop", "Content calendar", "Campaign direction", "Performance review"],
    highlighted: true,
  },
  {
    name: "Brand Build",
    price: "Custom",
    summary: "For teams that need identity, content, and digital campaigns together.",
    features: ["Branding", "Digital marketing", "Video direction", "Monthly planning"],
  },
];
