const path = require('path');

module.exports = step("trailing-commits")
					.addCode("trailing-commits/code/Animal.schema.hbs", "Animal.schema.ts")
						.withPartial("partial_1", "trailing-commits/code/Animal.schema_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "trailing-commits/code/Animal.schema_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
