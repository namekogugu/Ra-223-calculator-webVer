

const button = document.querySelector('.calc');
const RefDate = document.querySelector('.Ref-date')
const CureDate = document.querySelector('.Cure-date')

button.addEventListener('click', calc);

function calc() {
  var oDate1 = new Date(RefDate.value);
  var oDate2 = new Date(CureDate.value);
  var iDays = parseInt((oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  console.log(iDays); // 
}
