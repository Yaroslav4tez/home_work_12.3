/*Створіть HTML-сторінку, яка містить список завдань (to-do list) 
з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій,
 створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

Покроковий план:

1. Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
2. Додайте обробник подій до списку завдань ul, використовуючи делегування.
3. При кліку на будь-якій кнопці видалення, видаліть цей пункт.
4. Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.*/

const container = document.getElementById("container");
const more_task = document.getElementById("more_task");
let input_info = document.getElementById("input_info");




container.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const li = event.target.closest('li');
        li.parentNode.removeChild(li);
    }
});

more_task.addEventListener("click", function (event) {
    if (event.target === clik_more_task) {
        if (input_info.value.trim() === "") {
            alert("you dont have new task")
            return
        }
    }

    if (event.target.tagName === "BUTTON") {
        const newLi = document.createElement('li');        
        newLi.textContent = input_info.value;

        const newButton = document.createElement('button');
        newButton.textContent = "clean";
        newLi.appendChild(newButton);

        container.appendChild(newLi);
        input_info.value = '';
    } 
});