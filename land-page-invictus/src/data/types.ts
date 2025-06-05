import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Languages {
  id: number;
  name: string;
  difficulty: string;
  description: string;
  duration: string;
  lessons: number;
  students: number;
  image: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  language: string;
  quote: string;
}

export interface Teacher {
  id: number;
  name: string;
  language: string;
  bio: string;
  image: string;
  languages: string[];
}

export interface PricingPlan {
  id: number;
  title: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  popular: boolean;
}