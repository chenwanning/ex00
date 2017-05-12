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

//	第五堂課 D3-04-Data 2016 年8月且台北市且發票數量大於10億張的項目
var svg3 = d3.select("#svg3");
d3.json("invoice-taipei.json", function (dataSet) {

	var xScale = d3.scale.linear()
		.domain([0, 1000000000])
		.range([0, 10]);
	var svg3 = d3.select("#svg3");
	var fDataSet = dataSet.filter(function (d) {

		return d.amount > 1000000000 && d.date === "2016/8/1" && d.cid === "A";



	});





	for (var i = 0; i < fDataSet.length; i++) {
		svg3.append("rect")
			.attr({
				"x": 250,
				"y": 30 + 30 * i,
				"width": xScale(fDataSet[i].amount),
				"height": 25,
				"fill": "red"
			});


		svg3.append("text")
			.attr({
				"x": 10,
				"y": 55 + 30 * i,
				"font-size": 15,
				"font-family": "arial"
			}).text(fDataSet[i].industry);
	};
});

//D3-06-D3-Binding.pdf p.22 把數字小於70改成紅色
var arr = [85, 60, 99, 49, 77, 82];

bind();
render();


function bind() {
	var selection = d3.select("#redNumber")

	.selectAll("div")

	.data(arr);

	selection.enter()
		.append("div");

	selection.exit().remove();

}


function render() {
	d3.selectAll("#redNumber div").style({
		"font-size": "40px",
		color: function (d) {
			if (d < 70) {
				return "red";
			} else {
				return "black";
			}
		}
	}).text(function (d, i) {
		return (i + 1) + ":" + d;
	});
}

//D3 - 06 - D3 - Binding.pdf p .25 建立簡單動態圖表

var arr2 = [85, 60, 99, 49, 77, 82, 60, 77, 88];
var w = 800,
	h = 400,
	p = 100;



svg2();
bind2();
render2();



function svg2() {
	d3.select("svg4").append("svg").attr({
		id: "svg4",
		width: w,
		height: h
	});
}

function bind2() {
	//rect-----------------------
	var selection2 = d3.select("#svg4")
		.selectAll("rect")
		.data(arr2);
	selection2.enter()
		.append("rect");

	selection2.exit().remove();

	//text-----------------------

	var selection_text = d3.select("#svg4")
		.selectAll("text")
		.data(arr2);

	selection_text.enter()
		.append("text");

	selection_text.exit().remove();

}

function render2() {

	d3.select("#svg4").selectAll("rect")
		.attr({
			x: function (d, i) {
				return p + (40 + 2) * i
			},
			y: function (d, i) {
				return h - p - d;
			},
			width: 40,
			height: function (d, i) {
				return d;
			},
			fill: function (d, i) {
				if (d < 70) {
					return "red";
				} else {
					return "lightgreen";
				}

			}
		});
	d3.select("#svg4").selectAll("text")
		.attr({
			x: function (d, i) {
				return p + (40 + 2) * i + 10
			},
			y: function (d, i) {
				return h - p + 20;
			}

		}).text(function (d) {
			return d;
		})

}


function update() {
	var num = random(10, 100);
	arr2.push(num);
	bind2();
	render2();
}

function update_remove() {
	arr2.shift();
	bind2();
	render2();
}
