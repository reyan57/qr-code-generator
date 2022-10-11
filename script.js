// made by reyan :D

const wrapper = document.querySelector("wrapper"),
qrInput = wrapper.querySelector(".form input",
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
	let qrValue = qrInput.value.trim();
	if(!qrValue || preValue === qrValue) return;
	preValue = qrValue;
	generateBtn.innerText = "Generating QR Code :D";
	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
	qr.Img.addEventListener("load", () => {
		generateBtn.innerText = "Generate QR Code";
	});
});

qrInput.addEventListener("keyup", () => {
	if(!qrInput.value.trim()) {
		wrapper.classList.remove("active");
		preValue = "";
	}
});

// idk why i am using notepad++ , don't mind it AHAHAHAHA :')