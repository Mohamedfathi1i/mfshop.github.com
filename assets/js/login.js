var logornot = false;
var jwt = localStorage.getItem("jwt");
if (jwt != null) {
    window.location.href = './index.html'
}


var inps = document.getElementsByTagName("input");


var regex = {

    username: /^[A-Z][a-z]{3,8}$/,
    userphone: /^(010|011|012|015)[0-9]{8}$/,
    useremail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    userpassword: /^/,
    userrepassword: /^[A-Z][0-9][a-z]{4-10}$/,

}


for (var i = 0; i < inps.length; i++) {
    inps[i].addEventListener("keyup", function (e) {
        validate(e.target, regex[e.target.attributes.name.value])
    })
}


function validate(inp, reg) {


    var errore = inp.attributes.id.value;
    var errortext = document.querySelector("[for=" + errore + "]");

    // if()
    // {
    //     inp.className = "form-control is-valid"
    //     errortext.className = "text-danger"
    //     errortext.innerHTML = "plz enter string"

    // }


    if (inp.value == "") {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "reqired to fill this "
        logornot = false;

    } else if (inp.attributes.name.value == "userpassword" && inp.value.length < 8) {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "Password less than 8 not accepted "
        logornot = false

    } else if (inp.attributes.name.value == "useremail" && reg.test(inp.value) != true) {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "Enter valid email "
        logornot = false

    } else if (inp.attributes.name.value == "userphone" && reg.test(inp.value) != true) {

        inp.className = "form-control is-invalid "
        errortext.className = "text-danger"
        errortext.innerHTML = "Number satrt with 011-012-010-015, At least 11 number  "
        logornot = false

    } else {

        if (reg.test(inp.value) == true) {
            inp.className = "form-control is-valid"
            errortext.innerHTML = ""
            errortext.className = ""
            logornot = true;

        } else {

            inp.className = "form-control is-invalid "
            errortext.innerHTML = "not valid"
            errortext.className = "text-danger"
            logornot = false;

        }


    }


}


function login() {
    const username = document.getElementById("usernamech").value;
    const password = document.getElementById("userpasswordch").value;

    if (logornot == true) {


        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://www.mecallapi.com/api/login");
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({
            "username": username,
            "password": password
        }));
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                const objects = JSON.parse(this.responseText);
                console.log(objects);
                if (objects['status'] == 'ok') {
                    localStorage.setItem("jwt", objects['accessToken']);
                    Swal.fire({
                        text: objects['message'],
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = './index.html';
                        }
                    });
                } else {
                    Swal.fire({
                        text: objects['message'],
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            }
        };
        return false;

    } else {

        Swal.fire({
            text: "valid fildes first",
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}



function toggleform() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
}


//Karn.Yong@Mecallapi.Com
//mecallapi



/*

var userdata;

// function login() {
//     const username = document.getElementById("usernamech").value;
//     const password = document.getElementById("userpasswordch").value;

//     fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({

//           username: username,
//           password: password,
//           // expiresInMins: 60, // optional
//         })
//       })
//       .then(p2 => userdata = p2)
//       .then(() => {


//             if (userdata.message != 'Invalid credentials') {
//                 console.log(userdata.token);

//                 localStorage.setItem("jwt", userdata.token);
//                 Swal.fire({
//                     text: "valid",
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         // window.location.href = './index.html';
//                         console.log("2ss");
//                     }
//                 });
//             } else {
//                 Swal.fire({
//                     text: "not valid",
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }





//       });

// }




*/