let searchIcon = document.querySelector(".nav__search__icon");
let searchInput = document.querySelector(".nav__search");
let siteLeftHeader = document.querySelector(".site__left__header");
let siteLeftHeaderList = document.querySelector("ul");

searchIcon.onclick = function () {
  searchInput.classList.toggle("active");
};
siteLeftHeader.onclick = function () {
  siteLeftHeaderList.classList.toggle("active");
};
let rect = document.getElementById("rect");
let downloadSizes = document.querySelector('.download__sizes');
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
let iconColorPicker = document.getElementById("iconColorPicker");
let svgIcon = document.getElementById("svgIcon");
iconColorPicker.oninput = (event) => {
  var selectedColor = event.target.value;
  svgIcon.setAttribute("fill", selectedColor);
};
let backgroundColorCheckbox = document.querySelector(
  ".background__color__checkBox"
);

let backgroundColorPicker = document.getElementById("backgroundColorPicker");
backgroundColorCheckbox.onchange = () => {
  if (backgroundColorCheckbox.checked) {
   
    rect.setAttribute("fill", "black");
    svgIcon.setAttribute("fill", "white");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");

    backgroundColorPicker.disabled = false;
    backgroundColorPicker.style.opacity = "1";

    backgroundColorPicker.oninput = (event) => {
      var selectedColor = event.target.value;
      rect.setAttribute("fill", selectedColor);
    };
  } else {
    rect.setAttribute("fill", "transparent");
    rect.setAttribute("width", "0%");
    rect.setAttribute("height", "0%");
    backgroundColorPicker.disabled = true;
    backgroundColorPicker.style.opacity = "0.3";
    svgIcon.setAttribute("fill", "black");
  }
};

let borderRadiusRange = document.querySelector(".border__radius__range");
let borderRadiusRangeInput = document.querySelector(
  ".border__radius__range__input"
);

borderRadiusRange.oninput = () => {
  rect.setAttribute("rx", borderRadiusRange.value + "%");
};
borderRadiusRangeInput.onkeypress = (e) => {
  if (e.key === "Enter") {
    borderRadiusRange.value = borderRadiusRangeInput.value;
    rect.setAttribute("rx", borderRadiusRange.value + "%");
  }
};
borderRadiusRange.onchange = () => {
  borderRadiusRangeInput.value = borderRadiusRange.value;
};
document.getElementById("downloadButton").addEventListener("click", function () {
  // Canvas oluştur
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = svgContainer.clientWidth;
  canvas.height = svgContainer.clientHeight;

  // SVG içeriğini canvas üzerine çiz
  var img = new Image();
  img.onload = function () {
    context.drawImage(img, 0, 0);
    // Canvas içeriğini PNG olarak indir
    var url = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = url;
    a.download = "image.png";
    a.click();
  };
  
  // Log SVG content for debugging
  console.log("SVG Content:", svgContent);

  img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgContent)));
});
