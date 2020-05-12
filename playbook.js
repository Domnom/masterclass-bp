const path = require("path");

const step_01 = require('./step-01/playbook-step-01.js');
const step_02 = require('./step-02/playbook-step-02.js');
const trailing_commits = require('./trailing-commits/playbook-trailing-commits.js');

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStepFromModel(step_01)
			.addStepFromModel(step_02)
			.addStepFromModel(trailing_commits)
	.write(path.join(__dirname, "playbook.json"));