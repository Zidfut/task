function calc (firstNum, secondNum, operation, result) {
	let operationResult;

	let a = +parseFloat(firstNum).toFixed(2)
	let b = +parseFloat(secondNum).toFixed(2)
	let r = +parseFloat(result).toFixed(2)



	let arr = [a,b]

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] >= 1 && arr[i] <= 1000000){
			console.log(arr[i])
		} else {
			console.log('ошибка даных! ' + arr[i] + ' - число должно быть в диапазоне от 1 до 1000000!')
			return 
		}
	}

	console.log(r + " ожидаемый резултат")

	function compare (x,z) {
		
		console.log(+z.toFixed(2) + " округленный результат операции")
		if (x === +z.toFixed(2)) {
			console.log("Результат операции совпадает с ожидаемым результатом!")
		} else {
			console.log("Результат операции  НЕ совпадает с ожидаемым результатом!")
		}
	}

	switch (operation) {
		case "+":
			operationResult = a + b;
			console.log(operationResult + " результат операции")
			compare(r, operationResult)
			break;
		case "-":
			operationResult = a - b;
			console.log(operationResult + " результат операции")
			compare(r, operationResult)
			break;
		case "*":
			operationResult = a * b;
			console.log(operationResult + " результат операции")
			compare(r, operationResult)
			break;
		case "/":
			operationResult = a / b;
			console.log(operationResult + " результат операции")
			compare(r, operationResult)
			break;
		default:
			console.log("Данного оператора не существует! Доступны +, -, *, /")
			break;
	}
}