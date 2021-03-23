function printMessage(msg) {
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function clearResult() {
	document.getElementById('result').innerHTML = '';
}

function printResult(msg) {
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}