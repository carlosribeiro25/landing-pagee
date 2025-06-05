import { Benefit } from './types';
import { Users, Globe, Calendar, Award, MessageSquare, BookOpen } from 'lucide-react';

export const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Native-Speaking Teachers',
    description: 'Learn from qualified instructors who are native speakers of the language you\'re studying.',
    icon: Users
  },
  {
    id: 2,
    title: 'Immersive Learning',
    description: 'Our methodology focuses on practical, immersive experiences that make learning natural.',
    icon: Globe
  },
  {
    id: 3,
    title: 'Flexible Schedule',
    description: 'Choose from morning, evening, weekend, and online classes to fit your busy lifestyle.',
    icon: Calendar
  },
  {
    id: 4,
    title: 'Recognized Certification',
    description: 'Earn internationally recognized certificates to validate your language proficiency.',
    icon: Award
  },
  {
    id: 5,
    title: 'Small Class Sizes',
    description: 'Enjoy personalized attention with our small group classes of maximum 8 students.',
    icon: MessageSquare
  },
  {
    id: 6,
    title: 'Comprehensive Materials',
    description: 'Access our digital learning platform with interactive exercises and resources.',
    icon: BookOpen
  }
];