
/*Функции для фото*/
function foto () {
	let v1 = document.getElementById('popsa11');
	v1.outerHTML= '<img src="popo.JPG" alt="Фото" title="Попса" id="popsa16" onclick="ded()">';
}
function ded() {
	let v2 = document.getElementById('popsa16');
	v2.outerHTML = '<img src="pop2.JPG" alt="Фото" title="Попса" id="popsa17" onclick= " sas()">';
}
function sas() {
	let v3 = document.getElementById('popsa17');
	v3.outerHTML = '<img src="pop3.JPG" alt="Фото" title="Попса" id="popsa18" onclick = "fef()">';
}
function fef() {
	let v33 = document.getElementById('popsa18');
	v33.outerHTML = '<img src="popsa.jpg" alt="Фото" title="Попса" id="popsa11" onclick="foto()">';
}

/* Функция для кнопки ОТПРАВИТЬ*/
var name1 = null;
function rew() {
	let v4 = confirm('Вы точно уверены? Она очень опасная женщина!!!');
	if(v4) {name1 = prompt('Ведите имя, того кого хотите убить:'); alert( name1 + ' будет убит Попсой Великолепной !!!!');}
	else { alert (' Мне жаль, Попса убьет вас :)')}
}
//ФУНКЦИЯ СМЕНЫ ЦВЕТА У всей странице
 function changeColor(color) {
            document.body.style.background = color;
   }

 /* Функция для смены стиля страницы по кнопке Dark*/
   
        function dark() {
        	
        	changeColor('#2f1457');
            let v5 = document.getElementsByClassName('popsa13') [0];

			v5.style.color = "white";

			let v6 = document.getElementsByClassName('cart bg-color1') [0];

			v6.style.color = 'white';
			v6.style.background = '#8435b5';

			let v7 = document.getElementById('list');
			v7.style.color = "#f9e8fc";

			/* Второй блок */
			let v8 = document.getElementsByClassName('cart bg-color2') [0];
			v8.style.color = 'white';
			v8.style.background = '#243182';

			let v9 = document.getElementsByClassName('table1')[0];
			v9.style.color = '#fad2f9';

			/*Стили для массива таблицы*/
			let v10 = document.getElementsByClassName('x1x')[0];
			v10.style.color = 'white';

			let v11 = document.getElementsByClassName('x1x')[1];
			v11.style.color = 'white';

			let v12 = document.getElementsByClassName('x1x')[2];
			v12.style.color = 'white';

			let v13 = document.getElementsByClassName('x1x')[3];
			v13.style.color = 'white';

			let v14 = document.getElementsByClassName('x1x')[4];
			v14.style.color = 'white';

			/* Третий блок*/
			let va15 = document.getElementsByClassName('cart bg-color3') [0];
			va15.style.background = '#28768a';

			let va16 = document.getElementsByClassName('contact')[0];
			va16.style.color = 'white';

			//Обводка для важ текста
			//let va166 = document.getElementById('wew');
			//va166.style ['text-shadow'] = '5px 5px 5px green';
			//va166.style ['-webkit-text-stroke'] = '1.5px yellow';
			let va17 = document.getElementById('name');
			va17.style ['-webkit-text-stroke'] = '1.5px #793d9c';

			let va18 = document.getElementById('coz');
			va18.style ['-webkit-text-stroke'] = '1.6px #4a018a';
			va18.style ['font-family'] = 'Impact, fantasy';

			let va19 = document.getElementById('vaj');
			va19.style ['-webkit-text-stroke'] = '1.3px #5193c9';
			va19.style ['font-family'] = 'Impact, fantasy';

			let va20 = document.getElementById('asa');
			va20.style ['-webkit-text-stroke'] = '1.3px #09b399';
			va20.style ['font-family'] = 'Impact, fantasy';

			// стиль надписи label
			let va21 = document.getElementById('waw');
			va21.style.color = 'white';

			let va22 = document.getElementById('wyw');
			va22.style.color = 'white';

			let va23 = document.getElementById('wuw');
			va23.style.color = 'white';
			//для послед строки
			let va24 = document.getElementById('pop3');
			va24.style.color = 'white';
		}
		

