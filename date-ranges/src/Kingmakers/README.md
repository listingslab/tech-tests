## KM Test Case App

Develop a simple React application that displays a list of campaigns that can be filtered by campaign name and date range

- [Firebase hosted demo app](https://kingmakers-test.web.app)
 
 > !important when testing the app with the AddCampaigns() method in console, please make sure there is no whitespace in the JSON. eg;

 ```javascript
[{"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2018","Budget":88377},{"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018","Budget":608715},{"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2017","Budget":239507},{"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017","Budget":179838},{"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","Budget":837850},{"id":6,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2017","Budget":858131},{"id":7,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018","Budget":109078},{"id":8,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018","Budget":272552},{"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017","Budget":301919},{"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2/2017","Budget":505602}]
```

#### Tests

Implements a global method called ‘AddCampaigns’ that accepts an array of campaigns and renders them in the application. Method will be called from the browser’s JavaScript console for testing purposes 

- Method can be called multiple times?
- New campaigns being added to the existing list?

Test Example [JSON campaigns array](../../test.json)

#### Features

Progressive Web App which displays a single page with the following required elements: 
    - A list of campaigns showing; 
        - Name
        - Start Date
        - End Date
        - Active status (based on whether the current date falls within the start and end date range)
        - Budget (in USD)
        - A search form above the list to filter campaigns by name.
        - A date range component for filtering campaigns by start and end dates.

#### QA 

- Campaigns with start dates within the selected date range must be displayed
- Campaigns with end dates within the selected date range must be displayed
- End dates cannot be selected before start dates
- Campaigns with end dates before start dates must not be displayed

______

`/src/Kingmakers/setGlobals.tsx`

These get attached to the window object

```javascript
// check if globals are already set, and if not... set 'em
// window. keyPress Enter
// window.AddCampaigns (data)    
// window.attach object listener
```