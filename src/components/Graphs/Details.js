import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import { chartDoughnut } from "variables/charts.js";
// react plugin used to create charts
import Chartjs from "chart.js";

// reactstrap components
import {
	Badge,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Row,
	Col,
} from "reactstrap";

const Details = props => {
	const colors = {
		bronze: [0xb2a493, null, "Bronze"],
		silver: [0xcfcfcf, null, "Silver"],
		gold: [0xe6da88, null, "Gold"],
		diamond: [0xbbfafa, null, "Diamond"],
		master: [0xfce3ff, "bold", "Master"],
		unranked: [0x6e6e6e, null, "Unranked"],
		ann: [0xdcfa50, "small-bold"]
	};
	let rank = { silver: 1130, gold: 1310, diamond: 1440, master: 1600 };
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
	const [info, setInfo] = useState(null);
	const chartContainer = useRef(null);
	const [chartInstance, setChartInstance] = useState(null);

	useEffect(() => {
		const URI =
			"https://host.jakjus.com/players?server=" +
			props.server +
			"&auth=" +
			props.auth;
		fetch(URI)
			.then(r => r.json())
			.then(r => {
				setInfo(r[0]);
			})
			.catch(e => console.log("Error: ", e));
	}, [props]);

	useEffect(() => {
		if (chartContainer && chartContainer.current) {
			let gradientChart = chartDoughnut;
			const newChartInstance = new Chartjs(
				chartContainer.current,
				gradientChart
			);
			setChartInstance(newChartInstance);
		}
	},[])

	useEffect(() => {
		if (chartInstance) {
			//let newChartInstance = chartInstance;
			chartInstance.data.datasets[0].data = [info.wins, info.losses];
			//setChartInstance(newChartInstance);
			chartInstance.update();
		}
	}, [info]);

	return (
				<Card className="card-chart">
					<CardHeader>
						<Row>
							<Col className="text-left">
								<h5 className="card-category">Summary - {props.server}</h5>
								<CardTitle tag="h2">
									<i className="tim-icons icon-single-02 text-info" />{" "}
									{info && info.name}{" "}
									<Badge style={{ verticalAlign: "middle" }} color="secondary">
										{info && info.elo}
									</Badge>
									<Badge style={{ verticalAlign: "middle" }} color="default">
										{info && colorFromElo(info.elo)[2]}
									</Badge>
								</CardTitle>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<div className="chart-area">
							<canvas ref={chartContainer} />
						</div>
					</CardBody>
				</Card>
	);
};

export default Details;
