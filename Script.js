window.onload = function(){
	document.getElementById("period").innerHTML = period;
	document.getElementById("how").innerHTML = "+ To start the game, please select your character by clicking on the character sprite (click the arrow to switch between the available character).<br/>+ If the button turns blue, it means that you'll play as the male character and you'll play as the female character if it turns green.<br/>+ Insert your name in the box (leaving it empty would instead use a default name for the character).<br/>+ Click PLAY to proceed";
	$("#loading").hide();
	$("#girl").hide();
	$("#char-select").hide();
	$("#name-input").hide();
	$("#button").hide();
	$("#group").hide();
	$("#member").hide();
	$("#guide").hide();
	$("#ui-time").hide();
	$("#side-menu").hide();
	$("#ui-screen").hide();
	$("#status-bar").hide();
	$("#study").hide();
	$("#rest").hide();
	$("#happy").hide();
	$("#eat").hide();
	$("#screen").hide();
	$("#username").hide();
	$("#option").hide();
	$("#utility").hide();
	$("#how").hide();
	$("#graduate").hide();
	$("#over").hide();
	$("#enak").click(function(){$("#member").slideToggle(800);});
	$("#tips").click(function(){$("#how").slideToggle(800);});
	$("#learn-icon").click(function(){$("#study").slideToggle(600);});
	$("#sleep-icon").click(function(){$("#rest").slideToggle(600);});
	$("#fun-icon").click(function(){$("#happy").slideToggle(600);});
	$("#meal-icon").click(function(){$("#eat").slideToggle(600);});
	$("#setting").click(function(){$("#utility").slideToggle(800);});
	title();	
};

var load = 0;
var name;
var character;
var boy;
var girl;
var learn = 0;
var tired = 120;
var mood = 150;
var hunger = 100;
var time = 5;
var day = 0;
var interval_title;
var interval_status;
var interval_drain;
var interval_time;
var interval_idle;
var period = 1;
var bg;
var freeze = 0;
var spam = 0;
var end;
//Title Function
function title(){
	$("body").keydown(function(){
		if(load == 0){
			document.getElementById("start-screen").style.visibility = "hidden";
			$("#loading").show();
			document.getElementById("load-bar").style.width = "380px";
			load += 1;	
		interval_title = setTimeout(function(){start()},3000);	
		}else
		if(load == 1) return;
	});
}

function start(){
	$("#loading").fadeOut(1000);
	$("#start-screen").hide(1000);
	$("#char-select").fadeIn(1500);
	$("#name-input").fadeIn(1500);
	$("#button").fadeIn(1500);
	$("#group").fadeIn(1500);
	$("#guide").fadeIn(1500);
	select();
	status_bar();
	action();
}
//Character Select Function
function scroll_left(){
	character = 0;
	if(character == 0){
		$("#boy").show();
		$("#girl").hide();	
	}	
}

function scroll_right(){
	character = 1; 
	if(character == 1){
		$("#girl").show();
		$("#boy").hide();	
	}
}

function select(){
	document.getElementById("left-button").addEventListener("click",scroll_left,false);
	document.getElementById("right-button").addEventListener("click",scroll_right,false);
	$("#boy").click(function(){
		boy = true;
		girl = false;
		play();	
	});
	$("#girl").click(function(){
		girl = true;
		boy = false;
		play();	
	});
}

