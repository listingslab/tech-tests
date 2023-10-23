# [SOLUTION](./SOLUTION.md)

# Mixcloud Coding Challenge

This folder contains a quick coding challenge - it shouldn't take much more than 2 hours (if you're finding it takes you longer feel free to stop and let us know why).

## Installation

Install the dependencies using `npm`. From the project's directory, run:

```bash
npm install
```

We recommend using node LTS (16.15.1) or above. For Windows we recommend installation under [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install).

## Running the code

Scripts have been provided in `package.json` for running lint, flow, tests, and the server. To compile the code and run the server run:

```bash
npm start
```

Then go to http://localhost:8080/

## Notes

1. You shouldn't need to use any dependencies but you're welcome to if you think it would help (unless the dependency does all of the work for you).

2. You're welcome to use Google but please don't copy and paste code.

3. Your code should be covered by unit tests and pass linting (tools have been provided including jest, react-testing-library, and eslint, along with scripts in package.json to run them).

4. Your code should be typed. `flow` has been included (it's what we use) but you're welcome to install TypeScript as an alternative, if you're more comfortable with that. We use the vscode extension to provide flowjs tooling, but you can run flow manually via `npm run flow`.

5. Please convert any Class based components to be functional components, replacing any React lifecycle method calls with relevant React hooks.

## The challenge

There are two parts to the challenge.

### `<DescriptionWithLinks />`

`<DescriptionWithLinks />` (`components/descriptionWithLinks.js`) is a component that would display a description on
a website. Currently it just puts the text on the page, but we would like you to add the ability to replace some links
with `<a>` tags. The component takes a `description` prop which is the description text including any links and a
`links` prop which is an array of `{url: "...", text: "..."}`. The resulting HTML should include the description text
with any links replaced with `<Link url="url">text</Link>` where `url` and `text` come from the `links` prop and
`<Link>` is from `components/link.js`.

For example, given the props `description="go to www.bbc.co.uk!", links={[{url: 'www.bbc.co.uk', text: 'The Beeb'}]}`
it would render as:

```javascript
<div>
    go to <Link url="www.bbc.co.uk">The Beeb</Link>!
</div>
```

Note: We suggest testing each of the links and ensure that they navigate to the intended pages. Please provide
realistic test cases to improve on the existing components, where appropriate.

### Loading/error states

The `<City />` and `<Name />` presentational components (`components/city.js` and `components/name.js` respectively)
have some code repetition that we would like you to make generic to provide common functionality to both components.

## Sending it back

When you're done, delete the `node_modules` folder, zip everything up, and send it to `becca.hilton@mixcloud.com`, `terry.morgan@mixcloud.com` using a cloud-based file-sharing platform of your choice.
