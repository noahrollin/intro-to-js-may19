window.addEventListener('load', setup)
const width = 640;
const height = 404;
const columns = 8;
const rows = 3;
const people = [
    ['alex'],
    ['alfred'],
    ['anita'],
    ['anne'],
    ['bernard'],
    ['bill'],
    ['charles'],
    ['claire'],
    ['david'],
    ['eric'],
    ['frans'],
    ['george'],
    ['herman'],
    ['joe'],
    ['maria'],
    ['max'],
    ['paul'],
    ['peter'],
    ['phillip'],
    ['richard'],
    ['robert'],
    ['sam'],
    ['susan'],
    ['tom'],

];

function setup() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.classList.add('container');
    for(let i = 0; i < columns * rows; i++) {
        console.log('i',i);
        const x = (width/columns) * (i % columns);
        const row = Math.floor(i / columns)
        const y = (height/rows) * (i % rows);
        const card = createCard(x + 50, y + 6);
        document.body.appendChild(card);
        // card.innerText = people[i][0];
    }
}


function createCard(x, y) {
    console.log(x, y);
    const card = document.createElement('div');
    card.classList.add('char');
    card.style.width = (width / columns) + 'px';
    card.style.height = (height / rows) + 'px';
    card.style.background = 'url("char.png") no-repeat -${x}px -6px';
    return card;
}