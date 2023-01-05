const mainDiv = document.getElementById('principal');
const btnMenu = document.getElementById('btn-menu');
const navMobile = document.getElementById('nav-mobile');
const links = document.querySelectorAll('a');

function fetchTemplate(url) {
    fetch(url)
    .then (res => res.text())
    .then (data => {
        principal.innerHTML = data;
    })
    
}

window.addEventListener("hashchange", ()=>{
    console.log(location.hash)
    console.log(location.hash.slice(1))
    let file = "templates/" + location.hash.slice(1) + ".html"
    fetchTemplate(file)
})

window.addEventListener("load", ()=>{
    let file = location.hash ? (`templates/${location.hash.slice(1)}.html`) : (`templates/inicio.html`)
    fetchTemplate(file)
})

links.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault()
        location.hash = link.id
    })
})

