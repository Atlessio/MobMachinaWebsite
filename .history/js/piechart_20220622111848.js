            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['corechart']});
      
            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);
      
            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawChart() {
      
              // Create the data table.
              var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/13xoUE-wDI4ql1Oaj1rcmW8vjFO-ra6Cyhcof6O-n9lE/gviz/tq?sheet=Charts&headers=1&range=A1:b5&tq=');
              query.send(handleQueryResponse);
      
              // Set chart options
              var options = {
                'legend':'left',
                'title':'My Big Pie Chart',
                'is3D':true,
                'width':300,
                'height':200
              }
      

            }

            function handleQueryResponse(response) {
              var data = response.getDataTable();

              // Instantiate and draw our chart, passing in some options.
              var chart = new google.visualization.PieChart(document.getElementById('piechart_div'));
              chart.draw(data, options);
            }