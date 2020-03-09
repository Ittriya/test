<!DOCTYPE html>

<html>
<head>
<meta charset="utf-8">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/bootstrap-theme.min.css" rel="stylesheet">
<link href="auth.css" type="text/css" rel="stylesheet">
<title>Тестовое задание</title>
</head>
<body>
<div class="container">

<div class="form-signin" id="authorization">
<div id="message">Заполните все поля для регистрации:</div>
<div id="forms">
<form>
<label for="inputName" class="sr-only">Имя</label>
<input type="text" id="inputName" class="form-control" placeholder="Имя" required autofocus oninput="activateButton(this)">
<label for="inputSurname" class="sr-only">Фамилия</label>
<input type="text" id="inputSurname" class="form-control" placeholder="Фамилия" required  oninput="activateButton(this)">
<label for="inputEmail" class="sr-only">Email</label>
<input type="email" id="inputEmail" class="form-control" placeholder="Email" required oninput="activateButton(this)">
<label for="inputPassword" class="sr-only">Пароль</label>
<input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required oninput="activateButton(this)">
<label for="inputPasswordReplay" class="sr-only">Повтор пароля</label>
<input type="password" id="inputPasswordReplay" class="form-control" placeholder="Повтор пароля" required oninput="activateButton(this)">

<button type="button" id="send" class="btn btn-lg btn-primary btn-block" disabled onclick="sendData()">Отправить</button>

</form>
</div></div>
</div>

<script src="func.js"></script>
</body>
</html>