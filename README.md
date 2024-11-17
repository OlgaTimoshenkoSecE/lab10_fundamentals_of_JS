# lab10
#task 1

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


#task 2

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


#task 3 - in lab10.js & index.html files


#task 4

fetch API 
    + more simple
    + allows to handle both errors and responses
    - can't track progress for request
    - doesn't have timeouts

XMLHttprequest
    + callback approach
    + advanced control over request lifecycle
    - more verbose
    - can't abort request

XMLHttprequest might be preferred when dealing with old browsers which don't support fetch() or your require advanced control over request lifecycle

fetch API is preferred for a simpler, cleaner code, when you want to follow modern web development standarts or handle different features better

