function calc (firstNum, secondNum, operation, result) {
	let operationResult;

	let a = parseFloat(firstNum)
	let b = parseFloat(secondNum)
	let r = parseFloat(result)



	let arr = [a,b]

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] >= 1 && arr[i] <= 1000000){
			console.log(arr[i])
		} else {
			console.log(arr[i] + ' - число должно быть в диапазоне от 1 до 1000000!')
			return 
		}
	}

	function equal (x, y) {
		return Math.abs(x - y) < Number.EPSILON * Math.max(Math.abs(x), Math.abs(y));
	}

	switch (operation) {
		case "+":
			operationResult = a + b;
			return equal(r, operationResult)
			break;
		case "-":
			operationResult = a - b;
			return equal(r, operationResult)
			break;
		case "*":
			operationResult = a * b;
			return equal(r, operationResult)
			break;
		case "/":
			operationResult = a / b;
			return equal(r, operationResult)
			break;
		default:
			console.log("Данного оператора не существует! Доступны +, -, *, /")
			break;
	}
}