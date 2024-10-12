import { calculateInvestmentResults, formatter } from '../util/investment';

export default function ResultsTable({ investmentData }) {
	return (
		<section id="results">
			<h2>Results</h2>
			<table>
				<thead>
					<tr>
						<th>Year</th>
						<th>Interest</th>
						<th>Investment</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{/* {investmentData.map((data) => (
						<tr key={data.year}>
							<td>{data.year}</td>
							<td>{formatter.format(data.interest)}</td>
							<td>{formatter.format(data.annualInvestment)}</td>
							<td>{formatter.format(data.valueEndOfYear)}</td>
						</tr>
					))} */}
				</tbody>
			</table>
		</section>
	);
}
