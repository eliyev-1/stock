 let searchIcon = document.querySelector('.nav__search__icon')
 let searchInput = document.querySelector('.nav__search')
 let siteLeftHeader = document.querySelector('.site__left__header')
 let siteLeftHeaderList = document.querySelector('ul')

 searchIcon.onclick = function(){
searchInput.classList.toggle('active')
 }
 siteLeftHeader.onclick= function(){
    siteLeftHeaderList.classList.toggle('active')
    
 }
 function checkHandler(checkboxId) {
   let checkboxes = document.querySelectorAll('.site__right__license input[type="checkbox"]');
   
   checkboxes.forEach(function(checkbox) {
       if (checkbox.id !== checkboxId) {
           checkbox.checked = false;
       }
   });
}
let iconDetailBackground=document.querySelector('.icon__detail__background')
let iconBoxList = document.querySelectorAll('.icon__box')

iconBoxList.forEach((iconBox) => {
    iconBox.onclick = () => {
        iconDetailBackground.classList.toggle('icon__detail__background__active');
    }
});
document.getElementById('colorPicker').addEventListener('input', function(event) {
    var selectedColor = event.target.value;
    document.getElementById('myCircle').setAttribute('fill', selectedColor);
});



{/* <script>
        const colorPicker = document.getElementById('colorPicker');
        const downloadBtn = document.getElementById('downloadBtn');
        const svgContainer = document.getElementById('svgContainer');

        colorPicker.addEventListener('input', updateSvgColor);
        downloadBtn.addEventListener('click', downloadSvgAsPng);

        function updateSvgColor() {
            const selectedColor = colorPicker.value;
            svgContainer.querySelector('rect').setAttribute('fill', selectedColor);
        }

        function downloadSvgAsPng() {
            const svgContent = svgContainer.innerHTML;
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const image = new Image();

            image.onload = function () {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);

                const pngUrl = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = pngUrl;
                a.download = 'colored_svg.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            };

            image.src = url;
        }
    </script> */}