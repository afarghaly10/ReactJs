import { calculateInvestmentResults, formatter } from '../util/investment';

export default function ResultsTable({ investmentData }) {
	const deriveInvestmentCalculation = (investmentData) => {
		const investments = { ...investmentData };
		const investmentCalculations = calculateInvestmentResults(investments);
		return investmentCalculations.map((element) => {
			return {
				year: element.year,
				investmentValue: element.valueEndOfYear,
				interest: element.interest,
				totalInterest:
					element.valueEndOfYear -
					element.annualInvestment * element.year -
					investments.initialInvestment,
				investedCapital:
					investments.initialInvestment +
					element.annualInvestment * element.year,
			};
		});
	};

	return (
		<table id="result" className="center">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest(Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{deriveInvestmentCalculation(investmentData).map((data) => (
					<tr key={data.year}>
						<td>{data.year}</td>
						<td>{formatter.format(data.investmentValue)}</td>
						<td>{formatter.format(data.interest)}</td>
						<td>{formatter.format(data.totalInterest)}</td>
						<td>{formatter.format(data.investedCapital)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
