const heightE = document.getElementById('height');
const perimetrE = document.getElementById('perimetr');
const resultE = document.getElementById('result');
const sumE = document.getElementById('button');







sumE.addEventListener(
    'click',
    function NumberOfRolls () 
	{ const roll=0.5*10; //ширина рулона равна 0,5 м, а длина - 10 м, вычисляем общую площадь рулона
	const h=parseInt(heightE.value);
	const p=parseInt(perimetrE.value);
	
	const sum = h*p/roll; //вычисляем общую площадь поверхности и делим на площадь рулона
	
	
	resultE.textContent=Math.ceil(sum)+' рулонов';
	resultE.style.color='red';
 	
	
	}

	
);



