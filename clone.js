"use strict"

function clone (obj) {

	let result = {}
  
  	for (let key in obj) {

  		if(typeof obj[key] == "object"){
  			console.log('recursion', key, obj[key])
  			clone(obj[key])
  		}
  		
   		result[key] = obj[key];
  	}

  	return result
}

clone(
	{
    	a: 2,
    	b: "2",
    	c: false,
    	g: [
      		{a: {j: undefined}},
      		{a: 2, b: "2", c: false, g: [{a: {j: undefined}}]}
    	]
  	}
)