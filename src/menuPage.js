import burger from "./burger.jpg"

export default function() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const e = document.createElement('h1');
    const container = document.createElement('div');
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');
    const img6 = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');

    const arr = [item1, item2, item3, item4, item5, item6];
    const arr2 = [img1, img2, img3, img4, img5, img6];
    const arr3 = [p1, p2, p3, p4, p5, p6];

    arr2.forEach(img => {
        img.src = burger;
    });

    arr3.forEach(p => p.innerText = "This is a burger. It is the best burger ever. Don't question it. It's in fact the most succulent piece of sustenance on this planet.")

    container.classList.add('menuContainer');
    arr.forEach(item => {        
        item.classList.add('item');
        container.appendChild(item);
    });

    item1.appendChild(img1);
    item2.appendChild(img2);
    item3.appendChild(img3);
    item4.appendChild(img4);
    item5.appendChild(img5);
    item6.appendChild(img6);

    item1.appendChild(p1);
    item2.appendChild(p2);
    item3.appendChild(p3);
    item4.appendChild(p4);
    item5.appendChild(p5);
    item6.appendChild(p6);
    

    e.innerText = "Menu";

    content.appendChild(e);
    content.appendChild(container);

};