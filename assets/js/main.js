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