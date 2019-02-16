'use strict';

(function () {
    var itemInput = document.querySelector('#todo');
    var list = document.querySelector('.todo-main__list');

    var checkLocalStorage = function () {
        if (localStorage.getItem('key')) {
            return JSON.parse(localStorage.getItem('key'))
        } else {
            return []
        }
    };

    var todoArray = checkLocalStorage();


    var generateNewRow = function (item) {
        var templateItem = document.querySelector('#todo-section');
        var row = document.importNode(templateItem.content, true);
        var itemRow = row.querySelector('.new-row');
        var itemText = row.querySelector('.new-row__text');

        itemText.textContent = item.text;
        list.appendChild(itemRow);

    };

    var addButton = document.querySelector('#new-item');
    addButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        var newTodo = {
            text: itemInput.value
        };
        generateNewRow(newTodo);
        itemInput.value = '';
        todoArray.push(newTodo);
        localStorage.setItem('key', JSON.stringify(todoArray));
    });

    todoArray.forEach(function (item) {
        generateNewRow(item);
    });

    // var closeButton = row.querySelector('.todo-input__delete');
    // closeButton.addEventListener('click', function(evt) {
    //     var templateItem = document.querySelector('#todo-section');
    //     var row = document.importNode(templateItem.content, true);
    //     var itemRow = row.querySelector('.new-row');
    //     evt.preventDefault();
    //     list.removeChild(itemRow);
    // })

})();