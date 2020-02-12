/**********************************************************************************/
/****                             Kevin Atherton                               ****/
/****                             April 30, 2019                               ****/
/****                                YouApp                                    ****/
/****  Re-purposed as my cat app since I don't have many great pictures of me  ****/
/**********************************************************************************/

"use_strict";

var counter = 0; // counter for the slideshow of pictures
var timer; // timer variable for the slideshow
var imageCache = []; // image cache array for slideshow images

var $ = function(id) { return document.getElementById(id); };

var startSlideshow = function() {
    counter = (counter + 1) % imageCache.length;
    $("slideshow").src = imageCache[counter].src;
};

window.onload = function() {
    var listNode1 = $("lokiGrowth"); // the first UL element containing rollover images
    var listNode2 = $("lokiSlideshow"); // the second UL element containing slideshow images
    var links1 = listNode1.getElementsByTagName("a"); // from the first node list, assign a elements to links1
    var links2 = listNode2.getElementsByTagName("a"); // from the second node list, assign a elements to links2

    // preload the images from both list nodes
    var image;
    for (var i = 0; i < links1.length; i++) {
        image = new Image(); // creates new image object
        image.src = links1[i].href; // assigns the links objects image href, loading the image
    }

    for (var i = 0; i < links2.length; i++) {
        image = new Image();
        image.src = links2[i].href;
        imageCache[imageCache.length] = image;
    }

    // hover events for the rollover image on the left side
    $("rolloverImage").onmouseenter = function() {
        $("rolloverImage").src = "images/rollover2.JPG"; // when mouse enters img element, display 1 year later image of Loki
    }

    $("rolloverImage").onmouseleave = function() {
        $("rolloverImage").src = "images/rollover1.JPG"; // when mouse leaves img element, display default Loki image
    }

    // attaches event handlers to the slideshow controls
    $("start").onclick = function() {
        startSlideshow();
        timer = setInterval(startSlideshow, 2000);
        $("start").disabled = true;
        $("pause").disabled = false;
    };

    $("pause").onclick = function() {
        clearInterval(timer);
        $("start").disabled = false;
        $("pause").disabled = true;
    };
};