//JavaScript
var url = 'file.php';
$("#save").click(function() {
    $.ajax({
        url : url,
        type: 'post',
        data : {
            filename : $("#filename").val(),
            action : 'save',
            content : encodeURIComponent($('#html_content').val())
        }
    });
});
$("#delete").click(function() {
    $.ajax({
        url : url,
        type: 'post',
        data : {
            filename : $("#filename").val(),
            action : 'delete'
        }
    });
});
$("#load").click( function() {
    $.ajax({
        url : url,
        type: 'post',
        data : {
            filename : $("#filename").val(),
            action : 'load'
        },
        success : function(html) {
            $("#html_content").val(html);
        }
    });
});