document.addEventListener("DOMContentLoaded", () => {
  const chooseContainer = document.querySelector(".first-section");

  const advantageSection = document.createElement("section");
  advantageSection.classList.add("advantage");

  const advantageWrap = document.createElement("div");
  advantageWrap.classList.add("advantage__wrap");
  advantageSection.appendChild(advantageWrap);

  const advantageTitleWrap = document.createElement("div");
  advantageTitleWrap.classList.add("advantage__title-wrap");
  const advantageImgWrap = document.createElement("div");
  advantageImgWrap.classList.add("advantage__img-wrap");
  advantageWrap.appendChild(advantageTitleWrap);
  advantageWrap.appendChild(advantageImgWrap);

  const advantageTitle = document.createElement("h2");
  advantageTitle.classList.add("advantage__title");
  advantageTitle.textContent =
    "9/10 REM-Fit sleepers say they have less back pain after sleeping on our mattresses*";
  const advantageSubtitle = document.createElement("p");
  advantageSubtitle.classList.add("advantage__subtitle");
  advantageSubtitle.textContent =
    "*Based on 1000+ customer reviews on Trustpilot in 2020";
  advantageTitleWrap.appendChild(advantageTitle);
  advantageTitleWrap.appendChild(advantageSubtitle);

  const advantageImg = document.createElement("img");
  advantageImg.classList.add("advantage__image");
  advantageImg.src = "https://i.imgur.com/ImQy6Kc.jpg";

  advantageImgWrap.appendChild(advantageImg);
  chooseContainer.insertAdjacentElement("afterEnd", advantageSection);
});