function play(){
	if(boy == true){
		$("#button").css("background-color","#6fb6b6");
		$("#button").click(function(){
			name = document.getElementById("name").value;
			document.getElementById("username").innerHTML = name;
			if(name == "") document.getElementById("username").innerHTML = "Nero";
			$("#group").hide();
			$("#name-input").hide();
			$("#char-select").hide();
			$("#button").hide();
			$("#how").hide();
			$("#learn-level").css("background-color","#6fb6b6");
			$("#sleep-level").css("background-color","#6fb6b6");
			$("#fun-level").css("background-color","#6fb6b6");
			$("#meal-level").css("background-color","#6fb6b6");
			$("#side-menu").css("background-color","#6fb6b6");
			$("#screen").css("border","5px solid #6fb6b6");
			$("#screen").css("background-image","url('Assets/Background/bedroom.png')");
			$("#ui-time").show(1500);
			$("#side-menu").show(1500);
			$("#ui-screen").show();
			$("#username").show(1500);
			$("#status-bar").show(1500);
			$("#screen").show(1500);
			$("#option").show(1500);
			drain();
			time_day();
			idle();
			document.getElementById("guide").style.width = "1200px";
			document.getElementById("how").innerHTML = "+ Dont let either two of Energy bar, Fun bar, or Hunger bar drop down to zero.<br/>+ Click on the button at the top to maintain the status of your character.<br/>+ Manage your activity well, as some action may have a negative effect to another status.<br/>+ To advance your semester you need to take Classes while your Learning bar were at it's peak.<br/>+ Use the option menu to access the Pause and Reset feature.<br/>+ Use Reset to restore your status to their initial value (You may only use it twice, so bear that in mind).";	
		});	
	}else
	if(girl == true){
		$("#button").css("background-color","#7DC39B");
		$("#button").click(function(){
			name = document.getElementById("name").value;
			document.getElementById("username").innerHTML = name;
			if(name == "") document.getElementById("username").innerHTML = "Aria";
			$("#group").hide();
			$("#name-input").hide();
			$("#char-select").hide();
			$("#button").hide();
			$("#how").hide();
			$("#learn-level").css("background-color","#7DC39B");
			$("#sleep-level").css("background-color","#7DC39B");
			$("#fun-level").css("background-color","#7DC39B");
			$("#meal-level").css("background-color","#7DC39B");
			$("#side-menu").css("background-color","#7DC39B");
			$("#screen").css("border","5px solid #7DC39B");
			$("#screen").css("background-image","url('Assets/Background/bedroom.png')");
			$("#ui-time").show(1500);
			$("#side-menu").show(1500);
			$("#ui-screen").show();
			$("#username").show(1500);
			$("#status-bar").show(1500);
			$("#screen").show(1500);
			$("#option").show(1500);
			drain();
			time_day();
			idle();
			document.getElementById("guide").style.width = "1200px";
			document.getElementById("how").innerHTML = "+ Dont let either two of Energy bar, Fun bar, or Hunger bar drop down to zero.<br/>+ Click on the button at the top to maintain the status of your character.<br/>+ Manage your activity well, as some action may have a negative effect to another status.<br/>+ To advance your semester you need to take Classes while your Learning bar were at it's peak.<br/>+ Use the option menu to access the Pause and Reset feature.<br/>+ Use Reset to restore your status to their initial value (You may only use it twice, so bear that in mind).";	
		});	
	}
}
//Status Drain Function
function drain(){
	tired -= 1;
	mood -= 2;
	hunger -= 1;
	interval_drain = setTimeout(function(){drain()}, 5000);	
}
//Button Function
function action(){
	document.getElementsByTagName("li")[0].addEventListener("click",lecture,false);
	document.getElementsByTagName("li")[1].addEventListener("click",read,false);
	document.getElementsByTagName("li")[2].addEventListener("click",discuss,false);
	document.getElementsByTagName("li")[3].addEventListener("click",sleep,false);
	document.getElementsByTagName("li")[4].addEventListener("click",refresh,false);
	document.getElementsByTagName("li")[5].addEventListener("click",meal,false);
	document.getElementById("resume").addEventListener("click",resume,false);
	document.getElementById("pause").addEventListener("click",stop,false);
	document.getElementById("reset").addEventListener("click",reset,false);
}
//Status Bar Function
function status_bar(){
	if(learn <= 0) learn = 0;
	if(tired <= 0) tired = 0;
	if(mood <= 0) mood = 0;
	if(hunger <= 0) hunger = 0;
	if(learn >= 200) learn = 200;
	if(tired >= 200) tired = 200;
	if(mood >= 200) mood = 200;
	if(hunger >= 200) hunger = 200;
	document.getElementById("learn-level").style.width = learn + "px";
	document.getElementById("sleep-level").style.width = tired + "px";
	document.getElementById("fun-level").style.width = mood + "px";
	document.getElementById("meal-level").style.width = hunger + "px";
	if((tired == 0 && mood == 0) || (hunger == 0 && tired == 0) || (mood == 0 && hunger == 0)){
		var over = window.confirm("Your character lose the motivation to go to college, Restart?");
		if(over == true) window.location.assign("Index.html");
		else 
		if(over == false){
			$("#ui-time").hide(1500);
			$("#side-menu").hide(1500);
			$("#status-bar").hide(1500);
			$("#screen").hide(1500);
			$("#username").hide(1500);
			$("#option").hide(1500);
			$("#ui-screen").hide(1500);
			$("#guide").hide(1500);
			if(boy == true){
				var render = "<img src='Assets/Character/boy-over.gif'/>";
				document.getElementById("lose").innerHTML = render;
			}else
			if(girl == true){
				var render = "<img src='Assets/Character/girl-over.gif'/>";
				document.getElementById("lose").innerHTML = render;
			}
			$("#over").show();
			return;
		}	
	}
	if(period == 15){
		$("#ui-time").hide(1500);
		$("#side-menu").hide(1500);
		$("#status-bar").hide(1500);
		$("#screen").hide(1500);
		$("#username").hide(1500);
		$("#option").hide(1500);
		$("#ui-screen").hide(1500);
		$("#guide").hide(1500);
		if(boy == true){
			var render = "<img src='Assets/Character/boy-over.gif'/>";
			document.getElementById("lose").innerHTML = render;
		}else
		if(girl == true){
			var render = "<img src='Assets/Character/girl-over.gif'/>";
			document.getElementById("lose").innerHTML = render;
		}
		$("#over").show();
		return;	
	}
	interval_status = setTimeout(function(){status_bar()}, 500);	
}
//Time Function
function time_day(){
	var days;
	
	if(time < 10){
		var hour = "0" + time + " : 00";
		document.getElementById("clock").innerHTML = hour;
	}else
	if(time >= 10){
		var hour = time + " : 00";
		document.getElementById("clock").innerHTML = hour;
	}
	time += 1;
	if(time >= 24) time = 0;
	if(day == 0) days = "Sunday";
	else if(day == 1) days = "Monday";
	else if(day == 2) days = "Tuesday";
	else if(day == 3) days = "Wednesday";
	else if(day == 4) days = "Thursday";
	else if(day == 5) days = "Friday";
	else if(day == 6) days = "Saturday";
	if(day > 6) day = 0;
	if(time == 0) day += 1;
	if(day == 0 || day == 6) $("#college").hide(400);
	else if(time < 8 || time > 22) $("#college").hide(400);
	else $("#college").show(600);
	document.getElementById("day").innerHTML = days;
	interval_time = setTimeout(function(){time_day()}, 2500);
}
//Idle Function
function idle(){
	if(boy == true){
		document.getElementsByTagName("li")[0].style.visibility = "visible";
		document.getElementsByTagName("li")[1].style.visibility = "visible";
		document.getElementsByTagName("li")[2].style.visibility = "visible";
		document.getElementsByTagName("li")[3].style.visibility = "visible";
		document.getElementsByTagName("li")[4].style.visibility = "visible";
		document.getElementsByTagName("li")[5].style.visibility = "visible";
		var render = "<img src='Assets/Character/boy-idle.gif'/>";
		document.getElementById("player").innerHTML = render;
	}else
	if(girl == true){
		document.getElementsByTagName("li")[0].style.visibility = "visible";
		document.getElementsByTagName("li")[1].style.visibility = "visible";
		document.getElementsByTagName("li")[2].style.visibility = "visible";
		document.getElementsByTagName("li")[3].style.visibility = "visible";
		document.getElementsByTagName("li")[4].style.visibility = "visible";
		document.getElementsByTagName("li")[5].style.visibility = "visible";
		var render = "<img src='Assets/Character/girl-idle.gif'/>";
		document.getElementById("player").innerHTML = render;
	}
}
//Action Function
function lecture(){
	learn += 20;
	tired -= 10;
	mood -= 5;
	time += 2;
	bg = 0;
	if(learn >= 200){
		
		
		var a = Math.floor((Math.random() * 10) + 1);
		var b = Math.floor((Math.random() * 10) + 1);
		var c = a + b;
		window.alert ("You are ready for the test ! Do this exam to advance to the next semester !");
		var answer = prompt(a + " + " +b+ "=" );
		if(answer==c) {
		window.alert ("Great, you've got the correct answer ! Congrats and be happy for your next semester ! ");
		period += 1;
		learn = 0;
		}
		
		else if(answer!=c){
			window.alert ("Whoops, you have a wrong answer. Learn more and try again later ! ");
			learn -=60;
		}
		
		if(period == 8) document.getElementById("college").innerHTML = "Thesis";
		document.getElementById("period").innerHTML = period;
		if(period == 2 || period == 9 || period == 11 || period == 14) end = window.confirm("You have enough scores to be able to pass your scholarship program. Graduate?");
		if(end == true){
			clearTimeout(interval_drain);
			clearTimeout(interval_time);
			$("#ui-time").hide(1500);
			$("#side-menu").hide(1500);
			$("#status-bar").hide(1500);
			$("#screen").hide(1500);
			$("#username").hide(1500);
			$("#option").hide(1500);
			$("#ui-screen").hide(1500);
			$("#guide").hide(1500);
			document.title = "CampusGotchi - End Card";
			$("body").css("background-image","url('Assets/Background/end.png')");
			$("body").css("background-size","cover");
			$("body").css("background-repeat","no-repeat");
			$("#graduate").fadeIn(1000);
		 }
		 else if(end == false) return;	
		 
		 
	}
	if(boy == true){
		document.getElementsByTagName("li")[0].style.visibility = "hidden";
		var render = "<img src='Assets/Character/boy-class.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 0) $("#screen").css("background-image","url('Assets/Background/class.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}else
	if(girl == true){
		document.getElementsByTagName("li")[0].style.visibility = "hidden";
		var render = "<img src='Assets/Character/girl-class.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 0) $("#screen").css("background-image","url('Assets/Background/class.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}
}

function read(){
	learn += 10;
	tired -= 2;
	mood -= 5;
	time += 2;
	bg = 0;
	if(boy == true){
		document.getElementsByTagName("li")[1].style.visibility = "hidden";
		var render = "<img src='Assets/Character/boy-read.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 0) $("#screen").css("background-image","url('Assets/Background/class.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}else
	if(girl == true){
		document.getElementsByTagName("li")[1].style.visibility = "hidden";
		var render = "<img src='Assets/Character/girl-read.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 0) $("#screen").css("background-image","url('Assets/Background/class.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}
}

function discuss(){
	learn += 10;
	tired -= 2;
	mood -= 5;
	time += 2;
	bg = 1;
	if(boy == true){
		document.getElementsByTagName("li")[2].style.visibility = "hidden";
		var render = "<img src='Assets/Character/discuss.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	
	}else
	if(girl == true){
		document.getElementsByTagName("li")[2].style.visibility = "hidden";
		var render = "<img src='Assets/Character/discuss.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}
}

function sleep(){
	tired += 15;
	mood += 2;
	hunger -= 5;
	time += 1;
	bg = 1;
	if(boy == true){
		document.getElementsByTagName("li")[3].style.visibility = "hidden";
		var render = "<img src='Assets/Character/boy-sleep.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);	
	}else
	if(girl == true){
		document.getElementsByTagName("li")[3].style.visibility = "hidden";
		var render = "<img src='Assets/Character/girl-sleep.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);	
	}
}

function refresh(){
	mood += 10;
	learn -= 5;
	tired -= 2;
	time += 1;
	bg = 1;
	if(boy == true){
		document.getElementsByTagName("li")[4].style.visibility = "hidden";
		var render = "<img src='Assets/Character/talk.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}else
	if(girl == true){
		document.getElementsByTagName("li")[4].style.visibility = "hidden";
		var render = "<img src='Assets/Character/talk.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}
}

function meal(){
	hunger += 15;
	learn -= 2;
	mood += 5;
	time += 2;
	bg = 1;
	if(boy == true){
		document.getElementsByTagName("li")[5].style.visibility = "hidden";
		var render = "<img src='Assets/Character/boy-eat.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}else
	if(girl == true){
		document.getElementsByTagName("li")[5].style.visibility = "hidden";
		var render = "<img src='Assets/Character/girl-eat.gif'/>";
		document.getElementById("player").innerHTML = render;
		if(bg == 1) $("#screen").css("background-image","url('Assets/Background/bedroom.png')");
		interval_idle = setTimeout(function(){idle()}, 2500);
	}
}
//Utility Function
function stop(){
	clearTimeout(interval_status);
	clearTimeout(interval_drain);
	clearTimeout(interval_time);
	$(".menu").hide(1000);
	freeze = 1;
}

function resume(){
	if(freeze == 0) return;
	else
	if(freeze == 1){
		$(".menu").show(1000);
		status_bar();
		time_day();
		action();
		drain();
		idle();
		freeze = 0;
	}
}

function reset(){
	if(freeze == 1) return;
	else
	if(freeze == 0){
		learn = 0;
		tired = 120;
		mood = 150;
		hunger = 100;
		spam += 1;
		if(spam == 2) $("#reset").hide(600);
	}
}
