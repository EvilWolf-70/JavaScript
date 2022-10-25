// const searchtable = () => {
//   let filter = document.getElementById("search-box").value.toUpperCase();

//   let tablesrc = document.getElementById("table-content");
//   let tr = tablesrc.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     let td = tr[i].getElementsByTagName("td")[0];

//     if (td) {
//       let textvalue = td.textContent || td.innerText;
//       if (textvalue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// };

let filter = document.getElementById("search-box");
const rows = document.querySelectorAll("tbody tr");
console.log(rows);

filter.addEventListener("keyup", function (event) {
  //   console.log(event);
  const q = event.target.value.toLowerCase();
  rows.forEach((row) => {
    // console.log(row);
    row.querySelector("td").textContent.toLowerCase().startsWith(q)
      ? (row.style.display = "")
      : (row.style.display = "none");
  });
});
