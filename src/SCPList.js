import React, { Component } from "react";
import scpAPI from "./data/service/scp.service";

class SCPList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scps: [],
		};
	}

	fetchScps = async () => {
		try {
			const { data: scps } = await scpAPI.get("/Data");
			this.setState({ scps });
		} catch (ex) {}
	};
	componentDidMount() {
		this.fetchScps();
	}

	render() {
		const { scps = [] } = this.state;
		return (
			<div className="main-article-list">
				<h4>Available Articles</h4>
				<ul>
					{scps?.map((item, i) => (
						<li key={"scp-list-" + i}>
							<a href={`/${process.env.REACT_APP_REPOSITORY}/article/${item._id}`}>{item.title}</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default SCPList;
