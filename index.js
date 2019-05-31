const fn = compose
function compose(x,y){
	let f = x => x - 8
	let g = x => x ** 2
	let k = (x,y) => (y > 0 ? x + 3 : x - 3)

	return f(g(k(x,y)))
}

fn("3", 1);
fn("3", -1);