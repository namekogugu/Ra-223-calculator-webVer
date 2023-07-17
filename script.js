
const button = document.querySelector('.calc');
const RefDate = document.querySelector('.Ref-date')
const CureDate = document.querySelector('.Cure-date')
button.addEventListener('click', calc);

let date=new Date()
RefDate.value=date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
'-' + date.getDate().toString().padStart(2, 0);
CureDate.value=date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
'-' + date.getDate().toString().padStart(2, 0);


function diifDayCalc() {
  let oDate1 = new Date(RefDate.value);
  let oDate2 = new Date(CureDate.value);
  let diffDays = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  const day =document.querySelector('.dayFromRefDate')
  day.innerHTML=`Diff Day is: ${diffDays}`
  return diffDays
}



function decayFactor() {
  let dayIndex=diifDayCalc();
  const negDecayFactor=[2.296, 2.161, 2.034, 1.914, 1.802, 1.696, 1.596, 1.502, 1.414, 1.33, 1.252, 1.178, 1.109, 1.044]; //-14~-1
  const PostiveDecayFactory=[0.982, 0.925, 0.87, 0.819, 0.771, 0.725, 0.683, 0.643, 0.605, 0.569, 0.536, 0.504, 0.475, 0.447, 0.42]; //0-14
  let index;
  let count;

  if (dayIndex <= -1 &&  dayIndex >= -14)
    {
      count=dayIndex-(-14);
      index=negDecayFactor[count];
    }
  else if (dayIndex => 0 &&  dayIndex <= 14){
    index=PostiveDecayFactory[dayIndex];
  }
  else if (dayIndex => -15 || dayIndex >=15) {
    alert('日期差超過14或者-14天');
  }

  const factor =document.querySelector('.decayFactor')
  factor.innerHTML=`Decay Factor is: ${index}`
  return index
}



function calc(){
  let dayFactor=decayFactor() 

  const weight=document.querySelector('#weight')
  const dose =document.querySelector('.totalDose')
  const volume =document.querySelector('.totalVolume')


  totalDose=weight.value*55;
  console.log(totalDose);
  dose.innerHTML=`Total Dose is: ${totalDose}`


  totalVolume=(totalDose/(dayFactor*1100)).toFixed(2);
  volume.innerHTML=`Total Volume is : ${totalVolume}`
}

