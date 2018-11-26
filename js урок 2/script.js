let input = document.getElementsByTagName('input')[0],
btn = document.getElementsByClassName('btn')[0],
first = document.querySelectorAll('div')[0],
second = document.querySelector('[data-test]'),
third = document.getElementsByName('red')[0];

input.addEventListener('input', function() {
    if (input.value != '') {
        btn.textContent = 'Нажми меня СРОЧНО';
    } else {
        btn.textContent = 'Нажми меня'; 
    }
   
});

btn.addEventListener('click', function () {
    first.classList.toggle('blue');
    
});

first.addEventListener('mouseenter', function () {
    first.style.width = "500px";
});

first.addEventListener('mouseleave', function () {
    first.style.width = "100px";
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        second.textContent = 'НИЧЕСЕ!!';
    } else if (event.keyCode == 39) {
        second.textContent = 'ВОТ ЭТО КРУТО!';
    }   
    });

    third.addEventListener('dblclick', function() {
        third.style.borderRadius = "50%";
        third.style.backgroundColor = "green";

        setTimeout(() => {
          input.value = "вы божественны!";      
        }, 1000);

        setTimeout(() => {
          third.style.borderRadius = "0";
          third.style.backgroundColor = "red";      
          }, 2000);

    })
