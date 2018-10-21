5//Main screen arrow functionality
var arrowflag = 0;
var resultflag= 0;


window.onload=function(){
	document.getElementById("arrow").addEventListener("click", movement);
	document.getElementById("results").addEventListener("click", newpage);
	document.getElementById("return").addEventListener("click", returnto);	
}

function movement() {
		arrow = document.getElementById("arrow");
		right = document.getElementById("right");
		left = document.getElementById("left");

		if (arrowflag==false){
			  right.classList.add("open");
			  arrow.style.marginLeft = "-8%";
			  left.style.marginLeft="0%";
			  arrow.classList.add("faceright");
			  arrowflag = true;
		}
		else{
			  right.classList.remove("open");
			  arrow.style.marginLeft = "-35%";
			  left.style.marginLeft="21%";
			  arrow.classList.remove("faceright")
			  arrowflag = false;
		}
}

function newpage(){
	 big = document.getElementById("big");
	 big.style.bottom="100%";
	 bottom.style.top="0%";
	 
}

function returnto(){
	ret = document.getElementById("return");
	big.style.bottom="0%"
	bottom.style.top="100%";
}