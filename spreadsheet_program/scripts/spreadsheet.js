function deselectAll() {
    $(document).ready(function () {
        document.getElementById("spreadsheet").style.backgroundColor = 'white';
        document.getElementById("headers").style.backgroundColor = '#d0d0d0';
    });
}
deselectAll();

function selectRow(){ 
    $(document).ready(function () {
        $('tr').click(function () {
            deselectAll();
            if(this.style.background == "white") {
                $(this).css('background', '#e0e0ff');
            }
            else {
                $(this).css('background', 'white');
            }
        });
    });
}
selectRow();

function selectColumn(){ 
    $(document).ready(function () {
        $("#spreadsheet tr th").click(function() {
            $("#spreadsheet td").removeClass("selected");
            var index = $(this).index();
            $("#spreadsheet tr").each(function(i, tr) {
                $(tr).find('td').eq(index).addClass("selected");
            });
        });
    });
}
selectColumn();