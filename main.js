var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}

function move(){
	var elem = document.getElementById("myBar");
	var width = 10;
	var id = setInterval(frame, 10);
	function frame(){
		if(width>=100){
			clearInterval(id);
		}else{
			width++;
			elem.style.width = width + '%';
			document.getElementById("label").innerHTML = width*1 + '%';
		}
	}
}

function myFunction(){
	var popup = document.getElementById('myPopup');
	popup.classList.toggle('show');
}






var acc = document.getElementsByClassName("accordion");
var i;

for(i=0; i < acc.length; i++){
	acc[i].onclick = function(){
		this.classList.toggle("active");
		
		this.nextElementSibling.classList.toggle("show");
	}
}


function moneyConvertor(valNum){
	document.getElementById("outputrub").innerHTML = valNum*72.92;
} 


var myNodelist = document.getElementsByTagName('LI');
var i;
for(i=0; i < myNodelist.length; i++){
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);	
}

var close = document.getElementsByClassName("close");
var i;
for (i=0; i < close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}	
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	if(ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement(){
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === ''){
		alert("Поле не может быть пустым!");
	}else{
		document.getElementById("myUL").appendChild(li);
	}
	
document.getElementById("myInput").value = "";
	
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);	
	
	for (i=0; i < close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
		}	
	}	
}


function myFunction1(){
	var x = document.getElementById('myDiv');
	if(x.style.display === 'none'){
		x.style.display = 'block';
	}else{
		x.style.display = 'none';
	}	
}
var close = document.getElementsByClassName("closebtn");
var i;
for(i=0; i<close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.opacity = "0";
		setTimeout(function(){
			div.style.display = "none";
		}, 600);
	}
}