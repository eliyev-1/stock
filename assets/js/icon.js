let iconBox = document.querySelector('.icon__box');
iconBox.onsubmit=(e)=>{
 return e.preventDefault()

}
// document.getElementById('myForm').addEventListener('submit', function(e) {
//   e.preventDefault(); // Formun normal submit işlemini engelle
let iconColorInputs = document.querySelectorAll(
  '.icon__color__radio  input[type="radio"]'
);
iconColorInputs.forEach((item) => {
  item.onchange = () => {
    g.setAttribute("fill", item.value);
  };
});
let iconColorPicker = document.querySelector(".icon__color__picker");
let g = document.querySelector("g");
iconColorPicker.oninput = () => {
  g.setAttribute("fill", iconColorPicker.value);
};
let rect = document.querySelector("rect");
let iconBgCheckbox = document.getElementById("iconBgDisabled");
let iconBgColorPicker = document.querySelector(".icon__bg__color__picker");
let iconBgColorInputs = document.querySelectorAll(
  '.icon__bg__color__radio  input[type="radio"]'
);
let iconBgColorInputs__box = document.querySelector(".icon__bg__color__radio");
let borderRadiusRangeInput = document.querySelector(".border__radius__range");
let borderRadiusNumberInput = document.querySelector(".border__radius__number");
let bgRangeInputs = document.querySelector(".icon__bg__range__inputs");

iconBgColorInputs.forEach((item) => {
  item.disabled = true;
});
iconBgCheckbox.oninput = () => {
  if (iconBgCheckbox.checked) {
    iconBgColorPicker.oninput = () => {
      rect.setAttribute("fill", iconBgColorPicker.value);
    };
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", "black");
    g.setAttribute("fill", "white");
    iconBgColorPicker.disabled = false;
    iconBgColorPicker.style.opacity = 1;
    iconBgColorInputs.forEach((item) => {
      item.disabled = false;
    });
    iconBgColorInputs.forEach((item) => {
      item.onchange = () => {
        rect.setAttribute("fill", item.value);
      };
    });
    iconBgColorPicker.disabled = false;
    iconBgColorInputs__box.style.opacity = 1;
    bgRangeInputs.style.opacity = 1;
    borderRadiusRangeInput.oninput = () => {
      rect.setAttribute("rx", borderRadiusRangeInput.value + "%");
      borderRadiusNumberInput.value = borderRadiusRangeInput.value;
    };
    borderRadiusNumberInput.oninput = () => {
      rect.setAttribute("rx", borderRadiusNumberInput.value + "%");
      borderRadiusRangeInput.value = borderRadiusNumberInput.value;
      if (borderRadiusNumberInput.value === "") {
        borderRadiusRange.value = 0;
      }
    };
  } else {
    rect.setAttribute("width", "0");
    rect.setAttribute("height", "0");
    rect.setAttribute("fill", "transparent");
    g.setAttribute("fill", "black");
    iconBgColorPicker.style.opacity = "0.5";
    iconBgColorInputs__box.style.opacity = "0.5";
    bgRangeInputs.style.opacity = "0.5";
    iconBgColorPicker.disabled = true;
    iconBgColorInputs.forEach((item) => {
      item.disabled = true;
      item.checked = false;
    });
  }
};

let svgFormatCodes = document.querySelector('.icon__svg__codes');
let pngFormatSizes = document.querySelector('.icon__png__size');
let formatNames = document.querySelectorAll('.icon__format input[type="radio"]');
svgFormatCodes.style.display = "none";
formatNames.forEach((item) => {
  item.onchange = () => {
    if (item.checked) {
      if (item.id === 'png') {
        pngFormatSizes.style.display = "block";
        svgFormatCodes.style.display = "none";
      } else if (item.id === 'svg') {
        pngFormatSizes.style.display = "none";
        svgFormatCodes.style.display = "block";
      }
    }
  };
});



  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'indir.php', true);
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // xhr.onreadystatechan = function() {
  //     if (xhr.readyState == 4 && xhr.status == 200) {
  //         var response = JSON.parse(xhr.responseText);


  //         var downloadLink = document.createElement('a');
  //         downloadLink.href = response.fileUrl;
  //         downloadLink.download = response.fileName;
  //         document.body.appendChild(downloadLink);
  //         downloadLink.click();
  //         document.body.removeChild(downloadLink);
  //     }
  // };

  // Form verilerini alın ve gönderin
//   var formData = new FormData(document.getElementById('myForm'));
//   xhr.send(new URLSearchParams(formData));
// });


document.addEventListener('DOMContentLoaded', function () {
  let downloadButton = document.querySelector('.icon__download__btn button');
  downloadButton.addEventListener('click', function () {
    downloadSvg();
  });
});
let svgContent = document.getElementById('mySvg')
function downloadSvg() {
 
 
  let blob = new Blob([svgContent.outerHTML], { type: 'image/svg+xml' });
  let url = window.URL.createObjectURL(blob);

  let a = document.createElement('a');
  a.href = url;
  a.download = 'your_icon_name.svg'; // Change this to the desired file name
  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
let iconSvgCodesTittles = document.querySelector('.icon__svg__codes__tittle')
iconSvgCodesTittles.textContent = svgContent.outerHTML
