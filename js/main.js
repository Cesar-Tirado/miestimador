

(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		$('.pro-features .get-pro').on( "click", function(){
			$('.pro-features').toggleClass('active');
		});
		
		/*====================================
			Search JS
		======================================*/ 
		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});
		
		/*===============================
			Hero Slider JS
		=================================*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/ 
		$('.testimonial-slider').owlCarousel({
			items:3,
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				1: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*===============================
			Portfolio Slider JS
		=================================*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			margin:15,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*=====================================
			Counter Up JS
		======================================*/
		$('.counter').counterUp({
			delay:20,
			time:2000
		});
		
		/*===============================
			Clients Slider JS
		=================================*/ 
		$('.clients-slider').owlCarousel({
			items:5,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*====================================
			Single Portfolio Slider JS
		======================================*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});
		
		/*===================
			Accordion JS
		=====================*/ 
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function(j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});
		
		/*====================================
			Nice Select JS
		======================================*/ 	
		$('select').niceSelect();
		
		/*=====================================
			Date Picker JS
		======================================*/ 
		$( function() {
			$( "#datepicker" ).datepicker();
		} );
		
		
		
		/*===============================
			Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*===============================
			Right Bar JS
		=================================*/ 
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
		
		/*=====================
			Video Popup JS
		=======================*/ 
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		/*================
			Wow JS
		==================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		
	});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);



function showCalculator(calculatorKey, button) {
    const calculator = calculators[calculatorKey];
    const calculatorContainer = document.getElementById('calculator');
    
    let html = `<h2>${calculator.label}</h2><p>${calculator.description}</p>`;
    html += '<form id="calculator-form">';
    calculator.inputs.forEach(input => {
        html += `<div class="form-group">
                    <label for="${input.id}">${input.label}</label>
                    <input type="${input.type}" id="${input.id}" name="${input.id}" step="${input.step}" required>
                 </div>`;
    });
    html += '<button type="submit" class="btn btn-primary">Calcular</button></form>';
    html += '<div id="calculator-result" class="result mt-3"></div>';
    
    calculatorContainer.innerHTML = html;
    
    document.getElementById('calculator-form').onsubmit = function (event) {
        event.preventDefault();
        const inputs = {};
        calculator.inputs.forEach(input => {
            inputs[input.id] = document.getElementById(input.id);
        });
        const result = calculator.calculate(inputs);
        document.getElementById('calculator-result').innerHTML = `<strong>Resultado:</strong> ${result}`;
    };
}



// script.js

function showCalculator(calculator) {
    const calculators = {
        aguaDiaria: `
            <h2>Cantidad de Agua Diaria</h2>
			<br>
            <p>Calcula cuánta agua necesita tomar una persona por día en base a su peso.</p>
            <input class="common-input" type="number" id="pesoAgua" placeholder="Peso en kg">
            <button class="btn" onclick="calcularAguaDiaria()">Calcular</button>
            <div class="result" id="resultAguaDiaria"></div>
			
        `,
      
        caloriasDiarias: `
            <h2>Calorías Diarias Necesarias</h2>
			<br>
            <p>Calcula la cantidad de calorías que una persona necesita consumir diariamente en función de su peso, altura, edad y nivel de actividad física.</p>
            <input type="number" id="pesoCalorias" placeholder="Peso en kg">
            <input type="number" id="alturaCalorias" placeholder="Altura en cm">
            <input type="number" id="edadCalorias" placeholder="Edad">
            <input type="number" id="actividadCalorias" placeholder="Factor de Actividad">
            <button class="btn" onclick="calcularCaloriasDiarias()">Calcular</button>
            <div class="result" id="resultCaloriasDiarias"></div>
        `,
        horasSueno: `
            <h2>Horas de Sueño Necesarias</h2>
			<br>
            <p>Estima cuántas horas de sueño necesita una persona según su edad.</p>
            <input type="number" id="edadSueno" placeholder="Edad">
            <button class="btn" onclick="calcularHorasSueno()">Calcular</button>
            <div class="result" id="resultHorasSueno"></div>
        `,
        imc: `
            <h2>Índice de Masa Corporal (IMC)</h2>
			<br>
            <p>Calcula el índice de masa corporal de una persona para determinar si está en un rango de peso saludable.</p>
            <input type="number" id="pesoIMC" placeholder="Peso en kg">
            <input type="number" id="alturaIMC" placeholder="Altura en m">
            <button class="btn" onclick="calcularIMC()">Calcular</button>
            <div class="result" id="resultIMC"></div>
        `,
        frecuenciaCardiaca: `
            <h2>Frecuencia Cardíaca Máxima</h2>
			<br>
            <p>Determina la frecuencia cardíaca máxima recomendada durante el ejercicio según la edad.</p>
            <input type="number" id="edadFrecuencia" placeholder="Edad">
            <button class="btn" onclick="calcularFrecuenciaCardiaca()">Calcular</button>
            <div class="result" id="resultFrecuenciaCardiaca"></div>
        `,
       
		pesoIdeal: `
		<h2>Calculadora de Peso Ideal</h2>
		<br>
		<p>Estima el peso ideal basado en un IMC de 22.</p>
		<input class="common-input" type="number" id="alturaPesoIdeal" placeholder="Altura en metros" step="0.01">
		<button class="btn" onclick="calcularPesoIdeal()">Calcular</button>
		<div class="result" id="resultPesoIdeal"></div>
	`,
	ritmoCarrera: `
		<h2>Calculadora de Ritmo de Carrera</h2>
		<br>
		<p>Calcula el ritmo promedio por kilómetro o milla de una carrera.</p>
		<input class="common-input" type="number" id="tiempoCarrera" placeholder="Tiempo de carrera en minutos" step="0.1">
		<input class="common-input" type="number" id="distanciaCarrera" placeholder="Distancia en kilómetros" step="0.01">
		<button class="btn" onclick="calcularRitmoCarrera()">Calcular</button>
		<div class="result" id="resultRitmoCarrera"></div>
	`,
	metaEntrenamiento: `
		<h2>Calculadora de Meta de Entrenamiento</h2>
		<br>
		<p>Estima el progreso necesario por semana para alcanzar un objetivo de peso.</p>
		<input class="common-input" type="number" id="pesoObjetivo" placeholder="Peso objetivo en kg" step="0.1">
		<input class="common-input" type="number" id="pesoActual" placeholder="Peso actual en kg" step="0.1">
		<input class="common-input" type="number" id="duracionPrograma" placeholder="Duración del programa en semanas" step="1">
		<button class="btn" onclick="calcularMetaEntrenamiento()">Calcular</button>
		<div class="result" id="resultMetaEntrenamiento"></div>
	`,
	pasosDiarios: `
		<h2>Calculadora de Pasos Diarios Necesarios</h2>
		<br>
		<p>Calcula la distancia total recorrida en un día basado en la cantidad de pasos dados.</p>
		<input class="common-input" type="number" id="pasosDiarios" placeholder="Cantidad de pasos" step="1">
		<input class="common-input" type="number" id="longitudPaso" placeholder="Longitud del paso en metros" step="0.01">
		<button class="btn" onclick="calcularPasosDiarios()">Calcular</button>
		<div class="result" id="resultPasosDiarios"></div>
	`,
	repeticionesMaximas: `
		<h2>Calculadora de Repeticiones Máximas</h2>
		<br>
		<p>Estima el peso máximo que se puede levantar una vez basado en repeticiones submáximas.</p>
		<input class="common-input" type="number" id="pesoLevantado" placeholder="Peso levantado en kg" step="0.1">
		<input class="common-input" type="number" id="repeticiones" placeholder="Cantidad de repeticiones" step="1">
		<button class="btn" onclick="calcularRepeticionesMaximas()">Calcular</button>
		<div class="result" id="resultRepeticionesMaximas"></div>
	`,
	caloriasDiarias: `
		<h2>Calculadora de Necesidades Calóricas Diarias</h2>
		<br>
		<p>Calcula la cantidad de calorías que una persona necesita consumir diariamente.</p>
		<input class="common-input" type="number" id="pesoCalorias" placeholder="Peso en kg">
		<input class="common-input" type="number" id="alturaCalorias" placeholder="Altura en cm">
		<input class="common-input" type="number" id="edadCalorias" placeholder="Edad">
		<input class="common-input" type="number" id="factorActividad" placeholder="Factor de Actividad">
		<button class="btn" onclick="calcularCaloriasDiarias()">Calcular</button>
		<div class="result" id="resultCaloriasDiarias"></div>
	`,
	consumoMacros: `
		<h2>Calculadora de Consumo de Macros</h2>
		<br>
		<p>Calcula la cantidad de proteínas, carbohidratos y grasas necesarias según la dieta.</p>
		<input class="common-input" type="number" id="caloriasTotales" placeholder="Calorías Totales">
		<input class="common-input" type="number" id="porcentajeProteinas" placeholder="Porcentaje de Proteínas">
		<input class="common-input" type="number" id="porcentajeCarbohidratos" placeholder="Porcentaje de Carbohidratos">
		<input class="common-input" type="number" id="porcentajeGrasas" placeholder="Porcentaje de Grasas">
		<button class="btn" onclick="calcularConsumoMacros()">Calcular</button>
		<div class="result" id="resultConsumoMacros"></div>
	`,
	consumoAgua: `
		<h2>Calculadora de Consumo de Agua</h2>
		<br>
		<p>Calcula la cantidad de agua que una persona debe beber diariamente.</p>
		<input class="common-input" type="number" id="pesoAgua" placeholder="Peso en kg">
		<button class="btn" onclick="calcularConsumoAgua()">Calcular</button>
		<div class="result" id="resultConsumoAgua"></div>
	`,
	perdidaPeso: `
		<h2>Calculadora de Pérdida de Peso</h2>
		<br>
		<p>Calcula la pérdida de peso esperada basada en la ingesta calórica y el gasto energético.</p>
		<input class="common-input" type="number" id="caloriasDiariasPerdida" placeholder="Calorías Diarias Consumidas">
		<input class="common-input" type="number" id="caloriasQuemadas" placeholder="Calorías Quemadas">
		<input class="common-input" type="number" id="diasPerdida" placeholder="Número de Días">
		<button class="btn" onclick="calcularPerdidaPeso()">Calcular</button>
		<div class="result" id="resultPerdidaPeso"></div>
	`,
	gananciaPeso: `
		<h2>Calculadora de Ganancia de Peso</h2>
		<br>
		<p>Calcula la ganancia de peso esperada basada en la ingesta calórica adicional y el tiempo.</p>
		<input class="common-input" type="number" id="caloriasDiariasGanancia" placeholder="Calorías Diarias Consumidas">
		<input class="common-input" type="number" id="caloriasAdicionales" placeholder="Calorías Adicionales">
		<input class="common-input" type="number" id="diasGanancia" placeholder="Número de Días">
		<button class="btn" onclick="calcularGananciaPeso()">Calcular</button>
		<div class="result" id="resultGananciaPeso"></div>
	`,
	proteinasDiarias: `
		<h2>Consumo Diario de Proteínas</h2>
		<br>
		<p>Calcula la cantidad diaria recomendada de proteínas en gramos según el peso de la persona.</p>
		<input class="common-input" type="number" id="pesoProteinas" placeholder="Peso en kg">
		<button class="btn" onclick="calcularProteinasDiarias()">Calcular</button>
		<div class="result" id="resultProteinasDiarias"></div>
	`,
	fibraDiaria: `
		<h2>Consumo de Fibra Diario</h2>
		<br>
		<p>Calcula la cantidad diaria recomendada de fibra en gramos según la edad.</p>
		<input class="common-input" type="number" id="edadFibra" placeholder="Edad">
		<button class="btn" onclick="calcularFibraDiaria()">Calcular</button>
		<div class="result" id="resultFibraDiaria"></div>
	`,
	grasaDiaria: `
		<h2>Consumo de Grasa Diario</h2>
		<br>
		<p>Estima la cantidad de grasa en gramos que una persona debe consumir diariamente.</p>
		<input class="common-input" type="number" id="caloriasGrasa" placeholder="Calorías Diarias">
		<button class="btn" onclick="calcularGrasaDiaria()">Calcular</button>
		<div class="result" id="resultGrasaDiaria"></div>
	`,
	frutasVerduras: `
		<h2>Cantidad de Frutas y Verduras Diarias</h2>
		<br>
		<p>Estima la cantidad recomendada de porciones de frutas y verduras que una persona debe consumir diariamente.</p>
		<button class="btn" onclick="calcularFrutasVerduras()">Calcular</button>
		<div class="result" id="resultFrutasVerduras"></div>
	`,
	caloriasEjercicio: `
		<h2>Calorías Quemadas por Ejercicio</h2>
		<br>
		<p>Calcula la cantidad de calorías quemadas durante una sesión de ejercicio basada en el MET (Metabolic Equivalent of Task) y el peso de la persona.</p>
		<p>* <strong>Ejemplo MET:</strong> <br>- Caminar a 4 km/h: 3.3 MET<br>
- Bicicleta, esfuerzo moderado (16-19 km/h): 6.8 MET<br>
- Correr a 8 km/h: 8.0 MET
</p>
		<input class="common-input" type="number" id="duracionEjercicio" placeholder="Duración del ejercicio en minutos">
		<input class="common-input" type="number" id="metEjercicio" placeholder="MET">
		<input class="common-input" type="number" id="pesoEjercicio" placeholder="Peso en kg">
		<button class="btn" onclick="calcularCaloriasEjercicio()">Calcular</button>
		<div class="result" id="resultCaloriasEjercicio"></div>
	`
};

    document.getElementById('calculator').innerHTML = calculators[calculator];
    document.getElementById('calculator').style.display = 'block';
}


//  ------------------------------ SALUD Y BIENESTAR ---------------------------------------------
function calcularAguaDiaria() {
    const peso = document.getElementById('pesoAgua').value;
    const agua = (parseInt(peso) + 40) * 24;
    document.getElementById('resultAguaDiaria').innerText = `Debes tomar aproximadamente ${agua} ml de agua al día.`;
}


function calcularCaloriasDiarias() {
    const peso = document.getElementById('pesoCalorias').value;
    const altura = document.getElementById('alturaCalorias').value;
    const edad = document.getElementById('edadCalorias').value;
    const actividad = document.getElementById('actividadCalorias').value;
    const calorias = (parseInt(peso) * 10) + (parseInt(altura) * 6.25) - (parseInt(edad) * 5) + parseInt(actividad);
    document.getElementById('resultCaloriasDiarias').innerText = `Necesitas consumir aproximadamente ${calorias} calorías al día.`;
}

function calcularHorasSueno() {
    const edad = document.getElementById('edadSueno').value;
    const horas = 8 - (parseInt(edad) / 10);
    document.getElementById('resultHorasSueno').innerText = `Necesitas dormir aproximadamente ${horas} horas por noche.`;
}

function calcularIMC() {
    const peso = document.getElementById('pesoIMC').value;
    const altura = document.getElementById('alturaIMC').value;
    const imc = parseInt(peso) / (parseFloat(altura) * parseFloat(altura));
    document.getElementById('resultIMC').innerText = `Tu IMC es ${imc.toFixed(2)}.`;
}

function calcularFrecuenciaCardiaca() {
    const edad = document.getElementById('edadFrecuencia').value;
    const frecuenciaMax = 220 - parseInt(edad);
    document.getElementById('resultFrecuenciaCardiaca').innerText = `Tu frecuencia cardíaca máxima recomendada es ${frecuenciaMax} latidos por minuto.`;
}


//  ------------------------------ NUTRICIÓN Y DIETA ---------------------------------------------

function calcularProteinasDiarias() {
    const peso = document.getElementById('pesoProteinas').value;
    const proteinas = parseFloat(peso) * 0.8;
    document.getElementById('resultProteinasDiarias').innerText = `Debes consumir aproximadamente ${proteinas.toFixed(2)} gramos de proteínas al día.`;
}

function calcularFibraDiaria() {
    const edad = document.getElementById('edadFibra').value;
    const fibra = parseInt(edad) + 5;
    document.getElementById('resultFibraDiaria').innerText = `Debes consumir aproximadamente ${fibra} gramos de fibra al día.`;
}

function calcularGrasaDiaria() {
    const calorias = document.getElementById('caloriasGrasa').value;
    const grasa = (parseInt(calorias) * 0.3) / 9;
    document.getElementById('resultGrasaDiaria').innerText = `Debes consumir aproximadamente ${grasa.toFixed(2)} gramos de grasa al día.`;
}

function calcularFrutasVerduras() {
    const porciones = 5;
    document.getElementById('resultFrutasVerduras').innerText = `Debes consumir aproximadamente ${porciones} porciones de frutas y verduras al día.`;
}

function calcularCaloriasEjercicio() {
    const duracion = document.getElementById('duracionEjercicio').value;
    const met = document.getElementById('metEjercicio').value;
    const peso = document.getElementById('pesoEjercicio').value;
    const calorias = (parseInt(duracion) * (parseFloat(met) * parseFloat(peso) * 3.5)) / 200;
    document.getElementById('resultCaloriasEjercicio').innerText = `Has quemado aproximadamente ${calorias.toFixed(2)} calorías durante el ejercicio.`;
}


//  ------------------------------ FITNES Y EJERCICIO ---------------------------------------------
function calcularPesoIdeal() {
    const altura = document.getElementById('alturaPesoIdeal').value;
    const pesoIdeal = 22 * (parseFloat(altura) ** 2);
    document.getElementById('resultPesoIdeal').innerText = `Tu peso ideal es aproximadamente ${pesoIdeal.toFixed(2)} kg.`;
}

function calcularRitmoCarrera() {
    const tiempo = document.getElementById('tiempoCarrera').value;
    const distancia = document.getElementById('distanciaCarrera').value;
    const ritmo = tiempo / distancia;
    document.getElementById('resultRitmoCarrera').innerText = `Tu ritmo de carrera es aproximadamente ${ritmo.toFixed(2)} minutos por kilómetro.`;
}

function calcularMetaEntrenamiento() {
    const pesoObjetivo = document.getElementById('pesoObjetivo').value;
    const pesoActual = document.getElementById('pesoActual').value;
    const duracion = document.getElementById('duracionPrograma').value;
    const progresoSemanal = (parseFloat(pesoObjetivo) - parseFloat(pesoActual)) / parseFloat(duracion);
    document.getElementById('resultMetaEntrenamiento').innerText = `Necesitas progresar aproximadamente ${progresoSemanal.toFixed(2)} kg por semana.`;
}

function calcularPasosDiarios() {
    const pasos = document.getElementById('pasosDiarios').value;
    const longitud = document.getElementById('longitudPaso').value;
    const distanciaTotal = pasos * parseFloat(longitud);
    document.getElementById('resultPasosDiarios').innerText = `Has recorrido aproximadamente ${distanciaTotal.toFixed(2)} metros.`;
}

function calcularRepeticionesMaximas() {
    const peso = document.getElementById('pesoLevantado').value;
    const reps = document.getElementById('repeticiones').value;
    const repeticionesMax = parseFloat(peso) / (1.0278 - 0.0278 * parseFloat(reps));
    document.getElementById('resultRepeticionesMaximas').innerText = `El peso máximo que puedes levantar una vez es aproximadamente ${repeticionesMax.toFixed(2)} kg.`;
}

//  ------------------------------ ALIMENTACION Y NUTRICIÓN ---------------------------------------------

function calcularCaloriasDiarias() {
    const peso = document.getElementById('pesoCalorias').value;
    const altura = document.getElementById('alturaCalorias').value;
    const edad = document.getElementById('edadCalorias').value;
    const factorActividad = document.getElementById('factorActividad').value;
    const calorias = (parseInt(peso) * 10) + (parseInt(altura) * 6.25) - (parseInt(edad) * 5) + parseInt(factorActividad);
    document.getElementById('resultCaloriasDiarias').innerText = `Necesitas consumir aproximadamente ${calorias} calorías al día.`;
}

function calcularConsumoMacros() {
    const caloriasTotales = document.getElementById('caloriasTotales').value;
    const porcentajeProteinas = document.getElementById('porcentajeProteinas').value;
    const porcentajeCarbohidratos = document.getElementById('porcentajeCarbohidratos').value;
    const porcentajeGrasas = document.getElementById('porcentajeGrasas').value;

    const proteinas = (porcentajeProteinas / 100) * caloriasTotales / 4;
    const carbohidratos = (porcentajeCarbohidratos / 100) * caloriasTotales / 4;
    const grasas = (porcentajeGrasas / 100) * caloriasTotales / 9;

    document.getElementById('resultConsumoMacros').innerText = `Debes consumir aproximadamente ${proteinas.toFixed(2)} g de proteínas, ${carbohidratos.toFixed(2)} g de carbohidratos y ${grasas.toFixed(2)} g de grasas al día.`;
}

function calcularConsumoAgua() {
    const peso = document.getElementById('pesoAgua').value;
    const agua = parseFloat(peso) * 0.033;
    document.getElementById('resultConsumoAgua').innerText = `Debes tomar aproximadamente ${agua.toFixed(2)} litros de agua al día.`;
}

function calcularPerdidaPeso() {
    const caloriasDiarias = document.getElementById('caloriasDiariasPerdida').value;
    const caloriasQuemadas = document.getElementById('caloriasQuemadas').value;
    const dias = document.getElementById('diasPerdida').value;
    const perdidaPeso = ((caloriasDiarias - caloriasQuemadas) * dias) / 7700;
    document.getElementById('resultPerdidaPeso').innerText = `Puedes perder aproximadamente ${perdidaPeso.toFixed(2)} kg en ${dias} días.`;
}

function calcularGananciaPeso() {
    const caloriasDiarias = document.getElementById('caloriasDiariasGanancia').value;
    const caloriasAdicionales = document.getElementById('caloriasAdicionales').value;
    const dias = document.getElementById('diasGanancia').value;
    const gananciaPeso = ((parseInt(caloriasDiarias) + parseInt(caloriasAdicionales)) * parseInt(dias)) / 7700;
    document.getElementById('resultGananciaPeso').innerText = `Puedes ganar aproximadamente ${gananciaPeso.toFixed(2)} kg en ${dias} días.`;
}

