document.addEventListener('DOMContentLoaded', function () {
	// Carga el contenido del header desde el archivo header.html
	const headerContainer = document.querySelector('#header-container');
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			headerContainer.innerHTML = this.responseText;
		}
	};
	xhttp.open('GET', 'header.html', true);
	xhttp.send();
});

document.addEventListener('DOMContentLoaded', function () {
	// Carga el contenido del footer desde el archivo footer.html
	const headerContainer = document.querySelector('#footer');
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			headerContainer.innerHTML = this.responseText;
		}
	};
	xhttp.open('GET', 'footer.html', true);
	xhttp.send();
});

document.addEventListener('DOMContentLoaded', function () {
	// Carga el contenido del carrusel desde el archivo carrusel.html
	const headerContainer = document.querySelector('#carouselExample');
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			headerContainer.innerHTML = this.responseText;
		}
	};
	xhttp.open('GET', 'carrusel.html', true);
	xhttp.send();
});
