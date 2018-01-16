const pres = document.getElementsByTagName('pre');
pres.forEach((pre) => {
  if(pre.firstChild.className.split(' ').some(c => /language-.*/.test(c))) {
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
  }
});


// const slideout = new Slideout({
//   panel: document.getElementById('panel'),
//   menu: document.getElementById('menu'),
//   padding: 256,
//   tolerance: 70,
// });
// document.querySelector('.hamburger').addEventListener('click', (e) => {
//   slideout.toggle();
// });
//
// slideout.on('beforeopen', () => {
//   document.querySelector('.hamburger').classList.add('is-active');
// });
//
// slideout.on('beforeclose', () => {
//   document.querySelector('.hamburger').classList.remove('is-active');
// });