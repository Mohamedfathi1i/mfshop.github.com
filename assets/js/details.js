var idproduct = localStorage.productid;
var arryOfPro = new Array();
var itemCount = 0;

fetch("https://dummyjson.com/products/" + idproduct + "/")
    .then(res => res.json())
    .then(o => data = o)
    .then(() => detailspro());


function detailspro() {


    var value11 = data.price;
    var value12 = data.discountPercentage / 100;
    var value22 = value11 * value12;
    var afterdiscount = value11 - value22;



    console.log(data);
    var id = data.id;
    document.getElementById("brandproduct").innerText = data.brand;
    document.getElementById("categoryproduct").innerText = data.category;
    document.getElementById("descriptonproduct").innerText = data.description;
    document.getElementById("discountPercentageproduct").innerText = " " + data.discountPercentage + " %";
    document.getElementById("titelproduct").innerText = data.title;
    document.getElementById("priceproduct").innerText = " " + afterdiscount.toFixed(2) + " $";
    document.getElementById("befordiscounrproduct").innerText = " " + data.price + " $";
    document.getElementById("rateproduct").innerText = " " + data.rating + " ";
    var stock = data.stock;
    document.getElementById("img1").src = data.images[0];
    document.getElementById("img2").src = data.images[1];
    document.getElementById("img3").src = data.images[2];
    document.getElementById("img4").src = data.images[3];


}



function productToCard() {

    fetch("https://dummyjson.com/products/" + idproduct + "/")
        .then(res => res.json())
        .then(o => data = o)
        .then(() => {


            var value11 = data.price;
            var value12 = data.discountPercentage / 100;
            var value22 = value11 * value12;
            var afterdiscount = value11 - value22;


            if (localStorage.itemCount != null) {
                itemCount = localStorage.itemCount;
                itemCount++;

                localStorage.setItem('itemCount', itemCount);

            } else {

                localStorage.setItem('itemCount', itemCount);

            }
        
            var pqunt = document.getElementById('pquantity');
            console.log(pqunt.value);
            localStorage.setItem('idprodu' + itemCount , data.id)
            localStorage.setItem('title' + itemCount, data.title);
            localStorage.setItem('price' + itemCount, afterdiscount.toFixed(2) + " $");
            localStorage.setItem('image' + itemCount, data.thumbnail);
            localStorage.setItem("pquantity" + itemCount, pqunt.value);

            if (JSON.parse(localStorage.getItem("quentinTarantino")) != null) {
                arryOfPro = JSON.parse(localStorage.getItem("quentinTarantino"));
                arryOfPro.push(itemCount);

                localStorage.setItem("quentinTarantino", JSON.stringify(arryOfPro));
                console.log(localStorage.getItem("quentinTarantino"));

            } else {
                arryOfPro.push(itemCount);
                localStorage.setItem("quentinTarantino", JSON.stringify(arryOfPro));
            }

            cardQunter();



        });

}



function cardQunter() {
    var cardnumber = document.getElementById('cardCounter');
    if (JSON.parse(localStorage.getItem("quentinTarantino")) == null) {
        cardnumber.innerHTML = "";

    } else {
        cardnumber.innerHTML = JSON.parse(localStorage.getItem("quentinTarantino")).length + " Product";

    }


}


cardQunter();