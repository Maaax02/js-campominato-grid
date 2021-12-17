function first(element, n){
    let scatola = document.createElement('div');
    scatola.className = 'box';
    scatola.innerHTML = n;
    element.append(scatola);  
    scatola.addEventListener('click', function(){
        this.classList.toggle('teal');
    })
}

button1 = document.querySelector('.mode-1');
button2 = document.querySelector('.mode-2');
button3 = document.querySelector('.mode-3');

container1 = document.querySelector('.container-1');
container2 = document.querySelector('.container-2');
container3 = document.querySelector('.container-3');


for (x = 1; x <= 100; x++){
    first(container1, x);  
}

button1.addEventListener('click', function(){
    container1.style.display = 'flex';
    container2.style.display = 'none';
    container3.style.display = 'none';
})

for (x = 1; x <= 81; x++){
    first(container2, x);  
}

button2.addEventListener('click', function(){
    container1.style.display = 'none';
    container2.style.display = 'flex';
    container3.style.display = 'none';
})

for (x = 1; x <= 49; x++){
    first(container3, x);  
}


button3.addEventListener('click', function(){
    container3.style.display = 'flex';
    container1.style.display = 'none';
    container2.style.display = 'none';
})