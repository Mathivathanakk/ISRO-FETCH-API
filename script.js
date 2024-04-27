//fetch the data from api of customer satellites

const url = fetch("https://isro.vercel.app/api/customer_satellites");
url
  .then((data) => data.json()) //converted to json format and to object
  .then((result) => {
    //displaying the data in the table
    const objectData = result.customer_satellites;
    let tableData = "";
    objectData.map((values) => {
      tableData += ` <tr>
      <td>${values.id}</td>
      <td>${values.country}</td>
      <td>${values.launcher}</td>
      <td>${values.launch_date}</td>
      <td>${values.mass}</td>
    </tr>`;
    });
    //getting the html elements and adding the data in innerhtml
    document.getElementById("tableBody").innerHTML = tableData;
  }) //else catch the error
  .catch((error) => console.log(error));

//fetching the data form api of ISRO centres

const response1 = fetch("https://isro.vercel.app/api/centres");
response1
  .then((data1) => data1.json()) //converted to json format and to object
  .then((result1) => {
    // console.log(result1);
    //displaying the data in the table
    const objectData1 = result1.centres;
    let tableData1 = "";
    objectData1.map((val) => {
      tableData1 += ` <tr>
        <td>${val.id}</td>
        <td>${val.name}</td>
        <td>${val.Place}</td>
        <td>${val.State}</td>
        </tr>`;
    });
    //getting the html elements and adding the data in innerhtml
    document.getElementById("tableBody1").innerHTML = tableData1;
  })
  .catch((error) => console.log(error)); //else catch the error
