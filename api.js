const api_url =  
      "https://api.covid19api.com/summary"; 
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    if (response) { 
        hideloader(); 
    } 
    show(data); 
} 
// Calling that async function 
getapi(api_url); 
  
// Function to hide the loader 
function hideloader() { 
    document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
    let tab =  
        `<tr> 
          <th>Country</th> 
          <th>Cases</th> 
          <th>Recovered</th> 
          <th>Deaths</th> 
         </tr>`; 
    
    // Loop to access all rows  
    for (let r of data.list) { 
        tab += `<tr>  
    <td>${r.Country} </td> 
    <td>${r.TotalConfirmed}</td> 
    <td>${r.TotalRecovered}</td>  
    <td>${r.TotalDeaths}</td>           
</tr>`; 
    } 
    // Setting innerHTML as tab variable 
    document.getElementById("employees").innerHTML = tab; 
} 