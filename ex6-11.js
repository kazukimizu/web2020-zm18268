function ChangeImageAndBack(){imgback();ThreeSecChange2();}
function ThreeSecChange2(){setTimeout("imgchange2()",3000);}
function imgchange2() {document.getElementById('img13').src = './image/JosaiLogo.png';}
function imgback() {document.getElementById('img13').src = './image/silver_car.png';}
