const popup = document.querySelector('.popup');
const editForm = document.querySelector('.popup__form');

// Кнопки и прочие дом узлы
const profileEditButton = document.querySelector('.profile__edit-button');
const modalCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// Данные форм
const nameInputValue = editForm.querySelector('.popup__input_type_name');
const descriptionInputValue = editForm.querySelector('.popup__input_type_description');

// Реализация "в лоб".
// function openPopup() {
//     nameInputValue.value = profileName.textContent;
//     descriptionInputValue.value = profileDescription.textContent;
//     popup.classList.add('popup_opened');
// }

// function closePopup() {
//     profileName.textContent = nameInputValue.value;
//     profileDescription.textContent = descriptionInputValue.value;
//     popup.classList.remove('popup_opened');
// }

function popupToggler() {
    if (!popup.classList.contains('popup_opened')) {
        nameInputValue.value = profileName.textContent;
        descriptionInputValue.value = profileDescription.textContent;   
    }

    popup.classList.toggle('popup_opened');    
}

function popupSubmit(e) {
    e.preventDefault();

    profileName.textContent = nameInputValue.value;
    profileDescription.textContent = descriptionInputValue.value;

    popupToggler()
}

editForm.addEventListener('submit', popupSubmit);
profileEditButton.addEventListener('click', popupToggler);
modalCloseButton.addEventListener('click', popupToggler);