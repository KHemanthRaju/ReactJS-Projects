const adviceId = document.querySelector(".adviceId");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector(".btn");

async function getAdvice() {
  await fetch("	https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceNum = data.slip.id;
      const advice = data.slip.advice;
      adviceId.textContent = adviceNum;
      adviceText.innerHTML = `<p>${advice}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
console.log("Happy");
console.log("Wait");
btn.addEventListener("click", getAdvice);

window.onload = () => {
  getAdvice();
};
