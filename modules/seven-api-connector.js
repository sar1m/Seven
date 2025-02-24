const { Helpers: H } = require("../helpers/helpers.js")

class SevenApiConnector {

	constructor(ds) {
		this.auth = {token:null}
		this.ds = ds
	}
	
	getConfig(req, res) {
		res.status(200).json(process.env)
	}

	getDatastore(req, res) {
		const path = JSON.parse(req.query.path)
		if (path && path.length) { // Is a nested address
			if (Array.isArray(path)) {
				res.status(200).json(H.sAcc(this.ds, ...path))
			} else { // Is a single string
				res.status(200).json(H.sAcc(this.ds, [path]))
			}
			
		} else {
			res.status(200).json(this.ds)
		}

	}

}

module.exports = { SevenApiConnector }