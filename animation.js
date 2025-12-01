let heading = document.getElementById('heading');
let degree = 0;
function rotateHeading () {
  degree += 6;
  degree = degree % 360;
  if (degree === 90) {
    heading.setAttribute('class', 'back'); // ある条件で('属性', '値')を変更する
  } else if (degree === 270) {
    heading.setAttribute('class', 'face');
  }
  heading.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateHeading, 20);

 