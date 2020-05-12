const path = require('path');

module.exports = step("step-02")
					.addCode("step-02/code/package.hbs", "package.json")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("step-02/code/Animal.schema.hbs", "Animal.schema.ts")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/animal")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("The animal schema takes in the name of an animal")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
