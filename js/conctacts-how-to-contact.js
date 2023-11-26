(function () {
    const headerContactsItems = document.querySelectorAll('.header__contacts-items');

    headerContactsItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#f2f2f2';
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
        });
    });
})();