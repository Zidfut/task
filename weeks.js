function groupWeeks(data) {

	let weeksArr = [];

	data.reduce(function(acc, val, i){

		let dataDate = new Date(val.date)
		let dayOfWeek = dataDate.getDay()
		let dateOfMonth = dataDate.getDate()

		if (dayOfWeek == 1) {

			if(acc.num > 1) {
				acc.count = +(acc.count / acc.num).toFixed(2)
			}

			acc = {
				weekStart: val.date,
				count: val.count,
				num: 1
			}

			weeksArr.push(acc)

		} else {

			let accDate = new Date(acc.weekStart).getDate()
			if ((accDate + 6) >= dateOfMonth) {
				acc.num = acc.num + 1
				acc.count = acc.count + val.count
			}
		}
		
		console.log(acc)
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