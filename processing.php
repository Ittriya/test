<?php
$logfile="log.txt"; //файл для логгирования
//задаём базу пользователей
$users = array( array ("name" => "Иван", 
						"surname" => "Иванов", 
						"email" => "ivanov@mail.ru", 
						"password" => "ivanov123"),
				array ("name" => "Петр", 
						"surname" => "Петров", 
						"email" => "petrov@mail.ru", 
						"password" => "petrov123"),
				array ("name" => "Василий", 
						"surname" => "Кузнецов",
						"email" => "kuznecov@mail.ru",
						"password" => "kuznecov123"));
//ищем email в базе
foreach ($users as $arr) {
	$result=array_search($_POST["inputEmail"],$arr);
	//если нашли - записываем в лог, передаем 0 и выходим
	if ($result=="email") {
		error_log(date('G:i:s',time()).' Пользователь с email '.$_POST["inputEmail"].' уже существует.'.PHP_EOL,3,$logfile);
		echo 0; 
		exit;
	}
}
//если не нашли - добавляем в базу, записываем в лог и передаём 1
array_push($users, array("name" => $_POST["inputName"], 
						"surname" => $_POST["inputSurname"], 
						"email" => $_POST["inputEmail"], 
						"password" => $_POST["inputPassword"]));

error_log(date('G:i:s',time()).' Зарегистрирован новый пользователь '.$_POST["inputName"].' '.$_POST["inputSurname"].' ('.$_POST["inputEmail"].')'.PHP_EOL,3,$logfile);
echo 1;

?>