/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    var element = $('#particles-js').find('canvas');
    element.addClass('canvas-absolute');
});
