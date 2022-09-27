let steps = {
	count: 18,
};

steps.read = function () {
	console.log(`\nsteps count is ${steps.count}`);
};

steps.increase = function () {
	console.log(`\nprevious step count : ${steps.count}`);
	steps.count += 1;
	console.log(`new step count is increased by +1 : ${steps.count}`);
};

steps.decrease = function () {
	if (steps.count > 0) {
		console.log(`\nprevious step count : ${steps.count}`);
		steps.count -= 1;
		console.log(`new step count is decreased by -1: ${steps.count}`);
	} else {
		console.log("invalid value of step counts");
	}
};

steps.reset = function () {
	console.log(`\nstep count was ${steps.count}`);
	steps.count = 0;
	console.log(`now it is reset to ${steps.count}`);
};

steps.read();
steps.increase();
steps.decrease();
steps.reset();
