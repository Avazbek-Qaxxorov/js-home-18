const res = document.querySelector("#res");
const addBtn = document.querySelector("#add-btn");
const searchBtn = document.querySelector("#search-btn");
const sortBtn = document.querySelector("#sort-btn");
const showBtn = document.querySelector("#show-btn");

function addNewMenu (info, price){
    this.info = info;
    this.price = price;
}

const ALL_MENU = JSON.parse(localStorage.getItem("Menu")) || [];

let menuBar = function () {
    let info = prompt("Menuga kiriting: ");
    let price = prompt("Narx kiriting: ");
    let newMenu = new addNewMenu(info, price);
    localStorage.setItem("Menu", JSON.stringify(ALL_MENU));
    
    ALL_MENU.push(newMenu);

}

function search () {
    let infoSearch = prompt("Menudan nimani qidirmoqchisiz: ");
    let element = ALL_MENU.filter((element) => element.info === infoSearch);
    console.log(...element);
}

// function sort (info, price) {
//     addNewMenu.sort ()

//     res.innerHTML += (`
//     <div class="menu">
//         <h2>${info}</h2>
//         <p>${price}</p>
//     </div>
//     `)
// }

function showMenu () {
    res.innerHTML = "";
    ALL_MENU.forEach((element) => {
        res.innerHTML += (`
        <div class="menu">
            <h2>${element.info}</h2>
            <p>${element.price}</p>
        </div>
        `)
    })
}

let sorted = false;

const sortMenuByPrice = function(){

    if(sorted === false){
        sorted = true;
        ALL_MENU.sort((a, b) => {
            if(parseFloat(a.price) > parseFloat(b.price)){
                return -1
            }
            else{
                return 1
            }
        })
    }
    else{
        sorted = false;
        ALL_MENU.sort((a, b) => {
            if(parseFloat(a.price) > parseFloat(b.price)){
                return 1
            }
            else{
                return -1
            }
        })
    }
    
    showMenu();
}

sortBtn.addEventListener("click" , sortMenuByPrice)


addBtn.addEventListener("click", menuBar);
searchBtn.addEventListener("click", search);
showBtn.addEventListener("click", showMenu);