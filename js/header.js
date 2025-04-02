const locationsBtn = document.querySelector(".dropdown-btn.locations");
const locations = document.querySelector(".dropdown-content.locations");
const logo = document.querySelector(".logo");

const locationsArr = ["Austin", "Atlanta", "Boston", "Chicago", "Columbus", "Dallas", "Denver", "Hartford", "Houston", "Los Angeles", "Nahville", "New York", "Omaha", "Philadelphia", "Phoenix", "Pittsburgh", "Portland", "Raleigh", "Salt Lake City", "San Diego", "San Francisco"];

locationsBtn.addEventListener("mouseover", () => {
    let elements = "";
    for (let i = 0; i < locationsArr.length; i++) {
	const anchor = document.createElement("a");
	anchor.href = "#";
	anchor.innerText = locationsArr[i];
	
	elements += anchor.outerHTML;
    }

    console.log("HELLO" + elements);

    locations.innerHTML = elements; 
});

logo.addEventListener("click", () => {
    location.href = "/";
});
