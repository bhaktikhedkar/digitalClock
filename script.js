setInterval(displayTime(), 1000);

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let meridian = "AM";

    if(hh>12){
        meridian = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + meridian;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function(){
        displayTime() } ,1000);

}
 displayTime();