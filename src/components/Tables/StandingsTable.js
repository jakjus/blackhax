import React, { useState, useEffect } from "react";
import {
  CardTitle,
  Table,
	Card,
	CardHeader,
	CardBody
} from "reactstrap";
import { Link } from "react-router-dom";

const StandingsTable = props => {
	const [array, setArray] = useState(null);
	const colors = {
		bronze: [0xb2a493, null, "Bronze"],
		silver: [0xcfcfcf, null, "Silver"],
		gold: [0xe6da88, null, "Gold"],
		diamond: [0xbbfafa, null, "Diamond"],
		master: [0xfce3ff, "bold", "Master"],
		unranked: [0x6e6e6e, null, "Unranked"],
		ann: [0xdcfa50, "small-bold"]
	};
	let rank = { silver: 1130, gold: 1310, diamond: 1440, master: 1550 };
	const colorFromElo = elo => {
		if (elo < rank.silver) {
			return colors.bronze;
		} else if (elo < rank.gold) {
			return colors.silver;
		} else if (elo < rank.diamond) {
			return colors.gold;
		} else if (elo < rank.master) {
			return colors.diamond;
		} else {
			return colors.master;
		}
	};

	useEffect(() => {
		const URI =
			"https://host.jakjus.com/allplayers?server=" + props.servername + "&n=" + 30;
		fetch(URI)
			.then(r => r.json())
			.then(r => {
				r.forEach((item, i) => (item.id = i + 1));
				r.forEach((item, i) => {
					item.league = colorFromElo(item.elo)[2];
				});
				return r;
			})
			.then(r => setArray(r))
			.catch(e => console.log("Error: ", e));
	}, [props]);

	if (array == null) {
		return <CardTitle tag="h4"> Loading...</CardTitle>;
	} else {
		return (
		<Card>
			<CardHeader>
				<CardTitle tag="h4">
									<i className="mr-2 tim-icons icon-trophy text-info" />{" "}
				Standings</CardTitle>
			</CardHeader>
			<CardBody>
			<Table className="tablesorter" responsive>
				<thead className="text-primary">
					<tr>
						<th>Place</th>
						<th>Nickname</th>
						<th>Elo points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{array.map(item => (
						<tr>
							<td>#{item.id}</td>
							<td>
									<Link className="d-block" to={`/ranks/${props.servername}/${item.auth}`}>
								{item.name}
									</Link>
							</td>
							<td>{item.elo}</td>
							<td>{item.league}</td>
						</tr>
					))}
				</tbody>
			</Table>
			</CardBody>
		</Card>
		);
	}
};

export default StandingsTable;
