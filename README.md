# slide flip js
通用的移动端翻页代码，同时引入的还有根据屏幕设置html字体大小的函数

用法：
引入js：

```
<script src="javascripts/slide.js"></script>
```
引入css
```
<link rel="stylesheet" href="css/index.css">
```
或者在scss文件引入@import 'input.scss';
```
@import 'input.scss';
```

html结构：
```
<div class="mapbox">
    <div class="pagesbox" id="js-pagesbox" data-flipspeed="15" data-speedcompany="rem" data-activepage="1">
        <div class="page-item" style="background: #f1f1f1;" >
            1111
        </div>
        <div class="page-item" style="background: #f4f4f4;" >
            2222
        </div>
        <div class="page-item" style="background: #f8f8f8;" >
            3333
        </div>
        <div class="page-item" style="background: #ffffff;" >
            4444
        </div>
    </div>
</div>
```

被js调用的class名前面都会加上“js-”,其他class仅用于设置样式，与js无关；

最外层的.mapbox用来剪切幻灯片，设置它的大小以及它的left和top，用来控制显示画面的大小和位置；

里层.pagesbox用来设置翻页速度，在css里控制；

.pagesbox三个自定义属性：

data-flipspeed：设置单次翻页的距离，一般等于一页的宽度，属性是数值，可以是浮点数，必须填
data-speedcompany：设置data-flipspeed的单位，可以是rem、em、px等，必须填
data-activepage：用来记录页面位置，填1即可，必须填

最里面的.page-item用来填入你的html


