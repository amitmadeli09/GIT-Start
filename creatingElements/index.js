const div = document.getElementsByTagName("div");

const subHeading = document.createElement("h3");
subHeading.innerText="Buy high quality organic fruits online";
subHeading.style.fontStyle="italic";
div[0].appendChild(subHeading);

const secondDiv = div[1];
const fruits = document.querySelector(".fruits");
const para = document.createElement("p");
para.id="fruits-total";
para.innerText = "Total fruits: 4";
secondDiv.insertBefore(para, fruits);