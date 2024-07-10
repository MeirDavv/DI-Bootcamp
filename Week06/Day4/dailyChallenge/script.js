// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    const form = document.querySelector("form");
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const stringified = JSON.stringify(data);

    const element = document.createElement("p");
    element.innerText = stringified;
    document.querySelector("body").appendChild(element);
}