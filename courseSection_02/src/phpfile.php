<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	echo json_encode(['error' => 'Only POST requests are allowed']);
	exit;
}

$data = json_decode(file_get_contents('php://input'), true) ?? $_POST;
$name = trim($data['name'] ?? '');
$password = $data['password'] ?? '';

if ($name === '' || $password === '') {
	http_response_code(400);
	echo json_encode(['error' => 'Name and password are required']);
	exit;
}

echo json_encode([
	'success' => true,
	'name' => $name,
	'message' => 'Credentials received'
]);
