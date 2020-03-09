function verifyForms () {
	//проверка все ли поля заполнены верно
	//0 - не все
	//1 - все
	  if (document.getElementById('inputName').value == "") {
		  return 0;
	  }
	  if (document.getElementById('inputSurname').value == "") {
		  return 0;
	  }
	  if ((document.getElementById('inputEmail').value == "")||(!document.getElementById('inputEmail').value.includes("@"))) {
		  return 0;
	  }
	  if (document.getElementById('inputPassword').value == "") {
		  return 0;
	  }
	  if ((document.getElementById('inputPasswordReplay').value == "")||(document.getElementById('inputPasswordReplay').value !== document.getElementById('inputPassword').value)) {
		  return 0;
	  }
	  
	 return 1;  
}

function activateButton (f) {
	//проверяем, если все поля заполнены верно. если да, разблокируем кнопку отправить
	
	if (f.id=='inputEmail') { //если email указан неверно, подсвечиваем поле и выводим подсказку
		if (!f.value.includes("@")) {
			f.classList.add('errorForm');
			f.setAttribute('title', "Email должен содержать знак @");
		}
		else { //если email указан верно, убираем визуальные подсказки
			f.classList.remove('errorForm');
			f.removeAttribute('title');
		}
	}
	
	if (f.id=='inputPasswordReplay') {//если повтор пароля не совпадает, подсвечиваем поле и выводим подсказку
		if (f.value !== document.getElementById('inputPassword').value) {
			f.classList.add('errorForm');
			f.setAttribute('title', "Введенные пароли не совпадают");
		}
		else {//если пароли совпадают, убираем визуальные подсказки
			f.classList.remove('errorForm');
			f.removeAttribute('title');
		}
	}
		
	
	//разблокируем кнопку для отправки
	if (verifyForms()==0) {
		document.getElementById('send').disabled=1;
		return;
	  }
	else {
		  document.getElementById('send').disabled=0;
	  }
}

function sendData () {//отправка данных обработчику
	
	if (verifyForms()==0) {
		return;
	}
	document.getElementById('send').innerHTML="Отправляю...";
	var dataForSend = 'inputName=' + encodeURIComponent(document.getElementById('inputName').value) + '&';
	dataForSend = dataForSend + 'inputSurname=' + encodeURIComponent(document.getElementById('inputSurname').value) + '&';
	dataForSend = dataForSend + 'inputEmail=' + encodeURIComponent(document.getElementById('inputEmail').value) + '&';
	dataForSend = dataForSend + 'inputPassword=' + encodeURIComponent(document.getElementById('inputPassword').value);
	
	var request = new XMLHttpRequest();
	request.open('POST','processing.php',true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	request.addEventListener('readystatechange', function() {
		//если запрос пришёл и статус запроса 200 (OK)
      if ((request.readyState==4) && (request.status==200)) {
       if (request.responseText==0) { //если email существует
		   document.getElementById('message').innerHTML="Ошибка при регистрации!<br />Такой email уже существует.<br />Попробуйте ещё раз.";
		   document.getElementById('send').innerHTML="Отправить";
		   document.getElementById('message').classList.add('error');
	   }
	   else { //если регистрация прошла успешно
		   document.getElementById('message').innerHTML="Регистрация прошла успешно!";
		   document.getElementById('forms').style.display="none";
		   document.getElementById('message').classList.remove('error');
	   }
		   
      }
    });
    request.send(dataForSend);
	
	
}
//при нажатии Enter так же отправлять данные
document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    sendData()
  }
});


document.addEventListener('DOMContentLoaded', function(event) {
	//по умолчанию кнопка отправки заблокирована
	document.getElementById('send').disabled=1;
	
	//если в поле email есть какие-то данные, проверяем их
	var email=document.getElementById('inputEmail');
	if ((!email.value.includes("@"))&&(email.value != "")) {
			email.classList.add('errorForm');
			email.setAttribute('title', "Email должен содержать знак @");
		}
		else {
			email.classList.remove('errorForm');
			email.removeAttribute('title');
		}
});

