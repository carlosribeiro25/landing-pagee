import { PricingPlan } from './types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: 'Basic',
    description: 'Perfect for casual learners and beginners',
    monthlyPrice: 49,
    annualPrice: 470,
    features: [
      'Access to 1 language course',
      '2 group classes per week',
      'Basic learning materials',
      'Progress tracking',
      'Mobile app access'
    ],
    popular: false
  },
  {
    id: 2,
    title: 'Standard',
    description: 'Our most popular option for serious language learners',
    monthlyPrice: 89,
    annualPrice: 854,
    features: [
      'Access to 2 language courses',
      '3 group classes per week',
      '1 private lesson per month',
      'Complete learning materials',
      'Progress tracking',
      'Mobile app access',
      'Conversation practice sessions'
    ],
    popular: true
  },
  {
    id: 3,
    title: 'Premium',
    description: 'Comprehensive language learning experience',
    monthlyPrice: 149,
    annualPrice: 1430,
    features: [
      'Access to all language courses',
      '5 group classes per week',
      '2 private lessons per month',
      'Premium learning materials',
      'Advanced progress tracking',
      'Mobile app access',
      'Weekly conversation sessions',
      'Cultural workshops',
      'Certification preparation'
    ],
    popular: false
  }
];