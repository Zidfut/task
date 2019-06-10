function calc (firstNum, secondNum, operation, result) {
	let operationResult;

	let a = Number(firstNum)
	let b = Number(secondNum)
	let r = Number(result)

	let arr = [a,b]

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] >= 1 && arr[i] <= 1000000){
			
		} else {
			console.log('ошибка даных! ' + arr[i] + ' - число должно быть в диапазоне от 1 до 1000000!')
			return 
		}
	}

	function compare (x,z) {
		if (x == z) {
			console.log("Результат операции совпадает с ожидаемым результатом!")
		} else {
			console.log("Результат операции  НЕ совпадает с ожидаемым результатом!")
		}
	}

	switch (operation) {
		case "+":
			operationResult = a + b;
			compare(r, operationResult)
			break;
		case "-":
			operationResult = a - b;
			compare(r, operationResult)
			break;
		case "*":
			operationResult = a * b;
			compare(r, operationResult)
			break;
		case "/":
			operationResult = a / b;
			compare(r, operationResult)
			break;
		default:
			console.log("Данного оператора не существует! Доступны +, -, *, /")
			break;
	}
}