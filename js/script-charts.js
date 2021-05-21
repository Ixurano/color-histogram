// variabler för data från bilderna (scrhipt-image)
var chartData = redCount;
var chartGreenData = greenCount;
var chartBlueData = blueCount;
var chartAlphaData = alphaCount;
//storlek på .chart
var height = 300;
var width = 400;
var barWidth = width / chartData.length;
var barMargin = -1; // för histogrammet

// ritar den som svg från div i html
var chart = d3.select('#charts')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .style('background', 'black');
//funktion för att ladda in datan i programmet
function updateData() {
    //skalan på y
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(blueCount)]) // Variationen inom vår datamängd
        .range([0, height - 10])  // "Utrymmet", var domain 0 och max ska vara
    //RED-value
    chart.selectAll('rect')
        .data(redCount).enter() // loopar igenom chartData
        .append('rect')
        .attr('x', function (d, i) {  // .attr('x', callback-funktion som retrurnerar vårt värde)
            return i * barWidth;
        })
        .attr('y', function (d) {
            return height - yScale(d); // y(d) returnerar y-värde enligt skalan
        })
        .attr('height', function (d) {
            return yScale(d);
        })
        .attr('width', barWidth - barMargin)
        .style('fill', 'red')
        .style('mix-blend-mode', "screen");//blender för för ett mer korrekt histogram
        //green-value
    chart.selectAll('rect2')
        .data(greenCount).enter()
        .append('rect')
        .attr('x', function (d, i) {  // .attr('x', callback-funktion som retrurnerar vårt värde)
            return i * barWidth;
        })
        .attr('y', function (d) {
            return height - yScale(d); // y(d) returnerar y-värde enligt skalan
        })
        .attr('height', function (d) {
            return yScale(d);
        })
        .attr('width', barWidth - barMargin)
        .style('fill', 'lime')
        .style('mix-blend-mode', "screen");;
    //blue-value
    chart.selectAll('rect3')
        .data(blueCount).enter()
        .append('rect')
        .attr('x', function (d, i) {  // .attr('x', callback-funktion som retrurnerar vårt värde)
            return i * barWidth;
        })
        .attr('y', function (d) {
            return height - yScale(d); // y(d) returnerar y-värde enligt skalan
        })
        .attr('height', function (d) {
            return yScale(d);
        })
        .attr('width', barWidth - barMargin)
        .style('fill', 'blue')
        .style('mix-blend-mode', "screen");
    //alpha-value
    chart.selectAll('rect4')
        .data(alphaCount).enter()
        .append('rect')
        .attr('x', function (d, i) {  // .attr('x', callback-funktion som retrurnerar vårt värde)
            return i * barWidth;
        })
        .attr('y', function (d) {
            return height - yScale(d); // y(d) returnerar y-värde enligt skalan
        })
        .attr('height', function (d) {
            return yScale(d);
        })
        .attr('width', barWidth - barMargin)
        .style('fill', 'white')
        .style('mix-blend-mode', "screen");

}