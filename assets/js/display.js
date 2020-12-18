
const searchData = () => {
    var searchInput = document.getElementById('search-input').value.toUpperCase();
    var tableData = document.getElementById('table-data');
    var rowData  = tableData.getElementsByTagName('tr');
    for(var i=0 ;i <rowData.length;i++) {
       // search on second column
        let td = rowData[i].getElementsByTagName('td')[2];
        if(td) {
          let txtValue = td.textContent || td.innerHTML;
            if (txtValue.toUpperCase().indexOf(searchInput) > -1) {
                rowData[i].style.display = "";
            } else {
                rowData[i].style.display = "none";
            }
          }
        }
    }

