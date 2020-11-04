let firstImg = document.getElementById('first-img');
let secondImg = document.getElementById('second-img');
let thirdImg = document.getElementById('third-img');
let secondBigImg = document.getElementById('second-big-img');
let thirdBigImg = document.getElementById('third-big-img');


//----------- 1 вариант - с возможностью скрытия большой картинки по клику


firstImg.addEventListener('click', showError);
secondImg.addEventListener('click', showSecondImage);
thirdImg.addEventListener('click', showThirdImage);



function showError() {
  alert('ERROR!');
  secondBigImg.style.display = 'none';
  thirdBigImg.style.display = 'none';
}


function showSecondImage() {
  secondBigImg.style.display = 'block';
  thirdBigImg.style.display = 'none';
  secondImg.removeEventListener('click', showSecondImage);
  secondImg.addEventListener('click', hideSecondImage);

}

function hideSecondImage() {
  secondBigImg.style.display = 'none';
  secondImg.removeEventListener('click', hideSecondImage);
  secondImg.addEventListener('click', showSecondImage);
}

function showThirdImage() {
  thirdBigImg.style.display = 'block';
  secondBigImg.style.display = 'none';
  thirdImg.removeEventListener('click', showThirdImage);
  thirdImg.addEventListener('click', hideThirdImage);
}

function hideThirdImage() {
  thirdBigImg.style.display = 'none';
  thirdImg.removeEventListener('click', hideThirdImage);
  thirdImg.addEventListener('click', showThirdImage);
}



//----------- 2 вариант


// firstImg.addEventListener('click', showAlert);
// secondImg.addEventListener('click', changeDisplaySecondImg);
// thirdImg.addEventListener('click', changeDisplayThirdImg);

// function showAlert() {
//   alert('ERROR!');
//   secondBigImg.style.display = 'none';
//   thirdBigImg.style.display = 'none';
// }

// function changeDisplaySecondImg() {
//   secondBigImg.style.display = 'block';
//   thirdBigImg.style.display = 'none';
// }

// function changeDisplayThirdImg() {
//   thirdBigImg.style.display = 'block';
//   secondBigImg.style.display = 'none';
// }



//----------- 3 вариант


// firstImg.onclick = function() {
//   alert('Error!');
//   secondBigImg.style.display = 'none';
//   thirdBigImg.style.display = 'none';
// }

// secondImg.onclick = function() {
//   secondBigImg.style.display = 'block';
//   thirdBigImg.style.display = 'none';
// }

// thirdImg.onclick = function() {
//   thirdBigImg.style.display = 'block';
//   secondBigImg.style.display = 'none';
// }