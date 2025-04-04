const form = document.querySelector("form");
const emailLabel = document.querySelector('label[for="email"]');
const zipLabel = document.querySelector('label[for="zip"]');
const phoneLabel = document.querySelector('label[for="phone"]');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    if (!isFieldsValid(formData)) {
	return;
    }

    const dataJson = {};
    dataJson["time"] = new Date().getTime();
    for (const [key, value] of formData) {
	dataJson[key] = value;
    }

    alert("Ось що ми відправимо на сервер:\n" + JSON.stringify(dataJson));

    form.reset();
});

String.prototype.isNumber = function(){return /^\d+$/.test(this);}
const wrongClassName = "wrong";

function isFieldsValid(formData) {
    let fieldsValid = true;

    if (!formData.get("zip").isNumber()) {
	console.warn("wrong zip");
	zipLabel.classList.add(wrongClassName);
	fieldsValid = false;
    } else if (zipLabel.classList.contains(wrongClassName)) {
	zipLabel.classList.remove(wrongClassName);
    }

    if (!formData.get("phone").isNumber()) {
	console.warn("wrong phone");
	phoneLabel.classList.add(wrongClassName);
	fieldsValid = false;
    } else if (phoneLabel.classList.contains(wrongClassName)) {
	phoneLabel.classList.remove(wrongClassName);
    }

    if (!formData.get("email").includes("@") || formData.get("email").trim().includes(" ")) {
	console.warn("wrong email");
	emailLabel.classList.add(wrongClassName);
	fieldsValid = false;
    } else if (emailLabel.classList.contains(wrongClassName)) {
	emailLabel.classList.remove(wrongClassName);
    }

    return fieldsValid;
}

form.addEventListener("reset", () => {
    clearWrongs();
});

function clearWrongs() {
    const wrongs = document.querySelectorAll('.wrong');
    for (let i = 0; i < wrongs.length; i++) {
	wrongs[i].classList.remove("wrong");
    }
}
