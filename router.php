<?php
	$baseURL = '/lbw';
	$url = $_SERVER['REDIRECT_URL'];
	if ($_SERVER["REQUEST_METHOD"] == "GET") {
		switch($url){
			case $baseURL. '/search';
				require_once 'Controller/controller.php';
				$controller = new Controller();
				echo $controller->view_search();
				break;
				case $baseURL. '/brands';
				require_once 'Controller/controller.php';
				$controller = new Controller();
				echo $controller->view_branch();
				break;
			default:
				echo "Page not Found 404";
				break;
		}
	}
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		switch($url){
		}
	}
?>