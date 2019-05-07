$('document').ready(function () {
    $.fn.multiSelectInit = function() {
        let itemsArray = [
            {
                id: 1,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 2,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 3,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 4,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 5,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 6,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 7,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 8,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 9,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 10,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 11,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 12,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 13,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 14,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 15,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 16,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 17,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 18,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 19,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 20,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 21,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 22,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 23,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 24,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 25,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 26,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 27,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 28,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 29,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 30,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 31,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 32,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 33,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 34,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 35,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 36,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 37,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 38,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 39,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 40,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 41,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 42,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 43,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 44,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 45,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 46,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 47,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 48,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            },
            {
                id: 49,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 50,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 51,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            },
            {
                id: 52,
                img_url: 'src/img/logo3.jpg',
                name: 'Nike'
            }
        ];
        let selectedItemsArray = [
            {
                id: 1,
                img_url: 'src/img/ndsu.png',
                name: 'text'
            },
            {
                id: 2,
                img_url: 'src/img/logo1.jpg',
                name: 'New Balance'
            },
            {
                id: 3,
                img_url: 'src/img/logo2.jpg',
                name: 'Adidas'
            }
        ];
        let itemsOptions = {
            limit: 20,
            total: itemsArray.length,
            offset: 0
        };

        let dataOptions = {
            data: itemsArray,
            selectedItems: selectedItemsArray,
            lazyLoad: false,
            limit: itemsOptions.limit
        };

        let cycleLength;
        dataOptions.lazyLoad ? cycleLength = itemsOptions.limit <= itemsOptions.total ? itemsOptions.limit : itemsOptions.total : cycleLength = itemsOptions.total;

        getItemsList(itemsArray, itemsOptions.offset, cycleLength);
        generateSelectedItemsList(selectedItemsArray);

        $('.js-dropdown-toggle-btn').on('click', function () {
            $(this).closest('.js-multiselect-group').toggleClass('active');
        });

        $('.js-list-item').on('click', function () {
            let currentItem = {
                id: $(this).attr('data-id'),
                img_url: $(this).find('.js-list-item-img').attr('src'),
                name: $(this).find('.js-list-item-text').text()
            };
            let selectedExistedItem = $(`.js-selected-list-item[data-id="${currentItem.id}"]`);

            $(this).hasClass('active') ? deleteFromSelectedList(selectedExistedItem, currentItem.id, selectedItemsArray) : addToSelectedList(currentItem, selectedItemsArray);
            $(this).toggleClass('active');
        });

        if (cycleLength !== itemsOptions.total) {
            let lastScrollTop = 0;

            $('.js-items-list').on('scroll', function () {
                let scrollTop = $(this).scrollTop();
                if (scrollTop > lastScrollTop && scrollTop + $(this).innerHeight() >= this.scrollHeight) {
                    if (itemsOptions.offset !== itemsOptions.total) {
                        itemsOptions.offset += cycleLength;
                        cycleLength = itemsOptions.limit <= itemsOptions.total - itemsOptions.offset ? itemsOptions.limit : itemsOptions.total - itemsOptions.offset;
                        getItemsList(itemsArray, itemsOptions.offset, cycleLength + itemsOptions.offset);
                    }
                }
                lastScrollTop = scrollTop;
            });
        }

        function getItemsList(items, offset, iterationCount) {
            for(let i = offset; i < iterationCount; i++) {
                let currentItem = items[i];
                $('.js-items-list').append(`<div class="list-grp js-list-item" data-id="${currentItem.id}">
                                    <div class="pure-checkbox">
                                        <div class="pure-checkbox-content position-relative">
                                            <img class="js-list-item-img" src="${currentItem.img_url}">
                                            <label class="js-list-item-text">${currentItem.name}</label>
                                            <div class="item-check">
                                                <i class="fa fa-check"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>`);
            }
        }

        function generateSelectedItemsList(items) {
            for(let i = 0; i < items.length; i++) {
                let currentItem = items[i];
                $('.js-selected-list').append(`<div class="c-token d-flex justify-content-between js-selected-list-item" data-id="${currentItem.id}">
                                          <span class="c-label align-self-center">
                                              <img class="js-selected-list-item-img" src="${currentItem.img_url}">
                                              <label class="js-selected-list-item-text">${currentItem.name}</label>
                                          </span>
                                          <span class="c-remove align-self-center">
                                              <i class="fas fa-times"></i>
                                          </span>
                                        </div>`);
                $(`.js-list-item[data-id="${currentItem.id}"]`).addClass('active');
            }
        }

        function addToSelectedList(item, itemsArr) {
            $('.js-selected-list').append(`<div class="c-token d-flex justify-content-between js-selected-list-item" data-id="${item.id}">
                                          <span class="c-label align-self-center">
                                              <img class="js-selected-list-item-img" src="${item.img_url}">
                                              <label class="js-selected-list-item-text">${item.name}</label>
                                          </span>
                                          <span class="c-remove align-self-center">
                                              <i class="fas fa-times"></i>
                                          </span>
                                        </div>`);
            itemsArr.push(item);
        }

        function deleteFromSelectedList(item, itemID, itemsArr) {
            item.remove();
            itemsArr.splice(itemsArr.findIndex(item => item.id === itemID), 1);
        }
    };
    $.fn.multiSelectInit();
});
