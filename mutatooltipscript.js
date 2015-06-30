/**
 * Created by Ondrej on 06/05/2015.
 */

onload = function () {

    var tooltipWindow = document.getElementsByClassName('mt-tooltip');

    for( i=0; i<tooltipWindow.length; i++ ) {
        document.getElementsByClassName('mt-tooltip')[i].addEventListener('mouseover', tooltipHover);
    }

    for( p=0; p<tooltipWindow.length; p++ ) {
        document.getElementsByClassName('mt-tooltip')[p].addEventListener('mouseout', tooltipOut);
    }

    function tooltipHover(){
        var tooltipInfo = this.title;
        var tooltipBox = document.createElement("SPAN");
        tooltipBox.innerHTML = tooltipInfo;
        tooltipBox.setAttribute("id", "mt-active");
        this.appendChild(tooltipBox);
    }

    function tooltipOut(){
        var tooltipBox = document.getElementById('mt-active');
        this.removeChild(tooltipBox);
    }
};

//document.getElementById("mt-tooltip").addEventListener("tooltipOver", tooltipOver);
//document.getElementById("mt-tooltip").addEventListener("tooltipOut", tooltipOut);

//function tooltipOver() {
//    document.getElementById("mt-tooltip").style.color = "red";
//}
//
//function tooltipOut() {
//    document.getElementById("mt-tooltip").style.color = "black";
//}

//var myTooltip = new Window();
//
//myTooltip.hover=function(){
//    var tooltipInfo = e.title;
//}