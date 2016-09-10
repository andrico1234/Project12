/**
 * Created by Home on 10/09/2016.
 */

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

// Work module generator

function workItemForLoop() {

    var htmlString = "<ul class='portfolio-list'>";
    for (var i = 0; i < json.portfolioProjects.length; i++) {
        htmlString += "<li class='work-item'>";
        htmlString += "<img src='" + json.portfolioProjects[i].image +"'>";
        htmlString += "<h3>" + json.portfolioProjects[i].name + "</h3>";
        htmlString += "<p>" + json.portfolioProjects[i].brief + "</p>";
        htmlString += "<button>Learn More</button>";
        htmlString += "</li>";
    }
    htmlString += "</ul>";
    $(".portfolio").append(htmlString)
}

workItemForLoop();
