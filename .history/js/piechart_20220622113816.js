            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['corechart']});
      
            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);
      
            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawSheetName() {
              var queryString = encodeURIComponent('SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8');
        
              var query = new google.visualization.Query(
                  'https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString);
              query.send(handleSampleDataQueryResponse);
            }
        
            function handleSampleDataQueryResponse(response) {
              if (response.isError()) {
                alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
                return;
              }
        
              var data = response.getDataTable();
              var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
              chart.draw(data, { height: 400 });
            }

            