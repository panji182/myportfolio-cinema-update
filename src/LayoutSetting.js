
class LayoutSetting {
	constructor () {
		this.setScrollDone = false;
		this.setTopDone = false;
		this.setAnchorDone = false;
		this.ELEMENT_NODE = 1;
	}
	setBackToTop(n_backToTopId) {
		if (!this.setScrollDone) {
			window.addEventListener("scroll",function(){
				let backTopElem = document.getElementById(n_backToTopId);
				const scrollPos = this.pageYOffset;
				if (scrollPos > 300) {
					backTopElem.style.display = "block";
				} else {
					backTopElem.style.display = "none";
				}
			});
			this.setScrollDone = true;
		}

		if (!this.setTopDone) {
			document.getElementById(n_backToTopId).addEventListener("click",function(e){
				e.preventDefault();
				const href = this.getAttribute("href");
				const offsetTop = document.querySelector(href).offsetTop;

				window.scroll({
					top: offsetTop,
					behavior: "smooth"
				});
			});
			this.setTopDone = true;
		}
	}
	setAnchorLink(n_anchorClass) {
		if (!this.setAnchorDone) {
			const classname = document.getElementsByClassName(n_anchorClass);
			for (let i = 0; i < classname.length; i++) {
				classname[i].addEventListener("click",function(e){
					e.preventDefault();
					const href = this.getAttribute("href");
					const offsetTop = document.querySelector(href).offsetTop;

					window.scroll({
						top: offsetTop,
						behavior: "smooth"
					});
				});
			}
			this.setAnchorDone = true;
		}
	}
	getChildNodes (childnodes) {
		let nodes = [];
		childnodes.forEach((e) => {
			if (e.nodeType === this.ELEMENT_NODE) nodes.push(e);
		});
		return nodes;
	};
	findElement (parentElement,searchedElement) {
		const parentEl = typeof parentElement == "string" ? document.querySelectorAll(parentElement) : parentElement;
		let result = null;
		if (typeof parentElement == "string") {
			(parentEl.length > 0) && parentEl.forEach((el) => {
				if (el.querySelector(searchedElement)) result = el.querySelector(searchedElement);
				const c_els = this.getChildNodes(el.childNodes);
				(c_els.length > 0) && c_els.forEach((c_el) => {
						if (c_el.querySelector(searchedElement)) result = c_el.querySelector(searchedElement);
						const gc_els = this.getChildNodes(c_el.childNodes);
						if (gc_els.length > 0) this.findElement(c_el,searchedElement);
				});
			});
		} else {
			if (parentEl.querySelector(searchedElement)) result = parentEl.querySelector(searchedElement);
			const c_els = this.getChildNodes(parentEl.childNodes);
			(c_els.length > 0) && c_els.forEach((c_el) => {
				if (c_el.querySelector(searchedElement)) result = c_el.querySelector(searchedElement);
				const gc_els = this.getChildNodes(c_el.childNodes);
				if (gc_els.length > 0) this.findElement(c_el,searchedElement);
			});
		}
		return result;
	}
	disableElement(n_disableCondition) {
		const deParent = document.querySelectorAll(".de-parent");
		deParent.forEach((ele) => {
			const condition = this.findElement(ele,".de-disableCond");
			const target = this.findElement(ele,".de-target");
			if (condition.innerText.toLowerCase() === n_disableCondition.toLowerCase()) {
				condition.style.color = "#f00";
				target.removeAttribute("href");
				target.classList.add("disabled");
			} else {
				condition.style.color = "#00f";
			}
		})
	}
}

export default LayoutSetting;