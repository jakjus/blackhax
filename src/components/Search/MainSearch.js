import React, { Component } from "react";
import DropdownElements from "./DropdownElements";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardBody
} from "reactstrap";


class MainSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: "is-active",
			query: "",
			dActive: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.onFocus = this.onFocus.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		e.target.value !== ""
			? this.setState({ dActive: true })
			: this.setState({ dActive: false });
	}

	onFocus = () => {
		if (this.state.query !== "") {
			this.setState({ dActive: true });
		}
	};

	callback = text => {
		//this.setState({ query: '' });
		this.setState({ dActive: false });
	};

	render() {
		return (
			<>
				<Card>
					<CardBody>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>
									<i className="tim-icons icon-zoom-split"/>
								</InputGroupText>
							</InputGroupAddon>
								<Input
									onFocus={this.onFocus}
									autoComplete="off"
									name="query"
									type="text"
									value={this.state.query}
									onChange={this.handleChange}
									placeholder="Enter nickname"
								/>
							</InputGroup>
						</CardBody>
				<DropdownElements
					callback={text => this.callback(text)}
					query={this.state.query}
					dActive={this.state.dActive}
					server={this.props.server}
				/>
				</Card>
			</>
		);
	}
}
export default MainSearch;
