
// Retrieve the form and console.log it.

let form = document.getElementsByTagName('form')[0];
console.log(form);

// Retrieve the inputs by their id and console.log them.

form.addEventListener("change", formChange);
function formChange(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    console.log(fname, lname);
    // Retrieve the inputs by their name attribute and console.log them.
    let firstname = document.getElementsByName("firstname")[0].value;
    let lastname = document.getElementsByName("lastname")[0].value;
    console.log(firstname, lastname);
}

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

form.addEventListener("submit", formSubmit);
function formSubmit(event){
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if (fname!=="" && lname!==""){
        let ulElement = document.getElementsByClassName('usersAnswer')[0];
        let liFname=document.createElement("li");
        liFname.innerText = fname;
        let liLname=document.createElement("li");
        liLname.innerText = lname;
        ulElement.appendChild(liFname);
        ulElement.appendChild(liLname);
    }
}