

$('.home-slider').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
});


$('.calsuol2').owlCarousel({
    items: 8,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    loop: true,
    autoWidth: true,
    margin: 10,

});





var latest = document.getElementById("latest");

function dispalyProduct() {

    fetch('https://dummyjson.com/products?limit=2&skip=60')
        .then(res => res.json())
        .then(p1 => productContainer1 = p1)
        .then(() => {

            fetch('https://dummyjson.com/products?limit=2&skip=70')
                .then(res => res.json())
                .then(p2 => productContainer2 = p2)
                .then(() => {
                    var pro1 = productContainer1.products;
                    var pro2 = productContainer2.products;

                    const productContainerd = [...pro1, ...pro2];
                    drawdata(productContainerd)
                });
        });

}


function drawdata(productContainer) {

    latest.innerHTML = "";
    for (let i = 0; i < productContainer.length; i++) {


        //super card
        const supercard = document.createElement("div");
        supercard.className = "col-6 col-md-6 col-lg-3 col-xxl-3";

        
        // main card
        const card = document.createElement("div");
        card.className = "d-flex flex-column align-items-center justify-content-center product-item my-3";

        //product card
        const product = document.createElement("div");
        product.className = "product ";

        //img
        const img = document.createElement("img");
        img.src = productContainer[i].thumbnail;

        const ul = document.createElement("ul");
        ul.className = "d-flex align-items-center justify-content-center list-unstyled icons"

        //preview li
        const lipreview = document.createElement("li");
        lipreview.className = "icon";
        lipreview.id = productContainer[i].id;
        lipreview.setAttribute("onclick", "productdetails(" + productContainer[i].id + ");")


        //preview icon
        const previewicon = document.createElement("span");
        previewicon.className = "fas fa-expand-arrows-alt"


        //heart li
        const heart = document.createElement("li");
        heart.className = "icon";

        //heart icon
        const hearticon = document.createElement("span");
        hearticon.className = "fas fa-heart";


        //cartshop li
        const cartshop = document.createElement("li");
        cartshop.className = "icon";

        //cartshop icon
        const cartshopicon = document.createElement("span");
        cartshopicon.className = "fas fa-shopping-bag";


        //title
        const title = document.createElement("div");
        title.className = "title pt-4 pb-1";
        const titletext = document.createTextNode(productContainer[i].title);
        title.appendChild(titletext);


        //rate
        const ratecontainer = document.createElement("div");
        ratecontainer.className = "d-flex align-content-center justify-content-center";

        //rate stars1
        const rateicon1 = document.createElement("span");
        rateicon1.className = "fas fa-star";

        //rate stars2
        const rateicon2 = document.createElement("span");
        rateicon2.className = "fas fa-star";

        //rate stars3
        const rateicon3 = document.createElement("span");
        rateicon3.className = "fas fa-star";

        //rate stars4
        const rateicon4 = document.createElement("span");
        rateicon4.className = "fas fa-star";

        //rate stars5
        const rateicon5 = document.createElement("span");
        rateicon5.className = "fas fa-star";



        //price after discount
        var value11 = productContainer[i].price;
        var value12 = productContainer[i].discountPercentage / 100;
        var value22 = value11 * value12;
        var afterdiscount = value11 - value22;


        //price
        const price = document.createElement("div");
        price.className = "price";
        const pricetext = document.createTextNode(afterdiscount.toFixed(2) + "$");
        price.appendChild(pricetext);



        // appendsec

        supercard.appendChild(card);
        card.appendChild(product);
        card.appendChild(title);
        card.appendChild(ratecontainer);
        card.appendChild(price);

        product.appendChild(img);
        product.appendChild(ul);


        ul.appendChild(lipreview);
        ul.appendChild(heart);
        ul.appendChild(cartshop);


        lipreview.appendChild(previewicon);
        heart.appendChild(hearticon);
        cartshop.appendChild(cartshopicon);


        ratecontainer.appendChild(rateicon1);
        ratecontainer.appendChild(rateicon2);
        ratecontainer.appendChild(rateicon3);
        ratecontainer.appendChild(rateicon4);
        ratecontainer.appendChild(rateicon5);




        latest.appendChild(supercard);


    }

}

dispalyProduct();






