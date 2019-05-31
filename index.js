const fn = compose([
	x => x -8,
	x => x ** 2,
	(x,y) => (y > 0 ? x + 3 : x - 3)

]);

fn("3", 1);
fn("3", -1);