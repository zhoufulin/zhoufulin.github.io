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
    var sort = document.getElementById('sort');

    var render = function () {
        var renderWrap = document.getElementById('renderWrap');
        renderWrap.innerHTML = '';
        a.forEach(function (item, index, array) {
            var row = document.createElement('span');
            row.style = "height: " + a[index]*4 + "px";
            renderWrap.appendChild(row);
        })
    };
    
    var limit = function (v) {
        if (v < 10 || v > 100) {
            alert(不能小于10或者大于100);
            return;
        }
        if (a.length > 60) {
            alert("输入的值的个数超过60个了！");
            return;
        }
    };

    addEventHandler(left_in, 'click', function () {
        var input_text = document.getElementById('input_text');
        var v = input_text.value;
        limit(v);
        a.unshift(v);
        render();
    });

    addEventHandler(right_in, 'click', function () {
        var input_text = document.getElementById('input_text');
        var v = input_text.value;
        limit(v);
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

    addEventHandler(sort, 'click', function () {
        var i = 0, j = 1, temp;
        len = a.length;
        timer = null;
        timer = setInterval(run, 100);
        function run() {
            if (i < len) {
                if (j < len) {
                    if (a[i] > a[j]) {
                        temp = a[i];
                        a[i] = a[j];
                        a[j] = temp;
                        render();
                    }
                    j++
                } else {
                    i++;
                    j = i + 1;
                }
            } else {
                clearInterval(timer);
                return;
            }
        }
    });
})();