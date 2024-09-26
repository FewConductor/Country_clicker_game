let toggle = document.querySelector('.toggle');
let cover = document.querySelector('.cover');
let map = document.querySelector('.sa')
let mapCountries = map.querySelectorAll('div')
let country = document.querySelector('.country')
let finish = document.querySelector('.finish')
let finishMessage = document.querySelector('.finishMessage')
let again = document.querySelector('.again')
let sea = document.querySelectorAll('.sea')

// ! Toggle for day/night mode
toggle.addEventListener('click', () => {
    cover.classList.toggle('moved');
    mapCountries.forEach((e) => {
        e.classList.toggle('night');
    });
    sea.forEach((s) => {
        s.classList.toggle('nightsea');
    })
})

// ! Establishing the list of countries
let countriesList = ['Brazil', 'French Guiana', 'Guyana', 'Suriname', 'Peru', 'Bolivia', 'Argentina', 'Chile', 'Ecuador', 'Paraguay', 'Uruguay', 'Colombia', 'Venezuela'];

// ! Creating a randomised order for each game
let cList = [];
countriesList.forEach((e) => {
    cList.push(e);
});
let countries = [];
while (cList.length != 0) {
    let cou = cList[Math.floor(Math.random() * cList.length)];
    countries.push(cou);
    cList.splice(cList.indexOf(cou), 1);
};

// ! Initial set up
let i = 0;
let answer;
next();

// ! Play again button once finished
again.addEventListener('click', () => {
    location.reload();
})

// ! Previous and next buttons
function previous() {
    if (i == 0) {
        i = countries.length - 1;
    } else {
        i--;
    }
    answer = countries[i];
    country.innerHTML = answer;
};

function next() {
    if (countries.length != 0) {
        if (i < (countries.length - 1)) {
            i++;
        } else {
            i = 0;
        };
        answer = countries[i]
        country.innerHTML = answer;
    } else {
        country.innerHTML = 'Completed!';
        finishMessage.innerHTML = 'Mission success!';
        finish.classList.add('show');
    }
};


let previousBtn = document.querySelector('.previous')
let nextBtn = document.querySelector('.next')
previousBtn.addEventListener('click', previous)
nextBtn.addEventListener('click', next);

// ! Effects of clicking on the countries
let frenchGuiana = document.querySelectorAll('.fg');
let brazil = document.querySelectorAll('.bra');
let suriname = document.querySelectorAll('.s')
let guyana = document.querySelectorAll('.g')
let venezuela = document.querySelectorAll('.ven')
let ecuador = document.querySelectorAll('.e')
let colombia = document.querySelectorAll('.col')
let peru = document.querySelectorAll('.per')
let bolivia = document.querySelectorAll('.bo')
let chile = document.querySelectorAll('.ch')
let argentina = document.querySelectorAll('.arg')
let paraguay = document.querySelectorAll('.pa')
let uruguay = document.querySelectorAll('.u')

let countryVars = [brazil, frenchGuiana, guyana, suriname, peru, bolivia, argentina, chile, ecuador, paraguay, uruguay, colombia, venezuela]

countryVars.forEach((c) => {
    let cStr = countriesList[countryVars.indexOf(c)];
    c.forEach((e) => {
        e.addEventListener('click', () => {
            if (answer == cStr) {
                c.forEach((t) => {
                    if (t.classList.contains('night')) {
                        t.classList.add('guessed');
                    } else {
                        t.classList.add('guessed');
                    };
                });
                if (countries.includes(cStr)) {
                    countries.splice(countries.indexOf(cStr), 1)
                };
                i--;
                next();
            } else if (countries.includes(cStr)) {
                finish.classList.add('show');
            }
        })
    })
})