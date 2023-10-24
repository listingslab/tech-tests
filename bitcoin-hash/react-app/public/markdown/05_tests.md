## ![alt text](../svg/logo16.svg "Bitcoin Hash Logo")  Tests

> CI, Jest, GitHub Workflows, TDD 


We use a TDD (Test Driven Development) approach to this project. React has Jest built in, so we'll use that. What we’ll do is start the test suite and keep it running during development time. 

#### React Jest
![alt text](../png/test-driven-developemnt.png "TDD")


#### Test Driven Development

Install dependencies and start the React test suite

```javascript
cd <working-dir>
git clone https://github.com/listingslab/bitcoin-hash
cd bitcoin-hash
npm install
npm test
```

Any time any test breaks, we investigate and thus build better software. The same tests are used in the Continuous Integration [ci.yaml](https://github.com/listingslab/bitcoin-hash/blob/master/.github/workflows/ci.yml) so team members can’t merge broken code into important branches

![alt text](../png/test-driven-developemnt-fail.png "TDD")

> Fun Fact. Know what yaml stands for? Yet Another Markup Language


#### Pull Request checks
![alt text](../png/github-pr-checks.png "TDD")

#### [Github Continuous Integration](https://github.com/listingslab/bitcoin-hash/blob/master/.github/workflows/ci.yml)  

`/.github/workflows/ci.yml`  

![alt text](../png/github-ci-workflow.png "TDD")
