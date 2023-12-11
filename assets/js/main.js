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
let rect = document.getElementById('rect')
let iconDetailBackground = document.querySelector('.icon__detail__background')
let iconDetailExit = document.querySelector('.icon__detail__exit')

let iconBoxList = document.querySelectorAll(".icon__box");

iconBoxList.forEach((iconBox) => {
  iconBox.onclick = () => {
    iconDetailBackground.classList.add("icon__detail__background__active");
  };
});
iconDetailExit.onclick = () => {
    iconDetailBackground.classList.remove('icon__detail__background__active');

}
let iconColorPicker =document.getElementById('iconColorPicker')
iconColorPicker.oninput=(event)=>{
    var selectedColor = event.target.value;
    document.getElementById('myCircle').setAttribute('fill', selectedColor);

}
let backgroundColorCheckbox = document.querySelector('.background__color__checkBox')

let backgroundColorPicker =document.getElementById('backgroundColorPicker')
backgroundColorCheckbox.onchange=()=>{
    if(backgroundColorCheckbox.checked){
        backgroundColorPicker.disabled=false
        backgroundColorPicker.style.opacity="1"
        
        backgroundColorPicker.oninput=(event)=>{
            var selectedColor = event.target.value;
            rect.setAttribute('fill', selectedColor);
        
        }
        
    }
    

}

let borderRadiusRangeInput = document.querySelector('.border__radius__range__input')
rect.rx=borderRadiusRangeInput.value

document.getElementById('downloadButton').addEventListener('click', function() {
  var svgContainer = document.getElementById('svgContainer');
  var svgContent = new XMLSerializer().serializeToString(svgContainer.firstChild);
  var svgContent = svgContainer.innerHTML;

  // Canvas oluştur
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = svgContainer.clientWidth;
  canvas.height = svgContainer.clientHeight;

  // SVG içeriğini canvas üzerine çiz
  var img = new Image();
  img.onload = function() {
    context.drawImage(img, 0, 0);
    // Canvas içeriğini PNG olarak indir
    var url = canvas.toDataURL('image/png');
    var a = document.createElement('a');
    a.href = url;
    a.download = 'image.png';
    a.click();
  };
  img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgContent)));
});

