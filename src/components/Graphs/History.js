import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { chartExample1 } from "variables/charts.js";
// react plugin used to create charts
import Chartjs from "chart.js";

// reactstrap components
import {
	Button,
	ButtonGroup,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Row,
	Col
} from "reactstrap";

const History = props => {
	const [nickname, setNickname] = useState(null);
	const [stats, setStats] = useState(null);
	const [chart, setChart] = useState("all");
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
				setNickname(r[0].name);
				setStats(r[0].history);
			})
			.catch(e => console.log("Error: ", e));
	}, [props]);

	useEffect(() => {
		let canv = chartContainer.current.getContext("2d");
		let gradientStroke = canv.createLinearGradient(0, 230, 0, 50);
		gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
		gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
		gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
		if (chartContainer && chartContainer.current) {
			let gradientChart = chartExample1;
			gradientChart.data.datasets[0].backgroundColor = gradientStroke;
			const newChartInstance = new Chartjs(
				chartContainer.current,
				gradientChart
			);
			setChartInstance(newChartInstance);
		}
	},[])

	useEffect(() => {
		if (chartInstance && stats) {
			if (chart === "week") {
				chartInstance.data.datasets[0].data = stats.map(o => ({t: o.date, y: o.elo})).slice(-(6 * 7));
			} else if (chart === "month") {
				chartInstance.data.datasets[0].data = stats.map(o => ({t: o.date, y: o.elo})).slice(-(6 * 30));
			} else if (chart === "all") {
				chartInstance.data.datasets[0].data = stats.map(o => ({t: o.date, y: o.elo}));
			}
			chartInstance.update();
		}
	}, [stats, chart]);

	return (
		<Row>
			<Col xs="12">
				<Card className="card-chart">
					<CardHeader>
						<Row>
							<Col className="text-left" sm="6">
								<h5 className="card-category">Rank history - {props.server}</h5>
								<CardTitle tag="h2">
                    <i className="tim-icons icon-chart-bar-32 text-info" />{" "}
								{nickname}</CardTitle>
							</Col>
							<Col sm="6">
								<ButtonGroup
									className="btn-group-toggle float-right"
									data-toggle="buttons"
								>
									<Button
										tag="label"
										className={classNames("btn-simple", {
											active: chart === "week"
										})}
										color="info"
										id="0"
										size="sm"
										onClick={() => setChart("week")}
									>
										<input
											defaultChecked
											className="d-none"
											name="options"
											type="radio"
										/>
										<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
											Week
										</span>
										<span className="d-block d-sm-none">W</span>
									</Button>
									<Button
										color="info"
										id="1"
										size="sm"
										tag="label"
										className={classNames("btn-simple", {
											active: chart === "month"
										})}
										onClick={() => setChart("month")}
									>
										<input className="d-none" name="options" type="radio" />
										<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
											Month
										</span>
										<span className="d-block d-sm-none">M</span>
									</Button>
									<Button
										color="info"
										id="2"
										size="sm"
										tag="label"
										className={classNames("btn-simple", {
											active: chart === "all"
										})}
										onClick={() => setChart("all")}
									>
										<input className="d-none" name="options" type="radio" />
										<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
											All Time
										</span>
										<span className="d-block d-sm-none">A</span>
									</Button>
								</ButtonGroup>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<div className="chart-area">
							<canvas ref={chartContainer} />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};

export default History;
