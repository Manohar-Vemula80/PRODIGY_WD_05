// http://api.weatherapi.com/v1/current.json?key=6bdf7e4055c74adcbe790647251501&q=latur&aqi=no

const temperatureField=document.querySelector(".temp");
const locationField=document.querySelector(".time-location p");
const dateandTimeField=document.querySelector(".time-location #time-date");
const conditionField=document.querySelector(".condition p");
const searchField=document.querySelector(".search-area");
const form=document.querySelector("form");


form.addEventListener('submit',searchforlocation);


let target='Lucknow';

const fetchResults= async(targetlocation)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=6bdf7e4055c74adcbe790647251501&q=${targetlocation}&aqi=no`

    const res=await fetch(url);

    const data=await res.json();

    console.log(data);

    let locationName=data.location.name;
    let time=data.location.localtime;
    let temp=data.current.temp_c;

    let condition=data.current.condition.text;

    updateDetails(temp,locationName,time,condition);

};

function updateDetails(temp,locationName,time,condition){

    let splitDate=time.split(' ')[0];

    let splittime=time.split(' ')[1];

    let currentDay=getDayname(new Date(splitDate).getDay());

    temperatureField.innerText=temp;
    locationField.innerText=locationName;
    dateandTimeField.innerText =`${splitDate}${currentDay}${splittime}`;
    conditionField.innerText=condition;
    
}

function searchforlocation(e){
    e.preventDefault();

    target=searchField.value;

    fetchResults(target);
}

function getDayname(number){
    switch(number){
        case 0:
        return 'Sunday';
        case 1:
        return 'Monday';
        case 2:
        return 'Tueday';
        case 3:
        return 'Wednesday';
        case 4:
        return 'Thursday';
        case 5:
        return 'Friday';
        case 6:
        return 'Saturday';
    }
}