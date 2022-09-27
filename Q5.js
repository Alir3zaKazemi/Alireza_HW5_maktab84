// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }
// ask(
// 	"Do you agree?",
// 	function () {
// 		alert("You agreed.");
// 	},
// 	function () {
// 		alert("You canceled the execution.");
// 	}
// );

//________________________________________________________

//Modified to arrow function
const func = (question, yes, no) => {
	confirm(question) ? yes() : no();
};

func(
	"Do you agree?",
	() => alert("You agreed"),
	() => alert("You cancelled the execution.")
);
