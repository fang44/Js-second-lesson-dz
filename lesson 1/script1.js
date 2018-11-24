function MyFirstApp(name, age) {

    alert("Привет, меня зовут " + name + " и это моя первая прога");
    function showskills() {
        let skills = ["html", "css", "webdesign"];
        for (let i = 0; i < skills.length; i++) {
          document.body.innerHTML += "я владею " + skills[i] + "<br>";     
                
        }
    }

showskills();

function checkAge() {
    if (age < 18) {
        alert ("у тебя еще молоко на губах не обсохло");
    } else if (age >=18 && age <30) {
        alert ("заходи друг");
    } else {
        alert ("проваливай старик");
    }
} 
checkAge();

function calcPow(num) {
  console.log(num ** 2);
}

calcPow(4);
calcPow(5);
calcPow(6);
 
}
MyFirstApp("Alexander", 35);