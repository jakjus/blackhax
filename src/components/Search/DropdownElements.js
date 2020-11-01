import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

class DropdownElements extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ""
		};
		this.fetchData = this.fetchData.bind(this);
	}
	static propTypes = {
		query: PropTypes.string.isRequired,
		dActive: PropTypes.bool.isRequired,
		callback: PropTypes.func.isRequired
	};
	componentDidUpdate(prevProps) {
		if (this.props.query !== prevProps.query) {
			this.fetchData(this.props.query);
		}
	}

	fetchData = name => {
		const URI =
			"https://host.jakjus.com/search?server=" +
			this.props.server +
			"&name=" +
			name +
			"&n=5";
		fetch(URI)
			.then(r => r.json())
			.then(r => {
				this.setState({ data: r });
			})
			.catch(e => console.log("Error: ", e));
	};

	render() {
		const st = this.state.data;
		const items = [];
		for (let obj of st) {
			items.push(
				<Link key={this.props.server+obj["auth"]} to={`/ranks/${this.props.server}/${obj["auth"]}`} onClick={e => this.props.callback(e)}>
					<ListGroupItem className="list-group-item-action" key={obj["name"]}>
						{obj["name"]} <small>({obj["elo"]})</small>
					</ListGroupItem>
				</Link>
			);
		}

		if (this.props.dActive) {
			return <ListGroup flush>{items}</ListGroup>;
		}
		return <></>;
	}
}

export default DropdownElements;
