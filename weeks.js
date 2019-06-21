function groupWeeks(data) {

	let weeksArr = []
	let dataLength = data.length
	let num

	data.reduce(function(acc, val, i){

		let dataDate = new Date(val.date)
		let dayOfWeek = dataDate.getDay()
		let dateOfMonth = dataDate.getDate()

		if (dayOfWeek == 1) {
			if (num > 1) {
				acc.count = (acc.count / num).toFixed(2)
			}
			num = 1
			acc = {
				weekStart: val.date,
				count: val.count	
			}
			weeksArr.push(acc)
			if(dataLength == i + 1){
				acc.count = acc.count.toFixed(2)
			}
		} else {
			let accDate = new Date(acc.weekStart).getDate()
			if ((accDate + 6) >= dateOfMonth) {
				num = num + 1
				acc.count = acc.count + val.count
				if(dataLength == i + 1){
					acc.count = (acc.count / num).toFixed(2)
				}
			} else if (dayOfWeek == 0) {
				let startWeek = new Date(dataDate.setDate(dateOfMonth - 6)).toLocaleDateString().split(".").reverse().join("-")
				if (num > 1) {
					acc.count = (acc.count / num).toFixed(2)
				}
				num = 1
				acc = {
					weekStart: startWeek,
					count: val.count
				}
				weeksArr.push(acc)
			} else {
				let startWeek = new Date(dataDate.setDate(dateOfMonth - (dayOfWeek - 1))).toLocaleDateString().split(".").reverse().join("-")
				if (num > 1) {
					acc.count = (acc.count / num).toFixed(2)
				}
				num = 1
				acc = {
					weekStart: startWeek,
					count: val.count		
				}
				weeksArr.push(acc)
			}
		}

		return acc

	}, {})

	return weeksArr
}

groupWeeks([
	{
		date: "2019-04-08",
		count: 10
	},
	{
		date: "2019-04-10",
		count: 23
	},
	{
		date: "2019-04-22",
		count: 5
	},
])