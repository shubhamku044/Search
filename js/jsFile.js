let button1 = document.querySelector("#bt1");
let button2 = document.querySelector("#bt2");

button1.addEventListener('click', () => {
    let query = document.querySelector("#search-bar").value;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
})