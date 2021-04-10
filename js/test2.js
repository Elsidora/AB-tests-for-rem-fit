document.addEventListener("DOMContentLoaded", () => {
  const photoContainer = document.querySelector(".advantage"); // catalog-product-view .fotorama
  const mapParagraphs = [
    {
      title: "Zoned Support",
      prefix: " Max",
      text:
        "Continuous ergonomic zones with patented gel pods help give you perfect spinal alignment.",
    },
    {
      title: "AirScape",
      prefix: " 3",
      text:
        "Thousands of perforations in 3 layers and a cool-to-the-touch gel keep you cool.",
    },
  ];
  const qualitySection = document.createElement("section");
  qualitySection.classList.add("quality");

  const qualityWrap = document.createElement("div");
  qualityWrap.classList.add("quality__wrap");

  const qualityParagraph = document.createElement("p");
  qualityParagraph.classList.add("quality__paragraph");
  qualityParagraph.textContent =
    "Our best mattress for back pain gives you less aching, more sleeping.";

  const qualityInner = document.createElement("div");
  qualityInner.classList.add("quality__inner");

  mapParagraphs.forEach(({ title, prefix, text }) => {
    const qualityInfo = document.createElement("div");
    qualityInfo.classList.add("quality__info");

    const qualityInfoTitle = document.createElement("h3");
    qualityInfoTitle.classList.add("quality__title");
    const qualityMark = document.createElement("sup");
    qualityMark.classList.add("quality__mark");
    qualityMark.textContent = "TM";

    const qualitySpan = document.createElement("span");
    qualitySpan.classList.add("quality__span");
    qualitySpan.textContent = prefix;
    prefix === " Max"
      ? (qualitySpan.style.color = "red")
      : (qualitySpan.style.color = "green");
    qualityInfoTitle.appendChild(document.createTextNode(title));
    qualityInfoTitle.appendChild(qualityMark);
    qualityInfoTitle.appendChild(qualitySpan);

    const qualitySubparagraph = document.createElement("p");
    qualitySubparagraph.classList.add("quality__subparagraph");
    qualitySubparagraph.textContent = text;

    qualityInfo.appendChild(qualityInfoTitle);
    qualityInfo.appendChild(qualitySubparagraph);

    qualityInner.appendChild(qualityInfo);
  });

  qualityWrap.appendChild(qualityParagraph);
  qualityWrap.appendChild(qualityInner);

  qualitySection.appendChild(qualityWrap);

  photoContainer.insertAdjacentElement("afterEnd", qualitySection);
});
