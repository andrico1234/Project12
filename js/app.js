/**
 * Created by Home on 10/09/2016.
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
    
    function workItemForLoop() {

        var htmlString = "<ul class='portfolio-list'>";
        for (var i = 0; i < json.portfolioProjects.length; i++) {
            htmlString += "<li class='work-item' data-index='" + i + "'>";
            htmlString += "<img src='" + json.portfolioProjects[i].image + "'>";
            htmlString += "<h3>" + json.portfolioProjects[i].name + "</h3>";
            htmlString += "<p>" + json.portfolioProjects[i].brief + "</p>";
            htmlString += "<button class='learn-more'>Learn More</button>";
            htmlString += "</li>";
        }
        htmlString += "</ul>";
        $(".portfolio").append(htmlString)
    }

    workItemForLoop();

})();
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
    var modalCounter;

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

    $(document).keydown(function (k) {
        if (k.keyCode == 39) {
            nextProject();
        }
    });

    $(document).keydown(function (k) {
        if (k.keyCode == 37) {
            prevProject();
        }
    });

    $(document).keydown(function (k) {
        if (k.keyCode == 27) {
            closeOverlay();
        }
    });

    $('.work-item').click(function () {
        var jsonNumber = this.dataset.index;
        openOverlay(jsonNumber);
    });

    $modalClose.click(function () {
        closeOverlay();
    });

    $('.nextButtonDiv').click(function () {
        nextProject();
    });

    $('.previousButtonDiv').click(function () {
        prevProject();
    });

    function closeOverlay() {
        $mainOverlay.hide();
    }

    function nextProject() {
        if (modalCounter + 1 < json.portfolioProjects.length) {
            modalCounter++;
        } else {
            modalCounter = 0;
        }
        $('.modalHeader').html(json.portfolioProjects[modalCounter].name);
        $('.modalProjectDescription').html(json.portfolioProjects[modalCounter].description);
        $('.modalSecondaryHeader').html('Project ' + (~~modalCounter + 1));
        $('.modalProjectDestination').attr('href', json.portfolioProjects[modalCounter].destination);
        $('.modalProjectImage').attr('src', json.portfolioProjects[modalCounter].image);
    }

    function openOverlay(number) {
        modalCounter = number;
        $('.modalHeader').html(json.portfolioProjects[number].name);
        $('.modalProjectDescription').html(json.portfolioProjects[number].description);
        $('.modalSecondaryHeader').html('Project ' + (~~number + 1));
        $('.modalProjectDestination').attr('href', json.portfolioProjects[number].destination);
        $('.modalProjectImage').attr('src', json.portfolioProjects[number].image);
        $mainOverlay.show();
    }

    function prevProject() {
        if (modalCounter > 0) {
            modalCounter--;
        } else {
            modalCounter = json.portfolioProjects.length;
            modalCounter--;
        }
        $('.modalHeader').html(json.portfolioProjects[modalCounter].name);
        $('.modalProjectDescription').html(json.portfolioProjects[modalCounter].description);
        $('.modalSecondaryHeader').html('Project ' + (~~modalCounter + 1));
        $('.modalProjectDestination').attr('href', json.portfolioProjects[modalCounter].destination);
        $('.modalProjectImage').attr('src', json.portfolioProjects[modalCounter].image);
    }
})();
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