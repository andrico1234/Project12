/**
 * Created by Home on 24/09/2016.
 */
(function() {

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
    
    var $aboutOverlay = $("<div class='aboutOverlay'></div>");
    var $aboutOverlayWrapper = $("<div class='aboutOverlay-wrapper'></div>");
    var $aboutOverlayHeader = $("<h1 class='aboutOverlay-header'>" + json.aboutMe[0].about + "</h1>");
    var $aboutOverlayClose = $("<img class='aboutOverlay-close' src='img/icon-close.svg'>");
    var $aboutOverlayContentWrapper = $("<div class='aboutOverlay-contentWrapper'></div>");
    var $aboutOverlayProjectImageWrapper = $("<div class='aboutOverlayProject-imageWrapper'></div>");
    var $aboutOverlayProfilePicture = $("<img class='aboutOverlay-profilePicture' src='" + json.aboutMe[0].profilePic + "'/>");
    var $aboutOverlayDescritionWrapper = $("<div class='aboutOverlay-descriptionWrapper'></div>");
    var $aboutOverlaySecondaryHeader = $("<h3 class='aboutOverlay-secondaryHeader'>" + json.aboutMe[0].aboutmeTitle + "</h3>");
    var $aboutOverlayDescriptionOne = $("<p class='aboutOverlay-descriptionOne'>" + json.aboutMe[0].aboutmeParagraphOne + "</p>");
    var $aboutOverlayDescriptionTwo = $("<p class='aboutOverlay-descriptionTwo'>" + json.aboutMe[0].aboutmeParagraphTwo + "</p>");
    var $aboutOverlayButton = $("<button class='aboutOverlay-button'>Email Me</button>");
    
    var $openOverlayButton = $(document.getElementById('aboutMe-button'));

    $('body').append($aboutOverlay);

    $aboutOverlay
        .append($aboutOverlayWrapper);
    $aboutOverlayWrapper
        .append($aboutOverlayHeader)
        .append($aboutOverlayClose)
        .append($aboutOverlayProjectImageWrapper)
        .append($aboutOverlayContentWrapper);

    $aboutOverlayProjectImageWrapper
        .append($aboutOverlayProfilePicture);

    $aboutOverlayContentWrapper
        .append($aboutOverlayDescritionWrapper);

    $aboutOverlayDescritionWrapper
        .append($aboutOverlaySecondaryHeader)
        .append($aboutOverlayDescriptionOne)
        .append($aboutOverlayDescriptionTwo)
        .append($aboutOverlayButton);

    $(document).keydown(function (k) {
        if (k.keyCode == 27) {
            closeAboutOverlay();
        }
    });

    function openAboutOverlay() {
        $aboutOverlay.show();
    }

    function closeAboutOverlay() {
        $aboutOverlay.hide();
    }

    $openOverlayButton.click(function(){
        openAboutOverlay();
    });

    $(".aboutOverlay-close").click(function(){
       closeAboutOverlay();
    });
})();