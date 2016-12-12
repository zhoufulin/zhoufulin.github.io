## z-index属性

​	一般来说，在DOM中，元素出现的时候就放置在z轴上。在Dom中，元素在顶部的要低于底部的。改变这种层叠顺序可以直接使用“z-index”来控制。元素的“z-index”值越高将会出现在越上面，不管元素在Dom哪个位置上。

​	给元素设置“z-index”属性，首先要在这个元素上设置了“position”属性值为“relatvie”、“absolute”或者“fixed”之一。同样的，你要使用盒子位移属性，你也要先确认元素设置了“positions”属性值为“relative”、“absolute”或者“fixed”之一。

​	在下面的例子中，如果每个盒子都不设置“z-index”，那么第一个box在第二个下面，第二个在第三个下面，第三个在第四个下面。如果在盒子中指定“z-index”的值，第二个盒子在第一个和第三个上面，第三个盒子在第四个上面。

html:

```html
<div class="box-set">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>  
```

css:

```css
 .box-set {
  background: #e8eae9;
  height: 160px;
  position: relative;
}
.box {
  background: #8ec63f;
  border: 3px solid #f7941d;
  position: absolute;
}
.box-1 {
  left: 10px;
  top: 10px;
}
.box-2 {
  bottom: 10px;
  left: 70px;
  z-index: 3;
}
.box-3 {
  left: 130px;
  top: 10px;
  z-index: 2;
}
.box-4 {
  bottom: 10px;
  left: 190px;
  z-index: 1;
} 
```



不设置z-index：

![](http://cdn.w3cplus.com/cdn/farfuture/nYS2wW3PKhR6YP0QF1ehJifgjWACiNsV5toiWo7mOqM/mtime:1421035050/sites/default/files/styles/print_image/public/blogs/2013/AdvancedGuide/lesson2-10.jpg)

设置z-index：

![](http://cdn2.w3cplus.com/cdn/farfuture/0E2L3mATuiRsv5SlN-j7n0btTopdyy0QyqRE99hSq_U/mtime:1421035050/sites/default/files/styles/print_image/public/blogs/2013/AdvancedGuide/lesson2-11.jpg)





---



## 居中



**水平居中**



inline或者inline-*元素

```css
.center-children {
  text-align: center;
}
```



block块级元素

```css
.center-me {
  margin: 0 auto;
}
```



超过一个block块级元素

改变`display`的值

```css
.inline-block-center div {
  display: inline-block;
  text-align: left;
}
```

使用flexbox

```css
.flex-center {
  display: flex;
  justify-content: center;
}
```



---



**水平居中**

inline或者inline-*元素

​	单行:

​		设置上下padding相等

```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

​		有使用不能使用padding，这时可以设置元素高度等于行高

```css
.center-text-trick {
  height: 100px;
  line-height: 100px;
}
```



​	多行：flexbox

```css
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}
```





block块级元素

知道元素的高度

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
}
```



不知道元素的高度

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```



使用flexbox

```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```



---

**水平垂直居中**

元素有固定的宽高：用负margin等于width和height的一半，在绝对定位后就能水平垂直居中

```css
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```



不知道元素的宽高

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```



使用flexbox

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

```



---

**解决height:100%无效**

如果想让一个元素的百分比高度`height: 100%;`起作用，你需要给这个元素的所有父元素的高度设定一个有效值。换句话说，你需要这样做：

```html
<html>
  <body>
    <div style="height: 100%;">
      <p>
        想让这个div高度为 100% 。
      </p>
    </div>
  </body>
</html>
```



现在你给了这个`div`的高度为100%，它有两个父元素``和``。为了让你的div的百分比高度能起作用，你必须设定``和``的高度。

```css
<html style="height: 100%;">
  <body style="height: 100%;">
    <div style="height: 100%;">
      <p>
        这样这个div的高度就会100%了
      </p>
    </div>
  </body>
</html>
```



---

**flex布局**

[Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

