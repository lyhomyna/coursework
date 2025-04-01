console.log("JavaScript loaded.")
// document.addEventListener("DOMContentLoaded", () => { 
//     const divEl = `
// 	<div class="greet-container">
// 	    <div class="greet-box">
// 		<h2>Welcome to the page!</h2>
// 	    </div>
// 	</div>
//     `;
//     const tempContainer = document.createElement("div");
//     tempContainer.innerHTML = divEl;
// 
//     const greetElement = tempContainer.firstElementChild;
//     greetElement.addEventListener("click", (e) => { 
// 	if (!e.target.closest(".greet-box")) {
// 	    greetElement.remove(); 
// 	}
//     });
//     document.body.insertBefore(greetElement, document.body.firstChild)
// })

const scrollBtn = document.getElementById("scroll-top-btn");
const locationsBtn = document.querySelector(".dropdown-btn.locations");
const locations = document.querySelector(".dropdown-content.locations");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

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


