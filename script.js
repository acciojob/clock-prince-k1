//your JS code here. If required.



let p = document.getElementById('timer');


function updateTime(){
let month = new Date().getMonth();
let date = new Date().getDate();
let year = new Date().getFullYear();
let hour = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let ans = `${month}/${date}/${year}, ${hour}:${min}:${sec}`;
p.innerText = ans;
}

updateTime();
setInterval(updateTime, 1000);