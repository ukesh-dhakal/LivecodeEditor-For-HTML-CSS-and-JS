const html_code = document.querySelector('#html ');
const css_code = document.querySelector('#css ');
const js_code = document.querySelector('#js');
const result = document.querySelector('#output');

function run() {

  localStorage.setItem('html_code', html_code.val);
  localStorage.setItem('css_code', css_code.val);
  localStorage.setItem('js_code', js_code.val);


  result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
  result.contentWindow.eval(localStorage.js_code);
}


html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();


html_code.val = localStorage.html_code;
css_code.val = localStorage.css_code;
js_code.value = localStorage.js_code;
