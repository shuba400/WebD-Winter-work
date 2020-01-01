function current_time(){
	var date = new Date();
	var hour = date.getHours();
  	var min = date.getMinutes();
    var sec = date.getSeconds();
    var sess = "AM";
    var day = date.getDay(); //(0-6)
    var dated = date.getDate(); //(1-31)
    var year = date.getFullYear(); //YYYY
    var month = date.getMonth() + 1; //(0-11)

    day = correct_day(day);

    if(hour >= 12) sess = "PM";
    else sess = "AM";

    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);

    hour = formatted_time(hour);
    min = formatted_time(min);
    sec = formatted_time(sec);

    document.querySelector(".digital_clock").innerText = hour + " : " + min + " : " + sec + " " + sess;
    document.querySelector(".date").innerText = day + "     " + dated + "-" + month + "-" + year;

    setTimeout(current_time, 1000);

}

function formatted_time(c){
	if(c < 10) return "0" + c;
	else return c;
}

function correct_day(numb){
	if(numb == 0) return "Sunday";
	else if(numb == 1) return "Monday";
	else if(numb == 2) return "Tuesday";
	else if(numb == 3) return "Wednesday";
	else if(numb == 4) return "Thursday";
	else if(numb == 5) return "Friday";
	else if(numb == 6) return "Saturday";
}

current_time();