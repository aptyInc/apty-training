const iframe = document.getElementById('iframeContainer');
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

document.getElementById('changeColorBtn').addEventListener('click', () => {
  const para = iframeDoc.getElementById('para1');
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  para.style.color = color;
});

document.getElementById('toggleClassBtn').addEventListener('click', () => {
  const elements = iframeDoc.getElementsByClassName('sameClass');
  for (const el of elements) {
    el.classList.toggle('highlight');
  }
});

document.getElementById('changeSpanContentBtn').addEventListener('click', () => {
  const spans = iframeDoc.getElementsByTagName('span');
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = `Updated Span ${i + 1}`;
  }
});

document.getElementById('toggleDisabledBtn').addEventListener('click', () => {
  const inputs = iframeDoc.getElementsByName('input1');
  inputs.forEach(input => {
    input.disabled = !input.disabled;
  });
});

document.getElementById('addCustomAttrBtn').addEventListener('click', () => {
  const element = iframeDoc.querySelector('[data-custom-attr="value1"]');
  if (element) {
    element.setAttribute('data-new-attr', 'newValue');
  }
  const newA=iframeDoc.querySelector('[data-new-attr="newValue"]');
  newA.textContent="Added New Attribute";
  const newValue=element.getAttribute('data-new-attr');
  console.log(newValue);
});