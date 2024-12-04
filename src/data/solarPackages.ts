import { SolarSystemPackage } from '../types/calculator';

export const solarPackages: SolarSystemPackage[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    cost: 1000,
    capacity: '1.5kVA',
    dailyOutput: '6-8 kWh',
    components: [
      '4x 400W Solar Panels',
      '1.5kVA Inverter',
      '100Ah Lithium Battery',
      'Mounting System',
      'Basic Monitoring'
    ],
    description: 'Perfect for small homes with basic power needs. Supports essential appliances and lighting.'
  },
  {
    id: 'essential',
    name: 'Essential Package',
    cost: 1500,
    capacity: '2.4kVA',
    dailyOutput: '10-12 kWh',
    components: [
      '6x 400W Solar Panels',
      '2.4kVA Inverter',
      '200Ah Lithium Battery',
      'Mounting System',
      'Smart Monitoring'
    ],
    description: 'Ideal for medium-sized homes. Supports multiple appliances and provides reliable backup power.'
  },
  {
    id: 'premium',
    name: 'Premium Package',
    cost: 2000,
    capacity: '3.2kVA',
    dailyOutput: '14-16 kWh',
    components: [
      '8x 400W Solar Panels',
      '3.2kVA Inverter',
      '300Ah Lithium Battery',
      'Premium Mounting System',
      'Advanced Monitoring System'
    ],
    description: 'Complete solution for larger homes. Maximum power output and storage capacity.'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Package',
    cost: 5000,
    capacity: '10kVA',
    dailyOutput: '40-48 kWh',
    components: [
      '20x 400W Solar Panels',
      '10kVA Hybrid Inverter',
      '2x 48V 100Ah Lithium Batteries',
      'Professional Mounting System',
      'Enterprise Monitoring System',
      'Advanced Load Management',
      'Remote System Control'
    ],
    description: 'Industrial-grade solution for businesses and large properties. Maximum reliability with dual battery system and advanced hybrid inverter.'
  }
];