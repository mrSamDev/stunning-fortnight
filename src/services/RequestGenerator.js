import Utils from "./RequestUtils";

const log = console.log;

class Requester extends Utils {
	constructor() {
		super();
		this.initHeaders = this.initHeaders.bind(this);
		this.initParams = this.initParams.bind(this);
	}

	initParams({ parameters }) {
		let query = "";
		const self = this;
		for (const { key, value } of parameters) {
			if (query) query = query + (value !== undefined ? `&${key}=${value}` : "");
			else query = value !== undefined ? `${key}=${value}` : "";
		}
		return parameters && parameters.length ? `?${encodeURI(query)}` : "";
	}

	initHeaders({ headers, contentType, authorization }) {
		const h = new Headers();
		if (contentType) h.append("Content-Type", contentType);
		if (authorization) h.append("Authorization", authorization);
		if (headers && headers.length) {
			for (let index = 0; index < headers.length; index++) {
				const { key, value } = headers[index];
				h.append(key, value);
			}
		}

		// h.append("request-startTime", Date.now());

		return h;
	}

	async send(initValues) {
		try {
			const params = this.initParams(initValues);
			const { url, body, method } = initValues;
			const requestOptions = {
				method: method,
				headers: this.initHeaders(initValues),
				body: body,
				redirect: "follow",
			};

			const URL = `${url}${params}`;
			const start = Date.now();
			let response = null;
			try {
				response = await fetch(URL, requestOptions);
			} catch (err) {
				log("[send INNER]", err);
			}
			const millis = Date.now() - start;
			const json = (await response?.json()) || null;
			const status = response?.status || 404;
			return { body: json, status, time: millis };
		} catch (error) {
			log("[send]", error);
		}
	}

	async sendAxios() {}
}

export default Requester;
