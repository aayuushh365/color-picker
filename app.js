const colours = ["green", "red", "hex(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");
btn.addEventListener("click", function () {
  // get random number between 0 and 3
  const randomnumber = getrandomnumber();
  console.log(randomnumber);
  document.body.style.backgroundColor = colours[randomnumber];
  colour.textContent = colours[randomnumber];
});

const getrandomnumber = () => {
  return Math.floor(Math.random() * colours.length);
};
