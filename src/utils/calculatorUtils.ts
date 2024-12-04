import { LoanOption, LoanTermOption, RevenueStreams, SolarSystemPackage } from '../types/calculator';

const LOAN_TERMS: LoanTermOption[] = [
  { months: 6, interestRate: 0.25 },  // 25% for 6 months
  { months: 12, interestRate: 0.35 }, // 35% for 12 months
];

function calculateRevenueStreams(systemCost: number): RevenueStreams {
  const netMetering = systemCost * 0.015; // Estimate 1.5% of system cost
  const carbonCredits = systemCost * 0.005; // Estimate 0.5% of system cost
  
  return {
    netMetering,
    carbonCredits,
    total: netMetering + carbonCredits
  };
}

export function calculateLoanOptions(monthlyBill: string, selectedSystem?: SolarSystemPackage): LoanOption[] | null {
  const bill = parseFloat(monthlyBill);
  if (!bill || isNaN(bill) || !selectedSystem) return null;

  const estimatedSavings = bill * 0.75; // 75% savings of monthly bill
  const allOptions: LoanOption[] = [];

  try {
    const revenueStreams = calculateRevenueStreams(selectedSystem.cost);

    for (const term of LOAN_TERMS) {
      const totalInterest = selectedSystem.cost * term.interestRate;
      const totalWithInterest = selectedSystem.cost + totalInterest;
      const monthlyPayment = totalWithInterest / term.months;
      const netMonthly = Math.max(0, monthlyPayment - estimatedSavings - revenueStreams.total);

      allOptions.push({
        systemCost: selectedSystem.cost,
        monthlyPayment: Number(monthlyPayment.toFixed(2)),
        monthlySavings: Number(estimatedSavings.toFixed(2)),
        netMonthly: Number(netMonthly.toFixed(2)),
        loanTerm: term.months,
        interestRate: term.interestRate * 100,
        totalInterest: Number(totalInterest.toFixed(2)),
        revenueStreams: {
          netMetering: Number(revenueStreams.netMetering.toFixed(2)),
          carbonCredits: Number(revenueStreams.carbonCredits.toFixed(2)),
          total: Number(revenueStreams.total.toFixed(2))
        },
        systemDetails: selectedSystem
      });
    }

    return allOptions;
  } catch (error) {
    console.error('Error calculating loan options:', error);
    return null;
  }
}