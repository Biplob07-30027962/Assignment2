import React, { Component } from "react";
import { Link } from "react-router-dom";
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
		} catch (ex) { }
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
							<ListItem id={item._id} title={item.title} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const ListItem = ({ id, title }) => {
	return <Link to={`/article/${id}`}>{title}</Link>
}

export default SCPList;
