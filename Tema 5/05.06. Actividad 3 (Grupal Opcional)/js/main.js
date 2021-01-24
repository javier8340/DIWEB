
$(document).ready(function (){

    $('#luckmoshy').luckmoshyPagination({

        // the total number of pages
        totalPages: 5,

        // the current page to show on start
        startPage: 1,

        // maximum visible pages
        visiblePages: 5,

        // callback function
        onPageClick: function (event, page) {
            $(document).scrollTop(0);
            $('.page-active').removeClass('page-active');
            $('#container-pagnation'+page).addClass('page-active');


        }

    });

    $.getScript("https://unpkg.com/bootstrap-table@1.18.2/dist/extensions/multiple-sort/bootstrap-table-multiple-sort.js", function (){
        var $table = $('.tabla-sort')
        $table.bootstrapTable()
    })

    var $table = $('.tabla-print')
    $table.bootstrapTable()
     $table = $('.tabla-sticky')
    $table.bootstrapTable()
    // $table = $('#table1')
    // $table.bootstrapTable()


})









$(function () {
    $('.pop').popover({
        container: 'body'
    })
})