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

    var a = [];
    var input_text = document.getElementById('input_text');
    var left_in = document.getElementById('left_in');
    var right_in = document.getElementById('right_in');
    var left_out = document.getElementById('left_out');
    var right_out = document.getElementById('right_out');

    var render = function () {
        var renderWrap = document.getElementById('renderWrap');
        renderWrap.innerHTML = '';
        a.forEach(function (item, index, array) {
            var row = document.createElement('span');
            row.innerHTML = a[index];
            row.style = "background: red; margin-right: 10px;";
            renderWrap.appendChild(row);
        })
    };

    addEventHandler(left_in, 'click', function () {
        var input_text = document.getElementById('input_text');
        var v = input_text.value;
        a.unshift(v);
        render();
    });

    addEventHandler(right_in, 'click', function () {
        var input_text = document.getElementById('input_text');
        var v = input_text.value;
        a.push(v);
        render();
    });

    addEventHandler(left_out, 'click', function () {
        var b = a.shift();
        render();
        alert(b);
    });

    addEventHandler(right_out, 'click', function () {
        var b = a.pop();
        render();
        alert(b);
    });
})();