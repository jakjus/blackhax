import React, { useState, useEffect } from "react";
import { Badge, Card, Table, CardHeader, CardBody, CardTitle } from "reactstrap";

import { Link } from "react-router-dom";

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
					<i className="mr-2 tim-icons icon-bullet-list-67 text-info" /> Latest
					Matches
				</CardTitle>
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
									{item.winners.map(p => (
										<Link
											className="d-block"
											to={
												!p.placement
													? `/ranks/${props.servername}/${p.auth}`
													: undefined
											}
										>
											{p.name}{" "}
									<Badge style={{ verticalAlign: "middle" }} color="secondary">
												{(!p.placement && p.elo) || (p.placement && "--")}
											</Badge>
										</Link>
									))}
								</td>
								<td>
									{item.losers.map(p => (
										<Link
											className="d-block"
											to={
												!p.placement
													? `/ranks/${props.servername}/${p.auth}`
													: undefined
											}
										>
											{p.name}{" "}
									<Badge style={{ verticalAlign: "middle" }} color="secondary">
												{(!p.placement && p.elo) || (p.placement && "--")}
											</Badge>
										</Link>
									))}
								</td>
								<td><small>{new Date(item.date).toLocaleString()}</small></td>
							</tr>
						))}
					</tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

export default LatestTable;
