/*Zaczynamy od napisania funkcji, która zaczeka na załadowanie drzewa DOM. 
Jak pamiętasz, są dwa sposoby na stworzenie takiej funkcji. 
Użyjemy skróconej wersji:*/
$(function() {
	//this code will execute after the DOM is loaded
	/*W tej funkcji pobierzmy listę elementów i przypiszmy do zmiennej, 
	ponieważ zgodnie z algorytmem to jej najczęściej będziemy używać.*/
	var carouselList = $('#carousel ul');
	var moveFirstSlide = function() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({
			marginLeft: 0
		});
	};

	var moveLastSlide = function() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({
			marginLeft: -400
		});
	};
	/*Zmiana slajdu to nic innego, jak przesunięcie listy w jedną stronę. 
	Tak więc w funkcji changeSlides umieść logikę odpowiadającą za tę animację.
	W tym celu na liście slajdów użyj metody animate()
	http://api.jquery.com/animate/*/
	var changeSlide = function() {
		carouselList.animate({
			'marginLeft': -400
		}, 500, moveFirstSlide);
	};
	/*Karuzela działa na zasadzie interwału. W JavaScripcie 
	jest to funkcja setInterval. Jest ona bardzo podobna do 
	już poznanej funkcji setTimeout. Różni się jednak od niej tym,
	że funkcja w parametrze setInterval jest wykonywana co pewien czas,
	zamiast być wykonaną tylko raz po pewnym czasie.*/
	/*Ustaw taki interwał na np. 3000ms i dodaj wewnątrz funkcję, 
	która będzie odpowiadała za zmianę slajdów tak jak w przykładzie — changeSlides 
	(oczywiście twoja nazwa funkcji może być inna).*/
	var id = setInterval(changeSlide, 3000);
	$('.right-carousel-control').click(function() {
		clearInterval(id);
		changeSlide();
		id = setInterval(changeSlide, 3000);
	});
	$('.left-carousel-control').click(function() {
		clearInterval(id);
		moveLastSlide();
		carouselList.animate({
			'marginLeft': 0
		}, 500, );
		id = setInterval(changeSlide, 3000);
	});
});