let scoops = 5;
while (scoops > 0) {
	console.log("Another scoop!");
	if (scoops < 3) {
		console.log("Ice cream is running low!");
	} else if (scoops >= 5) {
		console.log("Eat faster, the ice cream is going to melt!");
	}
	scoops = scoops - 1;
}
console.log("Life without ice cream isn't the same");
