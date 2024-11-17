/*
task 1

API is an Application Programming Interface which can access data 
from various sources through requests and responses

In web development, API helps with receiving specific up-to-date information from different servers;
makes it possible for software systems to communicate with each other

In real life example: 
Ordering a cup of coffee - 
    you - program which makes am API call
    your request for coffee - API call
    barista - server
    a cup which you receive - response from the server
*/


/*

task 2

HTTP methods - types of requests you can make based on the purpose of
the request and what outcome is expexted

1. GET method - default method, used to retrieve data from the server
    Example: get data about all exhibits in the art gallery with additional info (date created, author, floor number, id of the exhibit)

2. POST method - sends data to the server, creating a new recourse
    Example: placing a new online order

3. PUT method - sends the data to the server, altering it
    Example: updating information about a booked hotel room (duration of stay, number of guests, etc.)

4. DELETE method - deletes specified resource from a server
    Example: cancelling your online order
*/



async function getData() {
    try {
        let info = await fetch("https://api.coinbase.com/v2/currencies");
        if (!info.ok) {
            throw new Error("Error! Details: " + info.status);
        }
        let data = await info.json();

        document.getElementById("table").style.display = "block";

        for (item of data.data){
            let childRow = document.createElement('tr');

            let colOne = document.createElement('td');
            let colTwo = document.createElement('td');
            let colThree = document.createElement('td');

            colOne.textContent = item.id;
            colTwo.textContent = item.name;
            colThree.textContent = item.min_size;

            childRow.appendChild(colOne);
            childRow.appendChild(colTwo);
            childRow.appendChild(colThree);

            let parentTable = document.getElementById("table")

            parentTable.appendChild(childRow);
        }

    } catch(error) {
        console.log("An error has occured: " + error);
    }
}