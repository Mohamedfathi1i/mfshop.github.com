var mybutton = document.getElementById("btnup");
var jwt = localStorage.getItem("jwt");
var toggeldata = document.getElementById("toggeldata");
var usernamedata = document.getElementById("fname");
var profile = document.getElementById("profile");
var icontoggel = document.getElementById("navbarDropdownMenuLink")
var avtar = document.getElementById("avatar");
var itemCount = 0;



window.addEventListener("load", function () {
    setTimeout(function () {

        document.getElementById("loading").style.opacity = 0;
        setTimeout(function () {
            document.getElementById("loading").style.display = "none";
        }, 990)

    }, 1000)

})


if (jwt == null) {

    usernamedata.innerHTML = "Login / sign up";
    toggeldata.style.display = "none";
    icontoggel.style.display = "none"
    usernamedata.href = "login.html";
    avtar.src = ""

}


function loadUser() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.mecallapi.com/api/auth/user");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Authorization", "Bearer " + jwt);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            if (objects["status"] == "ok") {
                const user = objects["user"]
                document.getElementById("fname").innerHTML = user["fname"] + user["lname"];
                avtar.src = user["avatar"];
                toggeldata.style.display = "";
                icontoggel.style.display = "block"
                profile.href = "profile.html";


                usernamedata.addEventListener("click", e => {
                    e.preventDefault();
                    // icontoggel.className += " " + "show";
                    // icontoggel.ariaExpanded = "true"
                    // toggeldata.className += " " + "show";
                    // toggeldata.setAttribute( "data-bs-popper", "satic") ;

                })
                // document.getElementById("username").innerHTML = uaerdata.username;
            }
        }
    };
}


function logout() {
    localStorage.removeItem("jwt");
    window.location.href = '/'
}


mybutton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


})

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

})




var totalpricecart = document.getElementById("totalprice");
var cartconatiner = document.getElementById("cartconatin");
function cardQunter() {
    var cardnumber = document.getElementById('cardCounter');
    if (JSON.parse(localStorage.getItem("quentinTarantino")) == null) {
        cardnumber.innerHTML = "ADD To Card";

    } else {
        cardnumber.innerHTML = JSON.parse(localStorage.getItem("quentinTarantino")).length + " Product";

        counter = JSON.parse(localStorage.getItem("quentinTarantino"));
        var sum = 0;
        for (let index = 0; index < counter.length; index++) {
            let ids = 'idprodu' + counter[index];
            let titels = 'title' + counter[index];
            let prices = 'price' + counter[index];
            let images = 'image' + counter[index];
            let pquantitys = 'pquantity' + counter[index];

            const produ = document.createElement("div");
            produ.className = "col-12 d-flex justify-content-around align-items-center text-center";


            const productnumber = document.createElement("div");
            productnumber.className = "d1 overflow-hidden px-3 col-1";
            const numtext = document.createTextNode("#" +parseInt(index + 1));
            productnumber.appendChild(numtext);
            




            const productname = document.createElement("div");
            productname.className = "d1 overflow-hidden px-3 col-4";
            const nametext = document.createTextNode(localStorage.getItem(titels));
            productname.appendChild(nametext);



            const productprice = document.createElement("div");
            productprice.className = "d1 overflow-hidden px-3 col-2";
            const pricetext = document.createTextNode( parseFloat(localStorage.getItem(prices)) * parseFloat(localStorage.getItem(pquantitys)) + "$");
            productprice.appendChild(pricetext);




            const productquanta = document.createElement("div");
            productquanta.className = "d1 overflow-hidden px-3 col-1";
            const quantatext = document.createTextNode(parseFloat(localStorage.getItem(pquantitys)));
            productquanta.appendChild(quantatext);




            const productimgdiv = document.createElement("div");
            productimgdiv.className = "d1 overflow-hidden  col-2 d-flex justify-content-center align-items-center";


            const productimg = document.createElement("img");
            productimg.className = "w-50";
            productimg.setAttribute("height", "50px");
            productimg.src = localStorage.getItem(images);


            const productdelet = document.createElement("div");
            productdelet.className = "d1 overflow-hidden px-3 col-2 ";
            
            const buttondelet = document.createElement("button");
            buttondelet.className = "btn btn-danger";
            buttondelet.setAttribute("onclick", "deleteproduct(" + localStorage.getItem(ids) + ");")


            const icondelete = document.createElement("i");
            icondelete.className = "bx bx-x";


            produ.appendChild(productnumber);
            produ.appendChild(productname);
            produ.appendChild(productprice);
            produ.appendChild(productquanta);
            produ.appendChild(productimgdiv);
            produ.appendChild(productdelet);

            productimgdiv.appendChild(productimg);

            productdelet.appendChild(buttondelet);
            buttondelet.appendChild(icondelete);



            cartconatiner.appendChild(produ);




                sum += parseFloat(localStorage.getItem(prices)) * parseFloat(localStorage.getItem(pquantitys));
        }

        totalpricecart.innerHTML = sum.toFixed(2) + " $"






    }


}



