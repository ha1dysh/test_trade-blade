import { animate,	inView,	stagger } from "https://cdn.jsdelivr.net/npm/motion@10.17.0/+esm";
import SplitType from "https://cdn.jsdelivr.net/npm/split-type@0.3.4/+esm";

const menu = {
	open: document.getElementById("menu-open"),
	list: document.getElementById("menu-list"),
};
menu.open.addEventListener("click", () => {
	animate(menu.list, { left: "0" });
	document.body.classList.toggle('overflow-hidden');
});
menu.list.addEventListener("click", ({ target: { tagName } }) => {
	if (window.innerWidth > 768 || (tagName !== "A" && tagName !== "IMG")) { 
		return
	}
	animate(menu.list, { left: "-100%" });
	document.body.classList.toggle('overflow-hidden');
});

const counter = document.querySelectorAll('[data-anime-counter]');
counter.forEach((value) => {
	let startValue = 0
	const endValue  = parseInt(value.getAttribute('data-anime-counter'))
	const incr = Math.ceil(endValue / 50)

	let counter = setInterval(() => {
		startValue += incr
		value.textContent = startValue
		if (startValue >= endValue) {
			clearInterval(counter)
		}
	}, 50)
})

const text = document.querySelectorAll('[data-anime-text]')
inView(text[0], () => { 
	const splitText = new SplitType(text);
	animate(
		splitText.words,
		{ opacity: [0, 1] },
		{ duration: 0.75, delay: stagger(0.03) }
	);
});

const images = document.querySelectorAll('[data-anime-image]')
animate(images, { opacity: [0, 1], scale: [0.5, 1] }, { duration: 0.75 } );

const input = document.querySelector('[data-anime-input]')
animate(input, { x: ['-50%', 0], opacity: [0, 1] }, { duration: 0.75 } );

const company = document.querySelector('[data-anime-company]')
inView(company, () => { 
	animate(company, { left: 0, opacity: [0, 1] }, { duration: 0.75 } );
});

const standard = document.querySelectorAll('[data-anime-standard]')
inView(standard, () => { 
	animate(standard, { x: ['-100%', 0], opacity: [0, 1] }, { duration: 0.75 } );
});

const vip = document.querySelectorAll('[data-anime-vip]')
inView(vip, () => { 
	animate(vip, { x: ['100%', 0], opacity: [0, 1] }, { duration: 0.75 } );
});