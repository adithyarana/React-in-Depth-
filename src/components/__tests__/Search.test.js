import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import mockreslistdata from "../mocks/mockreslistdata.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// using mock fetch function

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockreslistdata);
    },
  });
});

it("should render the body component with search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchinput = screen.getByTestId("search");

  fireEvent.change(searchinput, { target: { value: "Burger" } });
  fireEvent.click(searchbtn);

  const rescard = screen.getAllByTestId("rescard");

  expect(rescard.length).toBe(1);
});

it("should filter the top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardbeforfilter = screen.getAllByTestId("rescard");
    expect(cardbeforfilter.length).toBe(8);
  
    const topratedbtn = screen.getByRole("button", { name: "Top Rated restaurants" });
    fireEvent.click(topratedbtn);

    const cardafterfilter = screen.getAllByTestId("rescard");
    expect(cardafterfilter.length).toBe(8);
    
    
  });
  