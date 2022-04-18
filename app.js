
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() =>{

    let hh = new Date().getHours() * 30;
    let mm = new Date().getMinutes() * 6;
    let ss = new Date().getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})

    // For Digital Clock

    let hours = document.getElementById('hours');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let ampm = document.getElementById('ampm');

setInterval(() => {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //Am to pm convert timer

    let am = h >=12 ? 'PM' : 'AM';

    // Convert 24hr colock to 12hr clock

    if( h > 12 ){
        h = h - 12;
    }

    //Add Zero before single digit number

    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s

    hours.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;

})