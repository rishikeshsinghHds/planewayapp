import { 
  Code, 
  Smartphone, 
  Globe, 
  Cpu, 
  Database, 
  Layout, 
  Server,
  Cloud,
  ShieldCheck,
  Zap,
  BarChart,
  Users
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "1500+", label: "Projects Completed" },
  { value: "1000+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" },
];

export const SERVICES = [
  {
    title: "Custom Software Development",
    description: "We build scalable, robust, and secure custom software tailored to your specific business needs.",
    icon: Code,
    tags: ["SaaS Development", "Enterprise Solutions", "API Integration"]
  },
  {
    title: "Mobile App Development",
    description: "Create seamless mobile experiences with our native and cross-platform app development services.",
    icon: Smartphone,
    tags: ["iOS & Android", "React Native", "Flutter"]
  },
  {
    title: "Digital Transformation",
    description: "Modernize your legacy systems and embrace digital innovation to stay ahead of the competition.",
    icon: Globe,
    tags: ["Cloud Migration", "Process Automation", "Legacy Modernization"]
  },
  {
    title: "Digital Commerce",
    description: "Empower your business with cutting-edge e-commerce solutions that drive sales and growth.",
    icon: BarChart,
    tags: ["E-commerce Platforms", "Payment Gateways", "User Experience"]
  },
  {
    title: "Experience Design Strategy",
    description: "We craft intuitive and engaging user experiences that delight your customers and boost conversion.",
    icon: Layout,
    tags: ["UI/UX Design", "Prototyping", "User Research"]
  },
  {
    title: "AI Solutions",
    description: "Leverage the power of Artificial Intelligence and Machine Learning to automate and optimize.",
    icon: Cpu,
    tags: ["Machine Learning", "Predictive Analytics", "NLP"]
  }
];

export const TECHNOLOGIES = {
  Frontend: [
    { name: "React", icon: Code },
    { name: "Vue.js", icon: Code },
    { name: "Angular", icon: Code },
    { name: "Next.js", icon: Code },
  ],
  Backend: [
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Code },
    { name: "Java", icon: Code },
    { name: "PHP", icon: Code },
  ],
  Mobile: [
    { name: "React Native", icon: Smartphone },
    { name: "Flutter", icon: Smartphone },
    { name: "Swift", icon: Smartphone },
    { name: "Kotlin", icon: Smartphone },
  ],
  Cloud: [
    { name: "AWS", icon: Cloud },
    { name: "Azure", icon: Cloud },
    { name: "Google Cloud", icon: Cloud },
  ]
};
