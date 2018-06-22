/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
    $('#section-quotes').prependTo('#sections');
    $('#image-billy').attr('src', 'images/billy/billy-1.jpg');
    $('.quote').css('color', 'white').css('font-style', 'italic');
    $('#section-bio').css('color', 'grey').css('font-style', 'italic');
    $('#section-praise').css('color','grey').css('font-style','italic');


        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });


        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
