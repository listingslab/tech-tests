## Kingmakers

> The candidate is required to develop a simple React application that displays a list of campaigns that can be filtered by campaign name and date range.

https://github.com/dimik/km-test-case

## Analysis & Review

Hypothetically we are at a point where a developer (me) has raised a problem Pull Request. The problem being that the requirements include the ability to filter a list of Campaigns by date range and it does not

## Quality Assurance

Because this task is unusually clear and precise, I can infer the Quality Assurance tests that my feature must pass include but are not be limited to;

- Does it filter by Search String?
- Does it filter by Date?
- Does the global method called AddCampaigns work?
- Does it look nice?

## Result

### The Solution fails the second test. The bug is unmissable because it is in one of the few actual requirements

As a developer that’s a bad thing. I knew my code would fail that QA test and I committed it anyway. Depending on how well a teams’ process works, the number of iterations required to complete and merge the task should be minimised. When the Scrum Master gets back to me correctly complaining that my PR has a serious bug in it, I should say...

"Sorry, I shouldn’t have raised a PR that didn’t properly pass QA at that time"

### What the code is meant to do

The UI components are connected to a persisted redux backend, so when their onChange events are triggered, the redux store is updated. In the Campaigns component, the a full list of data is connected to redux, as are the filter values

The idea is a filtered array is created and rendered as changes happen to the redux store

### Why it doesn’t work 

The idea is that we loop through all the Campaigns stored in redux and decide which should be included in   `filteredCampaigns` according to the filter values. This bit doesn't work. 

> Lines 72-92 in [Campaigns.tsx](https://github.com/listingslab/km-test-case/blob/master/src/Kingmakers/Campaigns/Campaigns.tsx)

```javascript
if (fromDate){
    if (!dayjs(campaigns[i].startDate).isBefore(dayjs(fromDate))) excludeByDate = true
    if (!dayjs(campaigns[i].endDate).isBefore(dayjs(fromDate))) excludeByDate = true
}
```

### How I'd fix it

Why is is that dates always cause such problems? Whenever dates are causing problems I have a go-to approach which works every time. I convert everything to _unix epoch dates_, which are a number. 

Specifically they are the number of milliseconds which have elapsed since 1st Jan 1970. Ever so simple and bulletproof to compare, sort etc. Just don't try to read them if you're human

#### Links 

- [Task](https://github.com/dimik/km-test-case)
- [Example](https://dimik.github.io/km-test-case/)
- [Solution Demo (with bug)](https://kingmakers-test.web.app/)
- [GitHub repo](https://github.com/listingslab/km-test-case)
    - [Campaign.tsx](https://github.com/listingslab/km-test-case/blob/master/src/Kingmakers/Campaigns/Campaigns.tsx)

_Tech Tests are a valid part of the recruitment process. You can't tell how someone codes by how they talk_