function productdetails(id) {
    var ids = id;
    localStorage.setItem('productid', ids);
    window.open("details.html", "_self");


}


cardQunter();

loadUser();

























//هيؤجع


/*
var counter;

var sum = 0;


function showItemCard() {

    counter = JSON.parse(localStorage.getItem("quentinTarantino"));
    for (let index = 0; index < counter.length; index++) {
        var qunta1 = ("pquantity" + index).toString();
        console.log(qunta1);

        let titles = 'title' + counter[index];
        let prices = 'price' + counter[index];
        let imges = 'image' + counter[index];

        console.log(localStorage.getItem(titles));
        sum += parseFloat(localStorage.getItem(prices));
        console.log(sum);
        console.log(localStorage.getItem(imges));



        // var tableRow = document.createElement('tr');

        // var tBody = document.getElementById('cardItem');
        // // td for img and title
        // var tdCardItem = document.createElement('td');
        // tdCardItem.className = 'shoping__cart__item';
        // var imgCardItem = document.createElement('img');
        // imgCardItem.src = localStorage.getItem(imges);
        // var titleCardItem = document.createElement('h5');
        // titleCardItemText = document.createTextNode(localStorage.getItem(titles));
        // titleCardItem.appendChild(titleCardItemText);
        // tdCardItem.appendChild(imgCardItem);
        // tdCardItem.appendChild(titleCardItem);
        // // td for price
        // var tdCardPrice = document.createElement('td');
        // tdCardPrice.className = 'shoping__cart__price';
        // var PriceCardItem = document.createTextNode(localStorage.getItem(prices));
        // tdCardPrice.appendChild(PriceCardItem);

        // // quentity
        // var tdItemQuen = document.createElement('td');
        // tdItemQuen.className = 'shoping__cart__quantity';

        // var qunDive = document.createElement('div');
        // qunDive.className = 'quantity';


        // var proqunDive = document.createElement('div');
        // proqunDive.className = 'pro-qty';

        // var inputQun = document.createElement('input');
        // inputQun.type = 'number';
        // console.log('quntabeor' + localStorage.qunta1)
        // if (localStorage.getItem(qunta1) != undefined) {
        //     console.log('qqqq' + localStorage.getItem(qunta1));
        //     inputQun.value = localStorage.getItem(qunta1);
        // } else {
        //     console.log('xxxx' + localStorage.qunta1);

        //     inputQun.value = 1;

        // }


        // proqunDive.appendChild(inputQun);
        // qunDive.appendChild(proqunDive);
        // tdItemQuen.appendChild(qunDive);

        // //td total
        // var tdCardTotal = document.createElement('td');
        // tdCardTotal.className = 'shoping__cart__total';
        // var totalCardItemPrice;
        // if (localStorage.getItem(qunta1) != undefined) {
        //     totalCardItemPrice = document.createTextNode(localStorage.getItem(prices) * localStorage.getItem(qunta1));

        // } else {
        //     totalCardItemPrice = document.createTextNode(localStorage.getItem(prices));

        // }
        // tdCardTotal.appendChild(totalCardItemPrice);
        // var subtotal = parseFloat(tdCardTotal.textContent);
        // total += subtotal;
        // console.log(total);
        // // remove item icon
        // var removeCardItem = document.createElement('td');
        // var removeCardIcon = document.createElement('span');
        // removeCardIcon.className = 'icon_close';
        // removeCardItem.appendChild(removeCardIcon);

        // //append all td to tr
        // tableRow.appendChild(tdCardItem);
        // tableRow.appendChild(tdCardPrice);
        // tableRow.appendChild(tdItemQuen);
        // tableRow.appendChild(tdCardTotal);
        // tableRow.appendChild(removeCardItem);
        // tBody.appendChild(tableRow);

    }

    console.log(sum);
    console.log(sum);



}

showItemCard();


/*


// document.getElementById("login").addEventListener("click", function () {


//     var useranme = document.getElementById("usernamech").value;
//     var userpassword = document.getElementById("userpasswordch").value;


//     fetch('https://dummyjson.com/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({

//                 username: useranme,
//                 password: userpassword,
//                 // expiresInMins: 60, // optional
//             })
//         })
//         .then(res => res.json())
//         .then(console.log);



// })


*/