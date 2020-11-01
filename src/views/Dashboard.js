/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
	Row,
	Col
} from "reactstrap";

// core components
import {
} from "variables/charts.js";

import History from "components/Graphs/History.js";
import Details from "components/Graphs/Details.js";
import LatestTable from "components/Tables/LatestTable.js";
import MainSearch from "components/Search/MainSearch.js";

class Dashboard extends React.Component {
	render() {
		return (
			<>
				<div className="content">
					<Row>
						<Col md="12">
							<MainSearch server={this.props.match.params.server}/>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<Details
								server={this.props.match.params.server}
								auth={this.props.match.params.auth}
							/>
						</Col>
						<Col md="6">
							<LatestTable
								servername={this.props.match.params.server}
								auth={this.props.match.params.auth}
							/>
						</Col>
					</Row>
					<History
						server={this.props.match.params.server}
						auth={this.props.match.params.auth}
					/>
				</div>
			</>
		);
	}
}

export default Dashboard;
