import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import goalsJson from 'assets/goalsJson'

import { Link } from "react-router-dom";

const LatestTable = props => {
	let g = goalsJson[props.servername] 
	return g ? (
		<Card>
			<CardHeader>
				<CardTitle tag="h4">
					<i className="mr-2 tim-icons icon-user-run text-info" /> Goal of the Month by 
						<Link to={`/ranks/${props.servername}/${g.auth}`}>{g.nickname}
					</Link>
				</CardTitle>
			</CardHeader>
			<CardBody>
				{g.video} 
			</CardBody>
		</Card>
	) : null;
};

export default LatestTable;
