import React, { useState, useEffect } from "react";
import {
	Card,
	Table,
	CardHeader,
	CardBody,
	CardTitle
} from "reactstrap";

const LatestTable = props => {
	const [array, setArray] = useState(null);

	useEffect(() => {
		let auth = props.auth || "";
		const URI =
			"https://host.jakjus.com/matches?server=" +
			props.servername +
			"&auth=" +
			auth +
			"&n=5";
		fetch(URI)
			.then(r => r.json())
			.then(r => setArray(r))
			.catch(e => console.log("Error: ", e));
	}, [props]);

	if (!array) {
		return <CardTitle tag="h4"> Loading...</CardTitle>;
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle tag="h4">
					<i className="mr-2 tim-icons icon-bullet-list-67 text-info" />{" "}
				Latest Matches</CardTitle>
			</CardHeader>
			<CardBody>
				<Table className="tablesorter" responsive>
					<thead className="text-primary">
						<tr>
							<th>Winner</th>
							<th>Loser</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{array.map(item => (
							<tr key={item.date}>
								<td>
									<a className="d-block" href={!item.winners[0].placement ? `/ranks/${props.servername}/${item.winners[0].auth}` : undefined}>
									{item.winners[0].name}{" "}
									<small>
										(
										{(!item.winners[0].placement && item.winners[0].elo) ||
											(item.winners[0].placement && "--")}
										)
									</small>
									</a>
								</td>
								<td>
									<a className="d-block" href={!item.losers[0].placement ? `/ranks/${props.servername}/${item.losers[0].auth}` : undefined}>
									{item.losers[0].name}{" "}
									<small>
										(
										{(!item.losers[0].placement && item.losers[0].elo) ||
											(item.losers[0].placement && "--")}
										)
									</small>
									</a>
								</td>
								<td>
									{new Date(item.date).toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

export default LatestTable;
