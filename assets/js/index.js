const pres = document.getElementsByTagName('pre');
console.log(pres);
pres.forEach((pre) => {
  const icon = document.createElement('i');
  icon.classList.add('mdi');
  icon.classList.add('mdi-code-tags');
  const span = document.createElement('span');
  span.classList.add('code-header-icon');
  span.appendChild(icon);
  const header = document.createElement('div');
  header.classList.add('code-header');
  header.appendChild(span);
  pre.parentNode.insertBefore(header, pre);
});