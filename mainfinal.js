// a constant's value can never change.
const BASE_URL = "https://zagster-service.herokuapp.com"

//call function updateView() after the page loads
$(updateView)


//Arrays to hold data points pulled from JQUERY
var my_data = []

//updateView() function definition
//this function gets JSON data from the web server endpoint /rides/count/per_month and calls the function perYear()
//after the function perYear runs it will call the function updateChart()
function updateView() {
  
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updateChart);
}


// This is what your JSON data looks like given the endpoint /rides/count/per_month 
//If you type https://zagster-service.herokuapp.com/rides/count/per_month in your web browser, you'll see this data
// {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}],
// "2017":[{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}],
// "2018":[{"1":94},{"2":83},{"3":154},{"4":1216},{"5":2400},{"6":1756},{"7":2748},{"8":1912},{"9":3648},{"10":2404}]}

// Funtion definition for perYear(data)
// The data argument "data" is your JSON data
// This function extracts information from your JSON data and put it in an array called my_data
function perYear(data) {

    // data2016 = [{"9":220},{"10":141},{"11":89},{"12":16}]
    var data2017 = data[2017]  //extract the information associated with the key "2016" and put this info in a variable called data2016

    //extracting data for each month.We need to  specify which array element and then specify the key before we can get the data for that key
    //So data2016[0][9] means look at the zero-ith array element {"9":220} and extract the data associated the key 9
    //result should be 220 
    console.log(data2017[0][1]) //print daya to the console to make sure we did it right
    my_data.push(data2017[0][1]) //add the data to the my_data array 
    console.log(data2017[1][2])  //looks at the one-ith array element {"10":141} extract data for key 10
    my_data.push(data2017[1][2])
    console.log(data2017[2][3]) //print daya to the console to make sure we did it right
    my_data.push(data2017[2][3]) //add the data to the my_data array 
    console.log(data2017[3][4])  //looks at the one-ith array element {"10":141} extract data for key 10
    my_data.push(data2017[3][4])
    console.log(data2017[4][5]) //print daya to the console to make sure we did it right
    my_data.push(data2017[4][5]) //add the data to the my_data array 
    console.log(data2017[5][6])  //looks at the one-ith array element {"10":141} extract data for key 10
    my_data.push(data2017[5][6])
    console.log(data2017[6][7]) //print daya to the console to make sure we did it right
    my_data.push(data2017[6][7]) //add the data to the my_data array 
    console.log(data2017[7][8])  //looks at the one-ith array element {"10":141} extract data for key 10
    my_data.push(data2017[7][8])
    console.log(data2017[8][9]) //print daya to the console to make sure we did it right
    my_data.push(data2017[8][9]) //add the data to the my_data array 
    console.log(data2017[9][10])  //looks at the one-ith array element {"10":141} extract data for key 10
    my_data.push(data2017[9][10])
    console.log(data2017[10][11]) //print daya to the console to make sure we did it right
    my_data.push(data2017[10][11]) //add the data to the my_data array 
    console.log(data2017[11][12])  //looks at the one-ith array element {"10":141} extract data for key 10
    my_data.push(data2017[11][12])  //add the data to the my_data array 
    //keep going to get all data points

   
    //challenge - use a loop to extract the data
    //challenge extract the keys from the JSON data instead of manually typing them into the chart
     
  }
  
// Funtion definition for updateChart()
// This function creates your chart
// Make sure you have a <canvas> element in your index with an id="myChart"
function updateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2017',
                backgroundColor: 'rgb(0, 99, 132)',
                borderColor: 'rgb(0, 0, 0)',
                //data: [0, 10, 5, 2, 20, 30, 45]
                data: my_data  //make the chart use your my_data array
            }]
        },

        // Configuration options go here
        options: {}
    });
}
