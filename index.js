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
