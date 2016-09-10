/**
 * Created by Home on 31/08/2016.
 */


// variables for overlay

var lilWayne = 'Niggas be hatin Cause BG got it Every top of the line car they got Look I ride it From the Hummer to the Rover To the drop jag B and C lex truck Nothin my click aint had Everybody head was fucked When they heard bout the deal';

var jsonObject;

$.getJSON("js/data.json", function(json) {
    jsonObject = json;
});

// global variables

var $mainOverlay = $("<div class='mainOverlay'></div>");
var $modalWrapper = $("<div class='modalWrapper'></div>");
var $modalHeader = $("<h2 class='modalHeader'>" + jsonObject.portfolioProjects[0].name + "</h2>");
var $modalClose = $("<img class='modalClose' src='img/icon-close.svg'>");
var $modalDescriptionWrapper = $("<div class='modalDescriptionWrapper'></div>");
var $modalSecondaryHeader = $("<h3 class='modalSecondaryHeader'>Project 12</h3>");
var $modalProjectDescription = $("<p class='modalProjectDescription'>"+ lilWayne +"</p>");
var $visitSiteButton = $("<button class='visitSiteButton'>Visit Site</button>");
var $horizontalLine = $("<hr/>");
var $buttonDivWrapper = $("<div class='buttonDivWrapper'></div>");
var $previousButtonDiv = $("<div class='previousButtonDiv'></div>");
var $previousTitle = $("<h3 class='previousTitle'>Previous</h3>");
var $previousArrow = $("<img class='previousArrow' src='img/icon-arrow-down-overlay.svg'>");
var $nextButtonDiv = $("<div class='nextButtonDiv'></div>");
var $nextTitle = $("<h3 class='nextTitle'>Next</h3>");
var $nextArrow = $("<img class='nextArrow' src='img/icon-arrow-down-overlay.svg'>");
var $modalProjectImageWrapper = $("<div class='modalProjectImageWrapper'></div>");
var $modalProjectImage = $("<img class='modalProjectImage' src='img/dashboard-screen.png'>");


// functions for overlay

$('body').append($mainOverlay);

$mainOverlay
    .append($modalWrapper)
    .show();

$modalWrapper
    .append($modalHeader)
    .append($modalClose)
    .append($modalProjectImageWrapper)
    .append($modalDescriptionWrapper);

$modalProjectImageWrapper
    .append($modalProjectImage);

$modalDescriptionWrapper
    .append($modalSecondaryHeader)
    .append($modalProjectDescription)
    .append($visitSiteButton)
    .append($horizontalLine)
    .append($buttonDivWrapper);

$buttonDivWrapper
    .append($previousButtonDiv)
    .append($nextButtonDiv);

$previousButtonDiv
    .append($previousArrow)
    .append($previousTitle);

$nextButtonDiv
    .append($nextTitle)
    .append($nextArrow);


function openOverlay() {
  $mainOverlay.show();
}

function closeOverlay() {
    $mainOverlay.hide();
}

$modalClose.click(function(){
    closeOverlay();
});

// Work module generator

// create a for loop
// make the counter the length of the JSON portfolioProject object.
// create an unordered list outside of the loop
// create list items inside of the loop
// append the ul to portfolio div
// append the li to the ul
// each li will contain an image, a title, a short description and a learn more button