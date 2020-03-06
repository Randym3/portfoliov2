import Modal from "./modal.js";
import Project from "./projects.js";
import { elements } from "./base.js";
import "./responsivemenu.js";

class App {
	constructor() {
		this.modal = new Modal();
		this.project = new Project();
		this.state = {
			projects: []
		};
		this.loadAsynchronous();
	}

	loadAsynchronous() {
		this.project.getProjects().then(data => {
			this.state.projects = data;
			this.loadUI();
		});
	}

	loadUI() {
		const { projectContainer } = elements;
		const html = this.state.projects.map(cur =>
			projectMarkUp(
				cur.imgSrc,
				cur.title,
				cur.details,
				cur.demoURL,
				cur.gitHubURL,
				cur.toolsUsed
			)
		);
		html.forEach(cur => {
			projectContainer.innerHTML += cur;
		});
		document
			.querySelectorAll("div.project-card")
			.forEach(cur => cur.addEventListener("click", this.modal.openModal));

		function projectMarkUp(
			imgSrc,
			title,
			details,
			demoURL,
			gitHubURL,
			toolsUsed
		) {
			return `
			<div class="project-card" id="${title.toLowerCase()}" 
			data-project-title="${title}" 
			data-project-img-src="${imgSrc}"
			data-project-details="${details}" 
			data-project-demo-url="${demoURL}" 
			data-project-github-url="${gitHubURL}"
			data-project-toolsused="${toolsUsed}">
				<img src="${imgSrc}" />
				<div class="project-caption flex-container jc-center align-items-center ">
					<div class="info-icon">
						<i class="fas fa-plus"></i>
					</div>
				</div>
			</div>`;
		}
	}

	registerCloseModalEvents() {
		const { closeModalButton } = elements;

		closeModalButton.addEventListener("click", () => this.modal.closeModal());
		document.addEventListener("click", e => this.modal.outsideClickClose(e));
	}

	init() {
		this.registerCloseModalEvents();
		console.log(this);
		// setTimeout(() => this.loadUI(), 1000);
	}
}

const app = new App();
app.init();
