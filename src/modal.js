import { elements, modalElements, getToolIcon } from "./base.js";
const { modal, body } = elements;

export default class Modal {
	constructor() {}

	openModal() {
		console.log(this);
		const {
			header,
			img,
			details,
			demoURL,
			githubURL,
			modalToolsUsed
		} = modalElements;

		const toolsUsed = this.getAttribute("data-project-toolsused").split(",");
		console.log(toolsUsed);
		header.innerHTML = this.getAttribute("data-project-title");
		img.src = this.getAttribute("data-project-img-src");
		details.innerHTML = this.getAttribute("data-project-details");
		demoURL.href = this.getAttribute("data-project-demo-url");
		githubURL.href = this.getAttribute("data-project-github-url");
		toolsUsed.forEach(cur => (modalToolsUsed.innerHTML += getToolIcon(cur)));

		modal.classList.add("show");
		body.classList.add("hide-overflow");
	}

	closeModal() {
		const modalToolsUsed = modalElements.modalToolsUsed;
		modal.classList.add("closing");
		setTimeout(function() {
			modal.classList.remove("show");
			modal.classList.remove("closing");
			body.classList.remove("hide-overflow");
			modalToolsUsed.innerHTML = "";
		}, 180);
	}

	outsideClickClose(e) {
		if (e.target == modal) {
			this.closeModal();
		}
	}
}

// window.addEventListener("keydown", function(e) {
// 	if (e.keyCode == "Escape") {
// 		// close modal logic
// 	}
// });
