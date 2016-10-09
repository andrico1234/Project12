/**
 * Created by Home on 31/08/2016.
 */
(function () {

    var json = (function () {
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
    
    var $mainOverlay = $("<div class='mainOverlay'></div>");
    var $modalWrapper = $("<div class='modalWrapper'></div>");
    var $modalHeader;
    var $modalClose = $("<img class='modalClose' src='img/icon-close.svg'>");
    var $modalDescriptionWrapper = $("<div class='modalDescriptionWrapper'></div>");
    var $modalSecondaryHeader = $("<h3 class='modalSecondaryHeader'></h3>");
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

    (function overlayContents() {
        $modalHeader = $("<h2 class='modalHeader'></h2>");
        $modalProjectDescription = $("<p class='modalProjectDescription'></p>");
        $visitSiteButton = $("<a class='modalProjectDestination' target='_blank'><button class='visitSiteButton'>Visit Site</button></a>");
        $modalProjectImage = $("<img class='modalProjectImage''>");
    })();
    
    $('body').append($mainOverlay);

    $mainOverlay
        .append($modalWrapper);

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
    
    function openOverlay(number) {
        $('.modalHeader').html(json.portfolioProjects[number].name);
        $('.modalProjectDescription').html(json.portfolioProjects[number].description);
        $('.modalSecondaryHeader').html('Project ' + (~~number + 1));
        $('.modalProjectDestination').attr('href', json.portfolioProjects[number].destination);
        $('.modalProjectImage').attr('src', json.portfolioProjects[number].image);
        $mainOverlay.show();
    }
    // make a global variable that stores the same number that goes into openOverlay.
    // when next is called, add 1 to that number, make all of the current 'number' vars the new value.
    // when prev is called, deduct 1 to the nuber
    // when next is called and number is length of array then make number 0
    // when prev is called and number is 0, make number length of array

    $('.learn-more').click(function () {
        var jsonNumber = this.parentElement.dataset.index;
        openOverlay(jsonNumber);
    });

    function closeOverlay() {
        $mainOverlay.hide();
    }

    $modalClose.click(function () {
        closeOverlay();
    });
})();