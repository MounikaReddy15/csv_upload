

// console.log('connected')
// let results = `<%-results%>`
// console.log(results)

// var x= `<%-JSON.stringify(results)%>`;
// console.log(x , "xxx");

// var searchBox = document.getElementById('search-box');
// var tabledata = document.getElementsByTagName('td')
// // console.log(tabledata[0].innerHTML, 'tabledata');
// var displayData = document.getElementById('display-Data')
// console.log(displayData.value, "display");
// function searchData() {
//     console.log(searchBox.value)
//     let matches = tabledata[0].filter(hero => {
//         //  regular expression is a way to  search 
//         const regex = new RegExp(`^${searchBox.value}`, 'gi');
//         return hero.match(regex);
//      });
//      console.log(matches, "matches")
// }

const searchData = () => {
    var searchInput = document.getElementById('search-input').value.toUpperCase();
    var tableData = document.getElementById('table-data');
    var rowData  = tableData.getElementsByTagName('tr');
    for(var i=0 ;i <rowData.length;i++) {
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

