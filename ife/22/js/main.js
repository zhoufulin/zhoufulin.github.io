(function () {
    var addEventHandler = function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    };

    var btn = document.querySelectorAll('input'),
        root = document.querySelector('.root'),
        divList = [],
        timer = null;

    var reorder = {
        preOrder : function (node) {
            if (!(node == null)) {
                divList.push(node);
                this.preOrder(node.firstElementChild);
                this.preOrder(node.lastElementChild);
            }
        },
        inOrder : function (node) {
            if (!(node == null)) {
                this.inOrder(node.firstElementChild);
                divList.push(node);
                this.inOrder(node.lastElementChild);
            }
        },
        postOrder : function (node) {
            if (!(node == null)) {
                divList.push(node);
                this.postOrder(node.firstElementChild);
                this.postOrder(node.lastElementChild);
            }
        }
    };

    var changeColor = function () {
        var i = 0;
        divList[i].style.backgroundColor = 'blue';
        timer = setInterval(function () {
            i++;
            if (i < divList.length) {
                divList[i-1].style.backgroundColor = '#fff';
                divList[i].style.backgroundColor = 'blue';
            } else {
                clearInterval(timer);
                divList[divList.length-1].style.backgroundColor = '#fff';
            }
        }, 500);
    };
    
    var reset = function () {
        divList = [];
        clearInterval(timer);
        var divs = document.querySelectorAll('div');
        divs.forEach(function (item,index,array) {
            item.style.backgroundColor = '#fff';
        })
    };


    btn.forEach(function (item, index, array) {
        addEventHandler(item, 'click', function () {
            reset();
            if (index == 0) {
                reorder.postOrder(root);
            } else if (index == 1) {
                reorder.inOrder(root);
            } else {
                reorder.postOrder(root);
            }
            changeColor();
        })
    })
})();