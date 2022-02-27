// tady je místo pro náš program


let salary = 40000;
let personName = "Matěj";


if (salary > 40000 && personName === "Matěj") {
  console.log("Pěkný plat!")
} else if (salary > 25000) {
  console.log("OK");
} else {
  console.log("Jdi za šéfem a nech si přidat!")
}

if (!(salary > 40000 || personName === "Matěj")) { //prefixuji negací => takže false!
  console.log("Pěkný plat!")
} else if (salary > 25000) {
  console.log("OK");
} else {
  console.log("Jdi za šéfem a nech si přidat!")
}




function hazej() {
  let cislo = Math.floor(Math.random() * 6 + 1);
  let zprava = document.getElementById("zprava");
  let kostka = document.getElementById("kostka");
/*   if (cislo === 1) {
    zprava.textContent = "Hodil jsi 1. Zkus to znovu.";
    kostka.src = "obrazky/1.png";
  } else if (cislo === 2) {
    zprava.textContent = "Hodil jsi 2. Zkus to znovu.";
    kostka.src = "obrazky/2.png";
  } else if (cislo === 3) {
    zprava.textContent = "Hodil jsi 3. Zkus to znovu.";
    kostka.src = "obrazky/3.png";
  } else if (cislo === 4) {
    zprava.textContent = "Hodil jsi 4. Zkus to znovu.";
    kostka.src = "obrazky/4.png";
  } else if (cislo === 5) {
    zprava.textContent = "Hodil jsi 5. Zkus to znovu.";
    kostka.src = "obrazky/5.png";
  } else {
    zprava.textContent = "Hodil jsi 6!!! Vyhrál jsi!";
    kostka.src = "obrazky/6.png";
  }  */

  if (cislo === 6) {
    zprava.textContent = "Hodil jsi 6!!! Vyhrál jsi!";
  } else {
    zprava.textContent = "Hodil jsi " + cislo + ". Zkus to znovu.";
  }
  if (cislo > 0 && cislo < 7) {
    kostka.src = "obrazky/" + cislo + ".png";
  } else {
    console.log("Stala se chyba.");
  }
}

