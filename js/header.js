const locationsBtn = document.querySelector(".dropdown-btn.locations");
const locations = document.querySelector(".dropdown-content.locations");
const logo = document.querySelector(".logo");

const locationsArr = ["Kyiv", "Lviv", "Zhytomyr", "Cherkasy", "Ternopil", "Rivne", "Dnipro", "Vinnytsia", "Volyn", "Donetsk", "Zakarpattia", "Zaporizhzhia", "Crimea", "Ivano-Frankivsk", "Kirovohrad", "Luhansk", "Mykolaiv", "Odessa", "Poltava", "Sumy", "Kharkiv", "Kherson", "Khmelnytskyi", "Chernivtsi", "Chernihiv"];

locationsBtn.addEventListener("mouseover", () => {
    let elements = "";
    for (let i = 0; i < locationsArr.length; i++) {
	const anchor = document.createElement("a");

	if (locationsArr[i] === "Crimea") {
	    anchor.href = `https://www.google.com/maps/place/${locationsArr[i]}+Peninsula`;
	} else {
	    anchor.href = `https://www.google.com/maps/place/${locationsArr[i]}+Oblast`;
	}
	anchor.target = "_blank";
	anchor.innerText = locationsArr[i];
	
	elements += anchor.outerHTML;
    }

    console.log("HELLO" + elements);

    locations.innerHTML = elements; 
});

logo.addEventListener("click", () => {
    location.href = "/";
});
