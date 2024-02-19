let iconBoxes = document.querySelectorAll(".icon__box");
let iconLeftSettings = document.querySelector('.icon__box__left__settings')
let iconBoxRight = document.querySelector('.icon__box__right')

iconBoxes.forEach((clickedBox) => {

  clickedBox.onclick = () => {

    clickedBox.classList.add("icon__box__active");
    iconLeftSettings.classList.add("icon__box__left__settings__active");
    iconBoxRight.classList.add("icon__box__right__active");
   


    let otherBoxes = Array.from(iconBoxes).filter((box) => box !== clickedBox);

    otherBoxes.forEach((otherBox) => {
      otherBox.classList.remove("icon__box__active");

      let otherIcons = otherBox.querySelectorAll(".icon");
      otherIcons.forEach((otherIcon) => {
        otherIcon.classList.remove("icon__active");
      });
    });

    let relatedIcons = clickedBox.querySelectorAll(".icon:not(:target)");

    relatedIcons.forEach((iconItem) => {
      iconItem.classList.add("icon__active");
    });
  };
});

let registerLink = document.querySelector(".nav__register__link");
let profileName = document.querySelector(".profile__name");
let profileNameTittle = document.querySelector(".profile__name h3");
let storedFormData = localStorage.getItem("signUpData");
let changeName = document.getElementById("change__name");
let changeSurName = document.getElementById("change__surName");
let changeMail = document.getElementById("change__mail");
profileName.style.display = "none";

function loadFormData() {
  if (storedFormData) {
    let formData = JSON.parse(storedFormData);

    profileNameTittle.innerText = formData.nameValue;
    registerLink.style.display = "none";
    profileName.style.display = "flex";
    changeName.placeholder = formData.nameValue;
    changeSurName.placeholder = formData.surNameValue;
    changeMail.placeholder = formData.nameValue;
  }
}

let accountExit = document.querySelector(".account__exit");
let profileList = document.querySelector(".profile__list");
profileName.onclick = () => {
  profileList.classList.toggle("profile__list__active");
};

accountExit.onclick = () => {
  localStorage.removeItem("signUpData");
  registerLink.style.display = "block";
  profileName.style.display = "none";
  profileList.classList.toggle("profile__list__active");
  window.location.href = "index.html";
};

let searchIcon = document.querySelector(".nav__search__icon");
let searchInput = document.querySelector(".nav__search");
searchIcon.onclick = function () {
  searchInput.classList.toggle("active");
};
