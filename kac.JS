
let bg = document.getElementById('bg');
let grl1 = document.getElementById('grl1');
let grl2 = document.getElementById('grl2');
let pot = document.getElementById('pot');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    grl1.style.marginLeft = value * -3 + 'px';
    grl2.style.marginLeft = value * 3.3 + 'px';
    pot.style.marginLeft = value * 0.5 + 'px';
    text.style.marginTop = value * 0.4 + 'px';
})

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight -
    window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

$(document).ready(function(){
    $('.counter').counterUp({
      delay: 5,
      time: 500
    });
  });

