import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MenuPage from "../MenuPage";
import { BrowserRouter } from "react-router-dom";
import mockresmenu from "../mocks/mockresmenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Appstote from "../../utils/Appstore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockresmenu);
    },
  });
});

it("should render the restaurant menu page ", async () => {
  await act(async () =>
    render(
      <Provider store={Appstote}>
        <BrowserRouter>
          <MenuPage />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordianheader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianheader);

  const itemlist = screen.getAllByTestId("itemlist");

  expect(itemlist.length).toBe(20);

  const addbtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addbtn[0]);
});
