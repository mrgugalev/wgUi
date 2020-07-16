google.charts.load("current", {packages:["calendar"]});
      google.charts.setOnLoadCallback(drawChart);

   function drawChart() {
       var dataTable = new google.visualization.DataTable();
       dataTable.addColumn({ type: 'date', id: 'Date' });
       dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
       dataTable.addRows([
          [ new Date(2019, 3, 13), 37032 ],
          [ new Date(2019, 3, 14), 38024 ],
          [ new Date(2019, 3, 15), 38024 ],
          [ new Date(2019, 3, 16), 38108 ],
          [ new Date(2019, 3, 17), 38229 ],
          // Many rows omitted for brevity.
          [ new Date(2020, 9, 4), 38177 ],
          [ new Date(2020, 9, 5), 38705 ],
          [ new Date(2020, 9, 12), 38210 ],
          [ new Date(2020, 9, 13), 38029 ],
          [ new Date(2020, 9, 19), 38823 ],
          [ new Date(2020, 9, 23), 38345 ],
          [ new Date(2020, 9, 24), 38436 ],
          [ new Date(2020, 9, 30), 38447 ]
        ]);

       var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

       var options = {
         title: "Activity",
         height: 400,
       };

       chart.draw(dataTable, options);
   }