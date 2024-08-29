export default function() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const e = document.createElement('h1');
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    const pre = document.createElement('pre');

    container.classList.add('aboutContainer');
    pre.classList.add('pre');

    e.innerText = "About";
    h2.innerText = "Who we are?";
    pre.innerText = `
    We are wizards motherfucker.
    We make the tastiest burgers on the fucking planet.
    No, the whole ass galaxy can't even compete with us.
    Our burgers are too damn supreme for the divine intellect.
    Only mere mortals can appreciate the beauty and fineness of these burgers.
    So shove it up your ass salad fork motherfuckers.
    Our burgers will make you shed your corporeal form
    And you will ascend to the gods.
    This burger was straight up summoned
    From Narlëogon bitch.
    You ain't never gonna see another burger
    That is on par with ours.
    So go to your lame ass McDonalds
    Or Wendys
    Or even Burger King,
    But who the fuck eats at Burger King
    And enjoys the food?
    Regardless, you won't ever see,
    feel,
    taste,
    or know a burger better than ours.
    So whats your peasant bitch ass waiting for?
    Get over here or I swear.
    You remember us telling you were wizards correct?
    Yeah, that means we'll cast on your ass until
    Nothing remains.
    So get the fuck over here, ⚡⚡⚡NOW⚡⚡⚡
    `

    content.appendChild(e);
    content.appendChild(container);
    container.appendChild(h2);
    container.appendChild(pre);
};