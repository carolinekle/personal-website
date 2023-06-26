const projects = document.getElementById('projects');
const reason = document.querySelector('.reason');
const essex = document.querySelector('.essex');
const strong = document.querySelector('.strong');
const mega = document.querySelector('.mega');
let content = document.getElementById('content');
let amnh = document.querySelector('.amnh');

let serve, heroin, space, safe, exerpt;

reason.addEventListener("mouseover", () => {
    heroin = document.createElement("img");
    heroin.src = "../images/reason.jpg";
    document.body.appendChild(heroin);
    heroin.style.height = '200px';
    heroin.style.width = '200px';
    heroin.style.objectFit = 'cover';
})

reason.addEventListener("mouseout", () => {
    if (heroin){
    heroin.style.display = 'none';
    heroin.remove();
    }
})



essex.addEventListener("mouseover", () => {
    serve = document.createElement("img");
    serve.src = "../images/Essex_Hemphill.jpg";
    document.body.appendChild(serve);
    serve.style.height = '200px';
    serve.style.width = '200px';
    serve.style.objectFit = 'cover';
    serve.style.objectPosition = 'top';
})

essex.addEventListener("mouseout", () => {
    if (serve){
    serve.style.display = 'none';
    serve.remove();
    }
})


strong.addEventListener("mouseover", () => {
    safe = document.createElement("img");
    safe.src = "../images/SafeStrong.jpg";
    document.body.appendChild(safe);
    safe.style.height = '200px';
    safe.style.width = '200px';
    safe.style.objectFit = 'cover';

})

strong.addEventListener("mouseout", () => {
    if (safe){
    safe.style.display = 'none';
    safe.remove();
    }
})



mega.addEventListener("mouseover", () => {
    space = document.createElement("img");
    space.src = "../images/spaceman-final.gif";
    document.body.appendChild(space);
    space.style.height = '200px';
    space.style.width = '200px';
    space.style.objectFit = 'cover';

})

mega.addEventListener("mouseout", () => {
    if (space){
    space.style.display = 'none';
    space.remove();
    }
})

amnh.addEventListener("mouseover", () => {
    intern = document.createElement("img");
    intern.src = "../images/amnh.gif";
    document.body.appendChild(intern);
    intern.style.height = '200px';
    intern.style.width = '200px';
    intern.style.objectFit = 'cover';
})

amnh.addEventListener("mouseout", () => {
    if (intern){
    intern.style.display = 'none';
    intern.remove();
    }
})