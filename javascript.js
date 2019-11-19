$(document).ready(function(){

    $(document).on('click', '.projectLink', function () {
        let link = $(this).attr('data')
        var showproject = (`<iframe src="${link}" width="100%" height = "100%"></iframe>`)
        $('.projectContent').html(showproject);
    });










});