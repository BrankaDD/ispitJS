/* Write your solutions here to get the data from https://covid19api.com (find the API URL on that page - connect to the "summary" endpoint.)
   Use this text in order to save time: 
   
   COVID-19: Worldwide Statistics

   There is a total of XXX confirmed COVID-19 cases worldwide. So far, XXX people have died because of COVID-19. 
   Data is updated automatically once a day. Data updated on XXX. NOTE: (Replace XXX with values from API).
*/

const url = "https://api.covid19api.com/summary";

fetch (url) 
    .then (response => response.json())
    /*.then (data => document.getElementById("wrapper").innerHTML= `There is total of ${data.Global.TotalConfirmed} COVID-19 cases
    worldwide. So far, ${data.Global.TotalDeaths} people have died because of COVID-19. `) */
    .then (data => showData(data));

    function showData(data) {
        let tab = 
           `<tr>
               <th>Country</th>
               <th>TotalConfirmed</th>
               <th>TotalDeaths</th>
         </tr>`;

         for (let a of data.Countries) {
             tab = tab + `<tr>
                  <td> ${a.Country} </td>
                  <td> ${a.TotalConfirmed} </td>
                  <td> ${a.TotalDeaths} </td>
             </tr>`;
         }

         document.getElementById("covid-data").innerHTML= tab;
    }


