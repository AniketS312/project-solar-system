
// Id Selectors
const idSelector = (idKey) => document.getElementById(idKey)

const imgDiv = idSelector('image-div')
const img = idSelector('image')
const massText = idSelector('mass-text')
const massTextOne = idSelector('mass-text-one')
const massTextTwo = idSelector('mass-text-two')
const mass = idSelector('mass')
const select = idSelector('select')
const calcBtn = idSelector('calculate')
const massNumber = document.createElement('span').classList.add('mass-number')


// Add Event Listener
calcBtn.addEventListener('click', function() {
    if (!mass.value) {
        massText.classList.remove('hide')
        massTextTwo.classList.add('hide')
        console.log(mass.value)
    }

    else if (mass.value && select.selectedIndex == 0){
      massText.classList.remove('hide')
      massTextOne.innerText = "Please select a planet."     
      massTextTwo.classList.add('hide')

    } else if (mass.value && select.selectedIndex != 0) {
        displayImage()
        measureMass()
    }
});


// Calculate Mass 
    function measureMass() {
        massTextTwo.classList.remove('hide')
            switch(select.selectedIndex) {
                case 1:
                 massTextOne.innerText = `The Mass of Mercury is`;               
                massTextTwo.innerText = mass.value * 0.0553;                 
                break;
                case 2:
                 massTextOne.innerText = `The Mass of Venus is`;                
                 massTextTwo.innerText = mass.value * 0.815;                  
                break;
                case 3:
                 massTextOne.innerText = `The Mass of Earth is`;                
                 massTextTwo.innerText = mass.value * 1;
                 break;
                case 4:
                 massTextOne.innerText = `The Mass of Mars is`;                
                 massTextTwo.innerText = mass.value * 0.107;
                 break;
                case 5:
                 massTextOne.innerText = `The Mass of Jupiter is`;               
                 massTextTwo.innerText = mass.value * 317.8;
                  break;
                case 6:
                 massTextOne.innerText = `The Mass of Saturn is`;               
                 massTextTwo.innerText = mass.value * 95.2;
                  break;
                case 7:
                 massTextOne.innerText = `The Mass of Uranus is`;                
                 massTextTwo.innerText = mass.value * 14.5;
                 break;
                case 8:
                 massTextOne.innerText = `The Mass of Neptune is`;                
                 massTextTwo.innerText = mass.value * 17.1;
                 break;
                case 9:
                 massTextOne.innerText = `The Mass of Pluto is`;                
                 massTextTwo.innerText = mass.value * 0.0025;
                 break;
                }
            massText.classList.remove('hide');
            massText.style.fontSize = '25px'
    }


// Show the right Image
    function displayImage() {
        switch(select.selectedIndex) {
            case 1:
            img.src = `./images/mercury.png`;
            break;
            case 2:
            img.src = `./images/venus.png`;
            break;
            case 3:
            img.src = `./images/earth.png`;
            break;
            case 4:
            img.src = `./images/mars.png`;
            break;
            case 5:
            img.src = `./images/jupiter.png`;
            break;
            case 6:
            img.src = `./images/saturn.png`;
            break;
            case 7:
            img.src = `./images/uranus.png`;
            break;
            case 8:
            img.src = `./images/neptune.png`;
            break;
            case 9:
            img.src = `./images/pluto.png`;
            break;
        } 
        img.classList.remove('hide')
    }