# 🍔 React In-Depth – Food Ordering App (Swiggy Live API)

This project is a **comprehensive React application** that connects to the **Swiggy live API** to build a real-world food ordering platform.

It covers almost **all advanced concepts** of modern React, including:

* ⚛️ React Router
* 🧠 Redux Toolkit
* ⚙️ Custom Hooks
* 🧪 Testing (Unit, Integration, E2E)
* ⚡ Performance Optimization (Code Splitting, Lazy Loading)

---

## 🔍 Project Overview

This app fetches live data from the Swiggy API to display restaurants, menus, cart functionality, and more.

It’s perfect for developers who want to **learn React in-depth** by working on a real-world project.

---

## 🧱 Folder Structure

```
/src
  ├── components
  ├── pages
  ├── utils
  ├── redux
  ├── hooks
  └── __tests__      ← All test cases go here
```

---

## 🧠 React Concepts Used

### ✅ Custom Hooks

Custom hooks are functions that start with `use`. They help extract and reuse logic across components.

```js
function useOnlineStatus() {
  const [status, setStatus] = useState(true);
  // logic...
  return status;
}
```

**Custom Hooks Summary**

> Custom hooks are the functions that start with `use`.

---

## ⚡ Performance Optimization Techniques

To avoid bundling everything in a single JavaScript file, we've used:

1. **Chunking**
2. **Code Splitting**
3. **Lazy Loading**
4. **On-Demand Loading**
5. **Dynamic Import**

These techniques improve performance by loading only the necessary code when needed.

---

## 🧰 Redux Toolkit Implementation

* ✅ **Build store**
* 🔗 **Connect store to app**
* 🧩 **Create Slice** (e.g., cartSlice)
* 🚀 **Dispatch Actions**
* 🔍 **Use Selectors to get state**

**Redux Summary**

> Build store, connect to app, create slice (e.g., cart slice), dispatch actions, use selectors to access state.

Redux simplifies state management and ensures a predictable state across components.

---

## 🧪 Testing in React

We’ve implemented **three types of testing**:

| Type                | Description                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| Unit Testing        | Testing the smallest piece of code (e.g., a single function/component) |
| Integration Testing | Testing the interaction between multiple components/modules            |
| End-to-End (E2E)    | Testing the entire app workflow from start to finish                   |

### Types of Testing Developer Can Do

1. Unit Testing
2. Integration Testing
3. End-to-End Testing

### Explanation of Testing Types

* **Unit Testing**: Testing the smallest unit of code.
* **Integration Testing**: Testing the interaction between different components or modules.
* **End-to-End Testing**: Testing the entire software system from start to end.

---

### 🧬 How We Set Up Testing

> We use **Jest + React Testing Library**

#### 🔧 Installation & Config Steps:

* Install react testing library
* Install Jest
* Install Babel dependencies
* Configure Babel
* Configure Parcel config file to disable default Babel transformation
* Jest configuration file setup using:

  ```bash
  npm init jest@latest
  ```
* Install jsdom library
* Install `@babel/preset-react` to test JSX in Jest
* Include `@babel/preset-react` in `babel.config.js`
* Install:

  ```bash
  npm i -D @testing-library/jest-dom
  ```

Jest uses JSDOM as a runtime environment to simulate a browser-like environment for testing JavaScript code that interacts with the DOM. JSDOM is a pure JavaScript implementation of the DOM and browser APIs that runs in Node.js, allowing tests to run without the need for an actual browser.

When using Jest, the test environment can be set to `jest-environment-jsdom`.

#### ⭐ Notes:

* `__tests__` folder is called **Dunder tests**.
* Use `jest --watchAll` to automatically run test cases.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

To run tests:

```bash
npm run test
```

---

## 🤝 Contributing

If you're learning React and want to contribute, feel free to fork this repo and try building new features or optimizing existing ones!

---

## 📚 Learnings

This project is a goldmine for:

* React beginners to intermediate devs
* Understanding real-world state management with Redux
* Learning how to test React applications
* Implementing performance techniques like lazy loading and code splitting

---

## 🙌 Let's Connect

If you found this useful, give it a ⭐ on GitHub!
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/adithya-rana-7859b9287/) or follow for more projects!
