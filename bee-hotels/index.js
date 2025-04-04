document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const headerHeight = document.querySelector("header").offsetHeight;
	// target.getBoundingClientRect() — отримує об'єкт з розмірами та позицією елемента відносно вікна
	const targetOffset = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: targetOffset - headerHeight,
            behavior: "smooth"
        });
    });
});
