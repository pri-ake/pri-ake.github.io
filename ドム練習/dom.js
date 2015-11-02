// ①div#idbox1を取得する
var dom1 = document.getElementById("box1");
var dom2 = document.getElementById("box2");
var dom3 = document.getElementById("box3");

// ↓alert…ポップアップ表示をする
// alert(dom);
// alert("こんにちは！");

// console.log(dom1);
// console.log(dom2);
// console.log(dom3);

// ②取得したdomにイベントと関数を紐づける
dom1.addEventListener("click", removeDiv);
dom2.addEventListener("click", removeDiv);
dom3.addEventListener("click", removeDiv);

// ③domを削除する関数の定義
function removeDiv() {
  // alert("OK");
  // alert(this);
  var parent = this.parentNode;
  // alert(parent);
  parent.removeChild(this);
}


// ①ulを取得する
var ul = document.getElementsByTagName("ul");
ul = ul[0];
// console.log(ul);

// ②ulにイベントと関数を紐づける
ul.addEventListener("click", setClass);



// ③.hitを設定する関数
function setClass() {
  // console.log(this);
  // console.log(event.target);
var li = event.target;

li.classList.toggle("hit");
}