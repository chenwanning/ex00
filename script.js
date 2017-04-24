d3.select("#musicalNote").append("svg").attr({
	"width": 300,
	"height": 200,
	"id": "svg"
});

d3.select("#svg")
	.append("circle")
	.attr({
		"cx": 150,
		"cy": 120,
		"r": 15
	});


d3.select("#svg")
	.append("rect")
	.attr({
		"x": 160,
		"y": 45,
		"width": 5,
		"height": 78
	});

for (var i = 0; i < 5; i = i + 1) {
	d3.select("#svg")
		.append("line")
		.attr({
			"x1": 0,
			"y1": 45 + 30 * i,
			"x2": 300,
			"y2": 45 + 30 * i,
			"stroke": "black"

		});
};

d3.select("#svg")
	.append("text")
	.attr({
		"x": 135,
		"y": 200,
		"font-size": 40,
		"font-family": "arial"
	}).text("A");

var random = function (N, M) {
	return Math.floor(Math.random() * (M - N + 1) + N);
}


function launch() {
	var num = random(1911, 2016);
	d3.select("#num").text(num);
};


for (var i = 0; i < 20; i++) {
	var num = random(20, 300);
	d3.select("#svg1")
		.append("rect")
		.attr({
			x: 10,
			y: 10 + 12 * i,
			width: num,
			height: 10,
			fill: "red"
		});

	d3.select("#svg1")
		.append("text")
		.attr({
			x: 10 + num + 5,
			y: 20 + 12 * i,
			"font-size": 12
		}).text(num);

};

var points = "0,0 ";
for (var i = 0; i < 20; i++) {
	var num = random(20, 300);

	d3.select("#svg2")
		.append("circle")
		.attr({
			cx: 10 + num,
			cy: 10 + 12 * i,
			r: 4,
			fill: "red"
		});

	d3.select("#svg2")
		.append("text")
		.attr({
			x: 10 + num + 9,
			y: 14 + 12 * i,
			"font-size": 12
		}).text(num);

	points = points + (10 + num) + "," + (10 + 12 * i) + " ";
};
points = points + "10," + (10 + 12 * 20) + " ";
d3.select("#svg2")
	.append("polyline")
	.attr({
		points: points,
		stroke: "#333",
		fill: "rgba(0,0,0,0)"

	});
