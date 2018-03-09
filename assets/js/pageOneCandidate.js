let arrOverwriting  = document.getElementById('one-candidate-information').getElementsByClassName('overwriting');
let arrWrapperOverwriting  = document.getElementById('one-candidate-information').getElementsByClassName('wrapper-overwriting');
let checkboxChangeInf = document.getElementById('change-information-buton');
let labelChangeInf = document.getElementById('change-information');
writeHeight(arrWrapperOverwriting, arrOverwriting);

function writeHeight(arrDiv, arrTextarea) {
  for( let i = 0; i < arrDiv.length; ++i) {
    arrDiv[i].style.cssText = 'height: ' + arrTextarea[i].scrollHeight + 'px'; 
  } 
}
window.onresize = function(){
  writeHeight(arrWrapperOverwriting, arrOverwriting);
};
labelChangeInf.onclick = function() {
    console.log(checkInfoChange());
  if(checkInfoChange()) {
    deleteReadonly();
  }
  else {
    addReadonly()
  }
};
function checkInfoChange() {
  return checkboxChangeInf.checked;
}
function deleteReadonly() {
  for( let i = 0; i < arrOverwriting.length; ++i) {
    arrOverwriting[i].removeAttribute('readonly');
  }
  labelChangeInf.classList.remove("glyphicon-pencil");
  labelChangeInf.classList.add("glyphicon-ok");
}
function addReadonly() {
  for( let i = 0; i < arrOverwriting.length; ++i) {
    arrOverwriting[i].setAttribute('readonly', '');
  }
  labelChangeInf.classList.remove("glyphicon-ok");
  labelChangeInf.classList.add("glyphicon-pencil");
}