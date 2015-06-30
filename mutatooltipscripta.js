/**
 * Created by Ondrej on 06/05/2015.
 */

onload = function () {

    var tooltipWindow = document.getElementsByClassName('mt-tooltip');

    for( var i=0; i < tooltipWindow.length; i++ ) {
        var tooltipInfo = tooltipWindow[i].title;
        var tooltipBox = document.createElement("DIV");
        tooltipBox.setAttribute("class", "tooltip-info");
        tooltipBox.innerHTML = tooltipInfo;
        tooltipWindow[i].appendChild(tooltipBox);
    }
};