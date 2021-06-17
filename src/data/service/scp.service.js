import axios from "axios";
import configs from "../../config";

const scpAPI = axios.create({
	baseURL: configs.API_URL,
	headers: {
		"x-apikey": configs.API_KEY,
	},
});

export default scpAPI;
