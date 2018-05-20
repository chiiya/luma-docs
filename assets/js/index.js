import luma from '../vendor/luma/src/js/index';

luma.nav();
luma.navSlideOut();

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