import { Component } from "react";
import { withRouter } from "react-router";
import scpAPI from "./data/service/scp.service";

class Article extends Component {
	state = {
		scp: null,
	};

	fetchScp = async (_id) => {
		try {
			const { data: scp } = await scpAPI.get(`/Data/${_id}`);
			this.setState({
				scp,
			});
		} catch (ex) {}
	};
	componentDidMount() {
		this.fetchScp(this.props.match.params[0]);
	}
	render() {
		const { scp } = this.state;
		return (
			<article>
				<div className="info">
					<h2>{scp?.item}</h2>
					<p className="class">
						Class: <span>{scp?.class}</span>
					</p>
				</div>
				<div className="details">
					{scp?.image ? (
						<div className="part">
							<img src={scp?.image} alt={scp?.title} />
						</div>
					) : null}
					<div className="part">
						<p className="head">Description</p>
						<p>{scp?.description}</p>
					</div>
					<br />
					<div className="part">
						<p className="head">Containment Procedure</p>
						<p>{scp?.containment}</p>
					</div>
				</div>
			</article>
		);
	}
}

export default withRouter(Article);
