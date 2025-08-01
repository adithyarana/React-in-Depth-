<h1>custom hooks are the functions that start with use</h1>


<h1>we have the bundle of all code in one js file so to solve this we should use these techniques  </h1>

1 chunking 
2 codesplitting 
3 lazy loading 
4 on demand loading 
5 dynamic import

<h1>redux toolkit</h1>

build store
connect store to app 
slice (card slice)
dispatch (action)
selector (get state)

<h1>types of testing developer can do  </h1>
1 unit testing 
2 integration testing  
3 end to end testing 


<h1>types of testing </h1>
what is unit testing ?
unit testing is the process of testing the smallest unit of code.

what is integration testing ?
integration testing is the process of testing the interaction between different components or modules of a software system.

what is end to end testing ?
end to end testing is the process of testing the entire software system from start to end.


<h1>setting up testing in our app </h1>

- install react testing libraray
- install jest
- install babel dependenecies
- configure babel 
- configure parcel config file to disable defalt babel transformation
- jest configuration file setup  - npm init jest@latest
- install js dom libraray
- install  @babel/preset-react to test  jsx code in jest  
- include @babel/preset-react in babel.config.js
- install npm i -D  @testing-library/jest-dom

Jest uses JSDOM as a runtime environment to simulate a browser-like environment for testing JavaScript code that interacts with the DOM. JSDOM is a pure JavaScript implementation of the DOM and browser APIs that runs in Node.js, allowing tests to run without the need for an actual browser.
When using Jest, the test environment can be set to jest-environment-jsdom, which provides the necessary setup to run tests in a JSDOM environment.


<h1>__tests__ this is called dunder tests </h1>

<h1>to automatically run test cases we use jest --watchAll</h1>