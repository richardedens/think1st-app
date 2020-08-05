var zoomLevel = 1.0;
var click = {
    x: 0,
    y: 0
};
var newOrigin = {
    x: 0,
    y: 0
};
$(document).ready(function() {
    /*$(".editor-content-zoomable").mousedown(function() {
        scrollNow = true;
    });
    $(".editor-content-zoomable").mousemove(function(event) {
        if (scrollNow == true) {
            $(".editor-content").scrollTo(event.pageX, event.pageY);
        }
    });
    $(".editor-content-zoomable").mouseup(function() {
        scrollNow = false;
    });*/
    $(".editor-content-zoomable").dblclick(function(evt) {

        newOrigin.x = ((evt.pageX - $(".editor-content").position().left + $(".editor-content").scrollLeft()) / zoomLevel);
        newOrigin.y = ((evt.pageY - $(".editor-content").position().top + $(".editor-content").scrollTop()) / zoomLevel);

        var newDiv = document.createElement("div");
        newDiv.className = "editor-note";
        newDiv.style = "left: " + (newOrigin.x) + "px;top: " + (newOrigin.y) + "px;";
        newDiv.innerHTML = "New Issue <div class=\"editor-note-avatar\"><img src=\"/assets/images/users/user-5.jpg\" class=\"rounded-circle avatar-border-white avatar-md\" alt=\"friend\"></div>";
        $(".editor-content-zoomable").append(newDiv);
        $(newDiv).draggable({
            containment: "parent",
            scroll: false,

            start: function(event) {
                click.x = event.clientX;
                click.y = event.clientY;
            },

            drag: function(event, ui) {

                var original = ui.originalPosition;

                // jQuery will simply use the same object we alter here
                ui.position = {
                    left: (event.clientX - click.x + original.left) / zoomLevel,
                    top: (event.clientY - click.y + original.top) / zoomLevel
                };

            }
        });
    });
})
$(window).bind('mousewheel DOMMouseScroll', function(event) {
    if (event.shiftKey == true) {
        event.preventDefault();
        if (event.originalEvent.wheelDelta < 0) {
            zoomLevel += 0.01;
            $(".editor-content-zoomable").css("transform", "scale(" + (zoomLevel) + ")");
            $(".editor-content-zoomable").css("transform-origin", "left top");
        } else {
            zoomLevel -= 0.01;
            $(".editor-content-zoomable").css("transform", "scale(" + (zoomLevel) + ")");
            $(".editor-content-zoomable").css("transform-origin", "left top");
        }
    }
});