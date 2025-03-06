// Task 3
//Create website
//pure js css no framework

const btnLoad = document.querySelector("#btn-load");
const btnClear = document.querySelector("#btn-clear");
const inputQuantity = document.querySelector("#input-quantity");
const innerBody = document.querySelector("#body");
const loader = document.querySelector("#loader");

inputQuantity.addEventListener("focus", () => {
  inputQuantity.classList.remove("input-normal");
});

inputQuantity.addEventListener("blur", () => {
  inputQuantity.classList.add("input-normal");
});

const fetchData = async function () {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const result = await response.json();
  return result;
};

let htmls = "";

btnLoad.addEventListener("click", () => {
  loader.classList.add("loader");
  for (let i = 0; i < inputQuantity.value; i++) {
    fetchData()
      .then((data) => {
        if (data.status === "success") {
          htmls += `
        <div class="inner-card">
                <div class="inner-img">
                    <img src="${data.message}" alt="">
                </div>
            </div>
      `;
          loader.classList.remove("loader");
        }
        innerBody.innerHTML = htmls;
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }
});

btnClear.addEventListener("click", () => {
  htmls = "";
  innerBody.innerHTML = htmls;
});
