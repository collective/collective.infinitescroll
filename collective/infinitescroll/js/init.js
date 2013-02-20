(function($) {

    var batch_size = 10;
    var next_button_selector = 'div.listingBar span.next a';

    function plone_path(next_page) {
        path = $(next_button_selector).attr('href');
        if (path.match(/^(.*?b_start.*?$)/)) {
            // Plone Batching
            parsed_path = path.match(/^(.*?b_start:int=)\d*(.*?$)/).slice(1);
            return parsed_path[0] + (next_page-1)*batch_size + parsed_path[1] + '&b_size='+ batch_size + '&ajax_load=1';
        }
        return [''];
    }

    $(document).ready(function() {
        var last_page = $('div.listingBar a:last').attr('href');
        var last_page_paths = last_page.match(/^(.*?b_start:int=)(\d*)(.*?$)/).slice(1);
        var max_page = (last_page_paths[1]/batch_size)+1;

        $('#content-core').infinitescroll({
            //debug: true,
            navSelector:  "div.listingBar",
            nextSelector: next_button_selector,
            itemSelector: "#content-core",
            path: plone_path,
            maxPage: max_page
        });
    });

})(jQuery);
