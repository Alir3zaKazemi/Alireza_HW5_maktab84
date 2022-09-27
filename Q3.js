const arr = [
	{
		name: "abbas",
		age: 24,
	},
	{
		name: "alireza",
		age: 23,
	},
	{
		name: "mohammd",
		age: 26,
	},
];

let sorted = () => {
	arr.sort((a, b) => a.age - b.age);
	console.log(arr);
};

sorted();
