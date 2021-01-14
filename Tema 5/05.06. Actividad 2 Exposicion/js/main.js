
$(document).ready(function (){

    $('#luckmoshy').luckmoshyPagination({

        // the total number of pages
        totalPages: 6,

        // the current page to show on start
        startPage: 1,

        // maximum visible pages
        visiblePages: 3,

        // callback function
        onPageClick: function (event, page) {
            $('.page-active').removeClass('page-active');
            $('#container-pagnation'+page).addClass('page-active');
        }

    });
})
