// alert("Hello there!") 

// $(updateView)

// function updateView() {
//     alert("Using jQuery!")
// }


// //a memory location that never changes
// const BASE_URL = "http://zagster-service.herokuapp.com"
// const PI = 3.14159

// //jQuery command. wait unitl web page loads call function 
// //whose name is in parenthesis
// $(greeter)

// //call function add (use it-make it run)
// add(2,3);
// //greeter is the function identifier. name is the functions
// //argument (info it need to do its job)
// function add(num1, num2){
//     answer = num1 + num2;
//     console.log("the answer is:" + answer);
//     return answer;
// }

//  function greeter (name){
//      alert("welcome to " + name + " data visualization")
// }
// greeter("Lea Watson's")

// var person = {name: "Lea", age: 20, car: {model: "Subaru", year: 2001}}
// console.log ("My name is " + person.name)
// console.log ("My age is " + person.age)
// console.log ("My car model is " + person.car.model)

// if(person.age > 20){
//     alert("you're old!")
// }

// var data = {"2016":[{"9":220}, {"10": 141}, {"11":89}, {"12":16}]}
// var year_list = data[2016]
// console.log('year list is ' + year_list)

// console.log(year_list[0][9])
// console.log(year_list[1][10])
// console.log(year_list[2][11])
// console.log(year_list[3][12])

$(updateView)

let years = []
let months2016 = []
let months2017 = []
let months2018 = []

function updateView(){
    // $.getJSON(BASE_URL + "/rides/count", updateRidecount)

    $.when ($.getJSON(BASE_URL + "rides/count/per_month", perYear),
    ).then(updateChart);
}

function perYear(data)

for(var index = 0, month = 9; index <= 3, month <= 12, ++index, ++month){
    months2016.push(data[2016] [index] [month])
}
console.log("2016 data by months is easy " + months2016)

for(var index = 0, month = 9; index <= 3, month <= 12, ++index, ++month){
    months2017.push(data[2017] [index] [month])
}
console.log("2017 data by months is easy " + months2017)

for(var index = 0, month = 9; index <= 3, month <= 12, ++index, ++month){
    months2018.push(data[2018] [index] [month])
}
console.log("2018 data by months is easy " + months2018)
}
