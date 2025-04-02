const youtubeBtn = document.getElementById("youtube");
const linkedinBtn = document.getElementById("linkedin");
const instagramBtn = document.getElementById("instagram");
const facebookBtn = document.getElementById("facebook");

youtubeBtn.addEventListener("click", () => {
    const width = 600, height = 400;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open("https://www.youtube.com", "socials", `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=no,resizable=no,status=no`);
});

linkedinBtn.addEventListener("click", () => {
    const newWin = window.open("https://ua.linkedin.com", "socials", "toolbar=no,menubar=no");
    if (newWin) {
	newWin.focus();
    }
});

instagramBtn.addEventListener("click", () => {
    window.open("https://www.instagram.com/", "socials", "width=400,height=450,toolbar=no,menubar=no,scrollbars=no,resizable=no,status=no");
});

facebookBtn.addEventListener("click", () => {
    const newWin = window.open("https://www.facebook.com/");
    setTimeout(() => {
	newWin.close();
    }, 3000);
});
