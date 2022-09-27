let user = {
	name: "john",
	age: 30,
};

user.greet = function () {
	console.log(`Hello ${user.name}`);
};

user.greet();
