import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Appstote from "../../utils/Appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with login button", () => {
  render(
    <Provider store={Appstote}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginbtn = screen.getByRole("button",{name:"Login"})
  expect(loginbtn).toBeInTheDocument();
});

it("should change login button to logout button on click", () => {
  render(
    <Provider store={Appstote}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const Loginbtn = screen.getByRole("button",{name:"Login"})
  fireEvent.click(Loginbtn) // fireevent is used to simulate user actions after click
  const logoutbtn = screen.getByRole("button",{name:"Logout"})
  expect(logoutbtn).toBeInTheDocument();
});

