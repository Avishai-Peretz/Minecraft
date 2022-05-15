

const grid = document.getElementById('grid');
let matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2],
    [0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 6, 1, 1],
    [4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 6, 1, 1],
    [4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 4, 0, 0, 0, 0, 0, 6, 1, 1],
    [0, 4, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 6, 1, 1],
    [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 2, 2, 0, 0, 0, 0, 6, 1, 1],
    [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 1, 1],
    [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 1, 1],
    [2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    
]

const mainObject = {
    itemsCounter: {
        dirt: 0,
        grass: 0,
        trunk: 0,
        tree: 0,
        rock: 0,
        water: 0
    },
    tools: {
        axe: document.getElementById('axe'),
        pickaxe: document.getElementById('pickaxe'),
        shovel: document.getElementById('shovel'),
        bucket: document.getElementById('bucket')
    },
    bank: {
        dirt: document.getElementById('dirt'),
        grass: document.getElementById('grass'),
        trunk: document.getElementById('trunk'),
        tree: document.getElementById('tree'),
        rock: document.getElementById('rock'),
        water: document.getElementById('water'),
    },   
    functions: {
        
    }
}
const allTools = Object.values(mainObject.tools)
let allItems = Object.values(mainObject.bank)


function drow (part, cube) {
    if (part == 0) {
        cube.setAttribute('type', 'sky')
    }
    if (part == 1) {
        cube.setAttribute('type', 'dirt')
    }
    if (part == 2) {
        cube.setAttribute('type', 'grass')           
    }
    if (part == 3) {
        cube.setAttribute('type', 'trunk')
    }
    if (part == 4) {
        cube.setAttribute('type', 'tree')
    }
    if (part == 5) {
        cube.setAttribute('type', 'rock')
    }
    if (part == 6) {
        cube.setAttribute('type', 'water')
    } 
 }   


function blabla = () => {

}


function addToBank (part, cube) {
    cube.addEventListener('click', () => {
        if ((cube.getAttribute('type', 'dirt') == "dirt") && allTools[2].getAttribute('selectedTool', true) == 'true') {
            mainObject.itemsCounter.dirt += 1
            mainObject.bank.dirt.innerText = mainObject.itemsCounter.dirt;
            console.log(part);
            cube.setAttribute('type', 'sky')
        }
        if (cube.getAttribute('type', 'grass') == "grass" && allTools[2].getAttribute('selectedTool', true) == 'true') {
            mainObject.itemsCounter.grass += 1
            mainObject.bank.grass.innerText = mainObject.itemsCounter.grass;
            cube.setAttribute('type', 'sky')
        }
        if (cube.getAttribute('type', 'trunk') == "trunk" && allTools[0].getAttribute('selectedTool', true) == 'true') {
            mainObject.itemsCounter.trunk += 1
            mainObject.bank.trunk.innerText = mainObject.itemsCounter.trunk;
            cube.setAttribute('type', 'sky')
        }
        if (cube.getAttribute('type', 'tree') == 'tree' && allTools[0].getAttribute('selectedTool', true) == 'true') {
            mainObject.itemsCounter.tree += 1
            mainObject.bank.tree.innerText = mainObject.itemsCounter.tree;
            cube.setAttribute('type', 'sky')
        }
        if (cube.getAttribute('type', 'rock') == 'rock' && allTools[1].getAttribute('selectedTool', true) == 'true') {
            mainObject.itemsCounter.rock += 1
            mainObject.bank.rock.innerText = mainObject.itemsCounter.rock;
            cube.setAttribute('type', 'sky')
        }
        if (cube.getAttribute('type', 'water') == 'water' && allTools[3].getAttribute('selectedTool', true) == 'true') {
            mainObject.itemsCounter.water += 1
            mainObject.bank.water.innerText = mainObject.itemsCounter.water;
            cube.setAttribute('type', 'sky')              
        }            
    }) 
}

function drawFromBank (part, cube, typeOfItem) {
    cube.addEventListener('click', () => {
        if (typeOfItem == 'dirt') {
            console.log("dirt");
            mainObject.itemsCounter.dirt -= 1
            mainObject.bank.dirt.innerText = mainObject.itemsCounter.dirt;
            cube.setAttribute('type', 'dirt')       
        }
    }) 
}

function getTypeOfItem (typeOfItem) {
    allItems.forEach((item) => {                            
        if (item.getAttribute('selectedItem', true) == 'true') {
            if (item === allItems[0] && mainObject.itemsCounter.dirt > 0) {
                return typeOfItem = 'dirt'
            }
            if (item === allItems[1]) {
                return typeOfItem =  'grass'
            }
            if (item === allItems[2]) {
                return typeOfItem =  'trunk'
            }
            if (item === allItems[3]) {
                return typeOfItem =  'tree'
            }
            if (item === allItems[4]) {
                return typeOfItem =  'rock'
            }
            if (item === allItems[5]) {
                return typeOfItem =  'water'
            } else return typeOfItem = 'sky'
        }
    }) 
    console.log(typeOfItem);
}


function run () {
    matrix.forEach((row) => {
        row.forEach((part) => {   
            let cube = document.createElement('div')   
            cube.setAttribute('class', 'cube')
            grid.appendChild(cube)
            let typeOfItem = 'sky';
            getTypeOfItem(typeOfItem)
            drow(part, cube)
            addToBank(part, cube, typeOfItem) 
            drawFromBank(part, cube, typeOfItem)
        })
        return
    })
}
run()


function hamburgerMenu () {
    const menu = document.getElementById('menu')
    const hamburger = document.querySelector('#hamburgerMenu')
    hamburger.addEventListener('click', () => {
        if (menu.getAttribute('show', 'false') == 'false') {
            menu.setAttribute('show', 'ture')
        } 
        else menu.setAttribute('show', 'false')
    })
}
hamburgerMenu()

const toolState = () => {
    for (let tool of allTools) {
        tool.setAttribute('selectedTool', false)  
        tool.addEventListener('click',setToolState)
    }
}
toolState();

function setToolState(event) {
    for (let tool of allTools) {
        tool.setAttribute('selectedTool', false)
        tool.addEventListener('click', () => {
            if (tool.getAttribute('selectedTool', false)) {
                tool.setAttribute('selectedTool', true)           
            } else tool.setAttribute('selectedTool', false)
        })
    }  
}

const itemState = () => {
    for (let item of allItems) {
        item.setAttribute('selectedItem', false)  
        item.addEventListener('click',setItemlState)
    }
}
itemState();

function setItemlState(event) {
    for (let item of allItems) {
        item.setAttribute('selectedItem', false)
        item.addEventListener('click', () => {
            if (item.getAttribute('selectedItem', false)) {
                item.setAttribute('selectedItem', true)           
            } else item.setAttribute('selectedItem', false)
        })
    }  
}
// let lastRenderTime = 0;
// function main(correntTime) {
//     window.requestAnimationFrame(main);  
//     lastRenderTime = correntTime;
// }
// main()
// window.requestAnimationFrame(main);

    