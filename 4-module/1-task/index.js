'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList (friends) {
    let ul = document.createElement('ul');

    friends.map((item) => {
        let li = document.createElement('li');
        li.innerHTML = `${item.firstName} ${item.lastName}`;
        ul.appendChild(li);
    });

    return ul;
}
