var passengers = [  { name: "Jane Doloop", paid: true, ticket: "coach" },
                    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                    { name: "Sue Property", paid: false, ticket: "firstclass" },
                    { name: "John Funcall", paid: true, ticket: "coach" } ];

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}
servePassengers(passengers);

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
}

function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        };
    }
    else {
        orderFunction = function() {
            alert("Your choice is cola or water.");
        };
    }
    return orderFunction;
}


var numarray = [64, 86, 15, 84, 90, 82, 26, 28];
numarray.sort(compareNum);
console.log(numarray);

function compareNum(a, b) {
    if (a > b) {
        return 1; 
    } else if (a ===b) {
        return 0;
    } else {
        return -1;
    }
} 



var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
                { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                { name: "Water", calories: 0, color: "clear", sold: 62123 }
                ];
products.sort(compareSold);
//printProducts(products);

function compareSold(num1, num2) {
    return num1.sold - num2.sold;
}
//console.log(products);

function printProducts(products) {
    for ( var i = 0; i < products.length; i++) {
        console.log("Name" + products[i].name +
                    ", Calories: " + products[i].calories +
                    ", Color: " + products[i].color +
                    ", Sold: " + products[i].sold);
    }
}

products.sort(compareColor);
printProducts(products);
function compareColor(num1, num2) {
    return num1.color - num2.color;
}

products.sort(comparecalor);
//printProducts(products);
function comparecalor(num1, num2) {
    return num1.calories - num2.calories;
}
