const imagen1 = document.getElementById('img1');
const imagen2 = document.getElementById('img2');
const imagen3 = document.getElementById('img3');


const cargarImagen = (entradas, observador) => {
	console.log(entradas)
	 console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);