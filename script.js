const url = "https://jsonplaceholder.typicode.com/posts/1";

const button = document.getElementById("btn");
const output = document.getElementById("output");

//  async function that accepts a callback
async function fetchData(callback) {
	const response = await fetch(url);
	const data = await response.json();

	// Call the callback with the result
	callback(data.title);
}

button.addEventListener("click", () => {
	fetchData((title) => {
		output.textContent = title;
	});
});