window.addEventListener('DOMContentLoaded', function () {

	let navToggle = document.querySelector('.header__nav-toggle'),
		headerMenu = document.querySelector('.header__menu'),
		menuUl = document.querySelector('.header__nav');


	navToggle.addEventListener('click', function () {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
			headerMenu.style.height = '140px';
		} else {
			headerMenu.style.height = 'auto';
			this.classList.add('active');
		}


		/* if (menuUl.classList.contains('minimized')) {
			//menuUl.classList.remove('minimized');
			headerMenu.style.height = 'auto';
			this.classList.add('active');
		} else {
			//menuUl.classList.add('minimized');
			this.classList.remove('active');
			headerMenu.style.height = '60px';
		} */
	});

});