"use strict"

function clone (obj) {

	let newObj

	if (Array.isArray(obj)) {
		newObj = []
	} else {
		newObj = {}
	}
  
  	for (var i in obj) {
  		if(typeof(obj[i]) == "object"){		
  			newObj[i] = clone(obj[i]);
  		} else {
   			newObj[i] = obj[i];			
  		}		
  	}
  	return newObj
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
