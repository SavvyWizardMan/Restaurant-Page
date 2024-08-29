import burger from "./burger.jpg"
import wizard from "./wizard.png"

export default function() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const e = document.createElement('h1');   
    const p = document.createElement('p'); 
    const container = document.createElement('div');
        const img = document.createElement('img');
    const wiz = document.createElement('img');
    const wizP = document.createElement('p');
    const warning = document.createElement('p');

    wiz.src = wizard;
    wiz.classList.add('wizard');
    wizP.innerText = "It's wizard time motherfucker";
    wizP.classList.add('wizard-text');
    warning.innerText = "DO NOT HOVER ON THIS BURGER!";
    warning.classList.add('warning');

    container.addEventListener('animationend', () => {
        document.body.style.backgroundColor = "white";
        wizP.innerText = "HAAAAAAAAAAA!!!!!!!";
        wizP.style.zIndex = 1;
        wizP.style.fontSize = "100px";
    });
    

    container.classList.add('homeContainer');

    img.src = burger;
    img.alt = "a burger";

    e.innerText = "Home";
    p.innerText = "Welcome to the greatest burger joint on the planet!";

    content.appendChild(e);
    content.appendChild(p);
    container.appendChild(img);
    container.appendChild(wiz);
    container.appendChild(wizP);
    container.appendChild(warning);
    content.appendChild(container);
};