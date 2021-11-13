// 타입 단언(type assertion)
var a;
a = 20;
a = 'a'
var b = a as string;


// DOM API 조작 ( 웹 페이지에 태그에 접근하여 조작할 수 있는 )
// <div id="app">hi<div>

var div = document.querySelector('div');
if (div) {
    div.innerText
}
