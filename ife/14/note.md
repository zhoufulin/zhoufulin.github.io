数组迭代方法：

- every(): 对数组中的每一项运行给定函数，如果该函数每一项都返回true，则返回true。
- filter()：对数组中的每一项运行给定函数，这个函数会返回true的项组成的数组。
- forEach()：对数组中的每一项运行给定函数，无返回值。
- map(): 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
- some()：对数组中的每一项运行给定函数，若该函数对任一项返回true，则返回true。

```javascript
var numbers = [1,2,3,4,5,6,7,8,9];
var everyResult = numbers.every(function(item, index, array){
  return (item > 2);
});
```

