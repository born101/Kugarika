export interface LoanOption {
  systemCost: number;
  monthlyPayment: number;
  monthlySavings: number;
  netMonthly: number;
  loanTerm: number;
  interestRate: number;
  totalInterest: number;
  revenueStreams: RevenueStreams;
  systemDetails: SolarSystemPackage;
}

export interface RevenueStreams {
  netMetering: number;
  carbonCredits: number;
  total: number;
}

export interface CalculatorInputs {
  monthlyBill: string;
  selectedSystem?: SolarSystemPackage;
}

export interface LoanTermOption {
  months: number;
  interestRate: number;
}

export interface SolarSystemPackage {
  id: string;
  name: string;
  cost: number;
  capacity: string;
  dailyOutput: string;
  components: string[];
  description: string;
}