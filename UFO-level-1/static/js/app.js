// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("form");

form.on("submit", runFilter);
button.on("click",runFilter);



function runFilter(event) {
    // Remove existing table
    d3.select("tbody").html("");
    // prevent default
    d3.event.preventDefault();

    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);

    var filteredData = tableData.filter( info => info.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
    
