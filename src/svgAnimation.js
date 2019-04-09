/*
// Writing Lines Animation
var lines = document.getElementsByClassName('w_line'),
  defaultDvalue = [],
	i;
for (i = 0; i < lines.length; i++) {
  defaultDvalue.push(lines[i].getAttribute('d'));
}
var writingL1 = function(ele) {
  var dAttribute = ele.getAttribute('d'),
    newNumb = 0;
  var writingAnim = setInterval(function() {
    newNumb++;
    dAttribute = `m363.6 146.8h${newNumb}v8.68h-${newNumb}z`;
    ele.setAttribute('d', dAttribute);
    if (newNumb == 163) {
      clearInterval(writingAnim);
    }
  }, 20);
};
var writingL2 = function(ele) {
  setTimeout(function() {
    var dAttribute = ele.getAttribute('d'),
      newNumb = 0;
    var writingAnim = setInterval(function() {
      newNumb++;
      dAttribute = `m363.6 168.6h${newNumb}v8.68h-${newNumb}z`;
      ele.setAttribute('d', dAttribute);
      if (newNumb == 55) {
        clearInterval(writingAnim);
      }
    }, 20);
  }, 3200);
};
var writingL3 = function(ele) {
  setTimeout(function() {
    var dAttribute = ele.getAttribute('d'),
      newNumb = 0;
    var writingAnim = setInterval(function() {
      newNumb++;
      dAttribute = `m363.6 190.6h${newNumb}v8.68h-${newNumb}z`;
      ele.setAttribute('d', dAttribute);
      if (newNumb == 133) {
        clearInterval(writingAnim);
      }
    }, 20);
  }, 4400);
};
var writingL4 = function(ele) {
  setTimeout(function() {
    var dAttribute = ele.getAttribute('d'),
      newNumb = 0;
    var writingAnim = setInterval(function() {
      newNumb++;
      dAttribute = `m363.6 212.6h${newNumb}v8.68h-${newNumb}z`;
      ele.setAttribute('d', dAttribute);
      if (newNumb == 155) {
        clearInterval(writingAnim);
      }
    }, 20);
  }, 7000);
};

var writingL5 = function(ele) {
  setTimeout(function() {
    var dAttribute = ele.getAttribute('d'),
      newNumb = 0;
    var writingAnim = setInterval(function() {
      newNumb++;
      dAttribute = `m363.6 234.6h${newNumb}v8.68h-${newNumb}z`;
      ele.setAttribute('d', dAttribute);
      if (newNumb == 75) {
        clearInterval(writingAnim);
      }
    }, 20);
  }, 9900);
};

function linesEffect() {
  first_draw = setTimeout(function() {
    writingL1(lines[4]);
    writingL2(lines[3]);
    writingL3(lines[2]);
    writingL4(lines[1]);
    writingL5(lines[0]);
  }, 10);

  logo_effect = setInterval(function() {
    for (i = 0; i < lines.length; i++) {
      lines[i].setAttribute('d', defaultDvalue[i]);
    }

    writingL1(lines[4]);
    writingL2(lines[3]);
    writingL3(lines[2]);
    writingL4(lines[1]);
    writingL5(lines[0]);
  }, 12000);
}

linesEffect();

// Keyboad Animation
var pres_keys = document.querySelectorAll('#pressed_keys path');
setInterval(function() {
  var randomkey = Math.floor(Math.random() * 22);
  for (i = 0; i < pres_keys.length; i++) {
    pres_keys[i].classList.remove('pressed_key');
  }
  pres_keys[randomkey].classList.add('pressed_key');
}, 200);
*/
