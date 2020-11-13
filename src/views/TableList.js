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

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

import StandingsTable from "components/Tables/StandingsTable.js"
import LatestTable from "components/Tables/LatestTable.js"
import MainSearch from "components/Search/MainSearch.js"
import ServerStatus from "components/Tables/ServerStatus.js"

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
							<MainSearch server={this.props.match.params.server}/>
							<ServerStatus servername={this.props.match.params.server}/>
							<LatestTable servername={this.props.match.params.server}/>
            </Col>
            <Col md="6">
									<StandingsTable servername={this.props.match.params.server}/>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
