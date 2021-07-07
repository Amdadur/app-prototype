let meals = [
    {
        index: 0,
        name: "Pepper Salad",
        image: "/images/pepper-salad.png",
        type: "Breakfast",
        cals: "450",
        mins: "60",
        instructions: "",
        card: "/images/meal-card0.JPG",
        ingredients: ["80g of Peppers", "2 Onions", "500g of Sweetcorn"],
    },
    {
        index: 1,
        name: "Veg Loaf",
        image: "/images/veg-loaf.png",
        type: "Breakfast",
        cals: "450",
        mins: "60",
        intructions: "",
        card: "/images/meal-card1.JPG",
        ingredients: "Pumpkin",
    },
    {
        index: 2,
        name: "Seared Salmon",
        image: "/images/seared-salmon.png",
        type: "Lunch",
        cals: "450",
        mins: "60",
        intructions: "",
        card: "/images/meal-card2.JPG",
        ingredients: "Salmon",
    },
    {
        index: 3,
        name: "Spiced Pumpkin",
        image: "/images/spiced-punkin.png",
        type: "Lunch",
        cals: "410",
        mins: "50",
        intructions: "",
        card: "/images/meal-card3.JPG",
        ingredients: "Pumpkin",
    },
    {
        index: 4,
        name: "Baked Veg",
        image: "/images/baked-veg.png",
        type: "Dinner",
        cals: "633",
        mins: "70",
        intructions: "",
        card: "/images/meal-card4.JPG",
        ingredients: "Potatoes",
    },
    {
        index: 5,
        name: "BBQ Chicken",
        image: "/images/bbq-chicken.png",
        type: "Dinner",
        cals: "490",
        mins: "75",
        intructions: "",
        card: "/images/meal-card5.JPG",
        ingredients: "Chicken",
    },
];

var ul_List = document.getElementById("ul-List");

var rec_img = document.getElementById("rec-img");
var rec_h3 = document.getElementById("rec-h3");
var rec_cals = document.getElementById("rec-cals");
var rec_mins = document.getElementById("rec-mins");
var rec_buy = document.getElementById("rec-buy");

var rec_img_2 = document.getElementById("rec-img-2");
var rec_h3_2 = document.getElementById("rec-h3-2");
var rec_cals_2 = document.getElementById("rec-cals-2");
var rec_mins_2 = document.getElementById("rec-mins-2");
var rec_buy_2 = document.getElementById("rec-buy-2");

var l_img = document.getElementById("l-img");
var l_h3 = document.getElementById("l-h3");
var l_cals = document.getElementById("l-cals");
var l_mins = document.getElementById("l-mins");
var l_buy = document.getElementById("l-buy");
var l_swap = document.getElementById("l-swap");

var r_img = document.getElementById("r-img");
var r_h3 = document.getElementById("r-h3");
var r_cals = document.getElementById("r-cals");
var r_mins = document.getElementById("r-mins");
var r_buy = document.getElementById("r-buy");
var r_swap = document.getElementById("r-swap");

rec_img.src = meals[0].image;
rec_h3.innerText = meals[0].name;
rec_cals.innerText = meals[0].cals;
rec_mins.innerText = meals[0].mins;
rec_buy.addEventListener("click", buy);

rec_img_2.src = meals[1].image;
rec_h3_2.innerText = meals[1].name;
rec_cals_2.innerText = meals[1].cals;
rec_mins_2.innerText = meals[1].mins;
rec_buy_2.addEventListener("click", buy);

l_img.src = meals[2].image;
l_h3.innerText = meals[2].name;
l_cals.innerText = meals[2].cals;
l_mins.innerText = meals[2].mins;
l_buy.addEventListener("click", buy);
l_swap.addEventListener("click", swapMealLeft);

r_img.src = meals[3].image;
r_h3.innerText = meals[3].name;
r_cals.innerText = meals[3].cals;
r_mins.innerText = meals[3].mins;
r_buy.addEventListener("click", buy);
r_swap.addEventListener("click", swapMealRight);

function swapMealLeft() {
    var i = Math.floor(Math.random() * 7);
    l_img.src = meals[i].image;
    l_h3.innerText = meals[i].name;
    l_cals.innerText = meals[i].cals;
    l_mins.innerText = meals[i].mins;
}

function swapMealRight() {
    let i = Math.floor(Math.random() * 7);
    r_img.src = meals[i].image;
    r_h3.innerText = meals[i].name;
    r_cals.innerText = meals[i].cals;
    r_mins.innerText = meals[i].mins;
}

function buy() {
    var index = 0;
    addToList(index);
}

function addToList(index) {
    for (let i = 0; i < meals[index].ingredients.length; i++) {
        var listItem = meals[index].ingredients[i];
        var li_item = document.createElement("li");
        li_item.innerHTML = listItem;
        ul_List.appendChild(li_item);
    }
}

function getInputValue() {
    // Selecting the input element and get its value
    var inputVal = document.getElementById("input").value;
    addNew(inputVal);
    document.getElementById("input").value = "";
}
function addNew(input) {
    //checks if there is an input
    if (input === "") {
    } else {
        //push to array
        //creates li element
        var addToList = document.createElement("li");
        //adds input to element
        addToList.innerHTML += input;
        ul_List.appendChild(addToList);
    }
}
