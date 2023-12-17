let searchIcon = document.querySelector(".nav__search__icon");
let searchInput = document.querySelector(".nav__search");
let siteLeftHeader = document.querySelector(".site__left__header");
let siteLeftHeaderList = document.querySelector("ul");
let svgCodes = document.querySelector(".svg__format__codes__tittle p");
let rect = document.querySelector("rect");
let g = document.querySelector("g");
let iconColorPicker = document.querySelector(".icon__color__picker");
let iconColorCheckboxes = document.querySelectorAll(
  '.icon__color__radio input[type="radio"]'
)

let bgColorPicker = document.querySelector(".background__color__picker");
let backgroundDisabledCheckbox = document.querySelector(
  ".background__disabled__checkbox"
);
let borderRadiusRange = document.querySelector(".border__radius__range");
let borderRadiusRangeInput = document.querySelector(
  ".border__radius__range__input"
);
let iconBgColorRadio__box = document.querySelector(".icon__bg__color__radio");
let iconBgColorRadio = document.querySelectorAll(
  '.icon__bg__color__radio input[type="radio"]'
);

searchIcon.onclick = function () {
  searchInput.classList.toggle("active");
};
siteLeftHeader.onclick = function () {
  siteLeftHeaderList.classList.toggle("active");
};

function checkHandler(checkboxId) {
  let checkboxes = document.querySelectorAll(
    '.site__right__license input[type="checkbox"]'
  );

  checkboxes.forEach(function (checkbox) {
    if (checkbox.id !== checkboxId) {
      checkbox.checked = false;
    }
  });
}

let iconDetailBackground = document.querySelector(".icon__detail__background");
let iconDetailExit = document.querySelector(".icon__detail__exit");

let iconBoxList = document.querySelectorAll(".icon__box");

iconBoxList.forEach((iconBox) => {
  iconBox.onclick = () => {
    iconDetailBackground.classList.add("icon__detail__background__active");
  };
});
iconDetailExit.onclick = () => {
  iconDetailBackground.classList.remove("icon__detail__background__active");
};
iconColorPicker.oninput = () => {
  g.setAttribute("fill", iconColorPicker.value);
};

iconColorCheckboxes.forEach((item) => {
  item.onchange = () => {
    g.setAttribute("fill", item.value);
  };
});
iconBgColorRadio.forEach((item) => {
  item.disabled = true;
});
backgroundDisabledCheckbox.oninput = () => {
  if (backgroundDisabledCheckbox.checked) {
    bgColorPicker.oninput = () => {
      rect.setAttribute("fill", bgColorPicker.value);
    };
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", "black");
    g.setAttribute("fill", "white");
    borderRadiusRange.oninput = () => {
      rect.setAttribute("rx", borderRadiusRange.value + "%");
      borderRadiusRangeInput.value = borderRadiusRange.value;
    };
    borderRadiusRangeInput.oninput = () => {
      rect.setAttribute("rx", borderRadiusRangeInput.value + "%");
      borderRadiusRange.value = borderRadiusRangeInput.value;
      if (borderRadiusRangeInput.value === "") {
        borderRadiusRange.value = 0;
      }
    };

    bgColorPicker.disabled = false;
    bgColorPicker.style.opacity = 1;
    borderRadiusRange.disabled = false;
    borderRadiusRangeInput.disabled = false;
    borderRadiusRangeInput.style.opacity = 1;
    iconBgColorRadio__box.style.opacity = 1;
    
    iconBgColorRadio.forEach((item) => {
      item.disabled = false;
      item.onchange = () => {
        rect.setAttribute("fill", item.value);
      };
      
    })
    
  } else {
    rect.setAttribute("width", "0");
    rect.setAttribute("height", "0");
    rect.setAttribute("fill", "transparent");
    g.setAttribute("fill", "black");
    bgColorPicker.disabled = true;
    bgColorPicker.style.opacity = 0.5;
    iconBgColorRadio__box.style.opacity = 0.5;
    borderRadiusRangeInput.style.opacity = 0.5;

    borderRadiusRange.disabled = true;
    borderRadiusRangeInput.disabled = true;

    iconBgColorRadio.forEach((item) => {
      item.disabled = true;
      item.checked = false;
    });
  }
};

let svgFormatCodes = document.querySelector('.icon__detail__right__svg__format__codes');
let pngFormatSizes = document.querySelector('.icon__detail__right__png__format__sizes');
let formatNames = document.querySelectorAll('.icon__detail__right__format__names input[type="radio"]');
svgFormatCodes.style.display = "none";
formatNames.forEach((item) => {
  item.onchange = () => {
    if (item.checked) {
      if (item.id === 'png') {
        pngFormatSizes.style.display = "flex";
        svgFormatCodes.style.display = "none";
      } else if (item.id === 'svg') {
        pngFormatSizes.style.display = "none";
        svgFormatCodes.style.display = "block";
      }
    }
  };
});
