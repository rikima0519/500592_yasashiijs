

let button = document.getElementById('button');
let form = document.getElementById('form');
let textarea = document.getElementById('textarea');

// 文字数制限
let maxTextNum = textarea.getAttribute('maxlength');

let textMessage = document.createElement('div');
let parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

button.addEventListener('click', function () {
  form.style.display = 'block';
})






// テキストエリアでキーをタイプしたとき
textarea.addEventListener('keyup', function () {
  let currentTextNum = textarea.value.length;
  textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」 文字入力できます。</p>';

});
