/**
 * Created by Home on 31/08/2016.
 */

// variables for overlay

var json = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "js/data.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

// dummy overlay


// global variables

var $mainOverlay = $("<div class='mainOverlay'></div>");
var $modalWrapper = $("<div class='modalWrapper'></div>");
var $modalHeader;
var $modalClose = $("<img class='modalClose' src='img/icon-close.svg'>");
var $modalDescriptionWrapper = $("<div class='modalDescriptionWrapper'></div>");
var $modalSecondaryHeader = $("<h3 class='modalSecondaryHeader'>Project 12</h3>");
var $modalProjectDescription;
var $visitSiteButton;
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

function dummyOverlay() {
    $modalHeader = $("<h2 class='modalHeader'>"+ json.portfolioProjects[0].name +"</h2>");
    $modalProjectDescription = $("<p class='modalProjectDescription'>"+ json.portfolioProjects[0].description +"</p>");
    $visitSiteButton = $("<a href='" + json.portfolioProjects[0].destination + "'><button class='visitSiteButton'>Visit Site</button></a>");
    $modalProjectImage = $("<img class='modalProjectImage' src='" + json.portfolioProjects[0].image + "'>");
}

dummyOverlay();

// functions for overlay

$('body').append($mainOverlay);

$mainOverlay
    .append($modalWrapper);
    // .show();

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
