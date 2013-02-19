(function($) {
    $(document).ready(function() {
        $('#content-core').infinitescroll({
            navSelector  : "div.listingBar",
            nextSelector : "div.listingBar span.next a",
            itemSelector : "#content-core"
        });
    });
})(jQuery);
