// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector

let element = document.querySelector('#element-id');
element.parentNode.removeChild(element);