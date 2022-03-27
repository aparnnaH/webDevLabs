function deselectAll() {
    $(document).ready(function () {
        document.getElementById("spreadsheet").style.backgroundColor = 'white';
        document.getElementById("headers").style.backgroundColor = '#d0d0d0';
    });
}

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
            mark = $(tr).find('td').eq(index).text();
            countGrade(mark);
            drawChart(count);
        });
    });
}

function selectColumn(){ 
    $(document).ready(function () {
        $("#spreadsheet tr th").click(function() {
            $("#spreadsheet td").removeClass("selected");
            var index = $(this).index();
            var count = [0,0,0,0,0];
            var mark = 0.0;
            $("#spreadsheet tr").each(function(i, tr) {
                $(tr).find('td').eq(index).addClass("selected");
                mark = $(tr).find('td').eq(index).text();
                countGrade(mark);
            });
            drawChart(count);
        });
    });
}

function countGrade(mark){
    switch( getGrade(mark)) {
        case 'A':
          count[0] += 1
          break;
        case 'B':
            count[1] += 1
            break;
        case 'C':
            count[2] += 1
            break;
        case 'D':
            count[3] += 1
            break;
        case 'F':
            count[4] += 1
            break;
        default:
            break;
    }
}

function drawChart(count){
    var average = [0.0,0.0,0.0,0.0];
    var total = count[0] + count[1] + count[2] + count[3] + count[4]
    for (let i = 0; i < count.length; i++) {
        average[i] = count[i] / total;
    }
    //chart
    var data = {
        header: ["Grade", "Frequency (%)"],
        rows: [
            ["A", count[0]],
            ["B", count[1]],
            ["C", count[2]],
            ["D", count[3]],
            ["F", count[4]]
    ]};
    var chart = anychart.bar();
    chart.data(data);
    chart.title("Grade Distribution");
    chart.container("container");
    chart.draw();
}

function getGrade(mark) {
    if (mark < 50.0) {
        return 'F';
    } else if (mark < 60.0) {
        return 'D';
    } else if (mark < 70.0) {
        return 'C';
    } else if (mark < 80.0) {
        return 'B';
    } else {
        return 'A';
    }
}
