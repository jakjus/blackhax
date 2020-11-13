import React, { useState, useEffect } from "react";
import {
	Card,
	Table,
	CardHeader,
	CardBody,
	CardTitle,
	Col,
	Row
} from "reactstrap";

import { Link } from "react-router-dom";

const ServerStatus = props => {
	const [status, setStatus] = useState(null);

	useEffect(() => {
		const URI = "https://host.jakjus.com/readStatus?server=" + props.servername;
		fetch(URI)
			.then(r => r.json())
			.then(r => setStatus(r[0]))
			.catch(e => console.log("Error: ", e));
	}, [props]);

	if (!status) {
		return <CardTitle tag="h4"> Loading...</CardTitle>;
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle tag="h4">
					<i className="mr-2 tim-icons icon-planet text-info" /> Server Status
				</CardTitle>
			</CardHeader>
			<CardBody>
				<h6 className="mb-3">{status.roomName}</h6>
				<CardBody className="border">
					<Row>
						<Col>
							Red
							{status.players &&
								status.players
									.filter(i => i.team == 1)
									.map(p => (
										<Link
											className="d-block"
											to={
												!p.placement
													? `/ranks/${props.servername}/${p.auth}`
													: undefined
											}
										>
											{p.name}{" "}
											<small>
												({(!p.placement && p.elo) || (p.placement && "--")})
											</small>
										</Link>
									))}
						</Col>
						<Col>
							Spec
							{status.players &&
								status.players
									.filter(i => i.team == 0)
									.map(p => (
										<Link
											className="d-block"
											to={
												!p.placement
													? `/ranks/${props.servername}/${p.auth}`
													: undefined
											}
										>
											{p.name}{" "}
											<small>
												({(!p.placement && p.elo) || (p.placement && "--")})
											</small>
										</Link>
									))}
						</Col>
						<Col>
							Blue
							{status.players &&
								status.players
									.filter(i => i.team == 2)
									.map(p => (
										<Link
											className="d-block"
											to={
												!p.placement
													? `/ranks/${props.servername}/${p.auth}`
													: undefined
											}
										>
											{p.name}{" "}
											<small>
												({(!p.placement && p.elo) || (p.placement && "--")})
											</small>
										</Link>
									))}
						</Col>
					</Row>
				</CardBody>
				<h6 className="mt-4 text-muted">
					{status.players ? status.players.length : 0}/{status.maxPlayers}{" "}
					players online
				</h6>
				<a
					key={status.link}
					className="btn mt-3 btn-block"
					href={status.link}
					target="_blank"
				>
					<i className="tim-icons icon-controller mr-2" />
					Join server
				</a>
			</CardBody>
		</Card>
	);
};

export default ServerStatus;
