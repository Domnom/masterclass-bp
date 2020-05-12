const path = require('path');

module.exports = step("step-01")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/README.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
