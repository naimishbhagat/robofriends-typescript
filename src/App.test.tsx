import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "./App";
import userEvent from "@testing-library/user-event";
const stubbedData = [
  {
    id: 1,
    name: "Naimish Bhagat",
    username: "nb",
    email: "nb@april.biz",
  },
  {
    id: 2,
    name: "Mitchell Bhagat",
    username: "mb",
    email: "mb@melissa.tv",
  },
];

function fetchMock() {
  return new Promise((resolve) =>
    resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(stubbedData),
    })
  );
}

function rejectFetchMock404() {
  return new Promise((reject) =>
    reject({
      ok: false,
      status: 404,
      json: () => Promise.reject("Not found"),
    })
  );
}

function rejectFetchMock() {
  throw new Error("Unknown Error");
}

let container: any = null;
describe("<App />", () => {
  // runs after all tests have finished
  beforeEach(async () => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  //
  it("should renders snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should renders component and display loading", () => {
    act(() => {
      render(<App />, container);
    });
    //screen.debug();
    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement.innerHTML).toBe("Loading");
  });

  it("should wait for `loading...` to be removed", async () => {
    await act(async () => {
      render(<App />, container);
    });
    //const loadingElement = screen.getByTestId("loading");
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    //screen.debug();
    const fetchMockCall = jest.spyOn(global, "fetch");
    fetchMockCall.mockImplementationOnce((): any => fetchMock());
  });

  it("displays the robots received from API", async () => {
    const fetchMockCall = jest.spyOn(global, "fetch");
    fetchMockCall.mockImplementationOnce((): any => fetchMock());
    await act(async () => {
      render(<App />, container);
    });
    expect(screen.getByTestId("robotList")).toBeInTheDocument();
    stubbedData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
    // remove the mock to ensure tests are completely isolated
    fetchMockCall.mockRestore();
  });

  it("displays error when 404 in the  API", async () => {
    const fetchMockCall = jest.spyOn(global, "fetch");
    fetchMockCall.mockImplementationOnce((): any => rejectFetchMock404());
    await act(async () => {
      render(<App />, container);
    });

    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.getByTestId("error").innerHTML).toBe("Error 404");

    // remove the mock to ensure tests are completely isolated
    fetchMockCall.mockRestore();
  });

  it("displays something wrong in the API", async () => {
    const fetchMockCall = jest.spyOn(global, "fetch");
    fetchMockCall.mockImplementationOnce((): any => rejectFetchMock());
    //screen.debug();
    await act(async () => {
      render(<App />, container);
    });
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.getByTestId("error").innerHTML).toBe("Unknown Error");

    // Remove the mock to ensure tests are completely isolated
    fetchMockCall.mockRestore();
  });

  it("search form enter to filter data", async () => {
    const fetchMockCall = jest.spyOn(global, "fetch");
    fetchMockCall.mockImplementationOnce((): any => fetchMock());
    //screen.debug();
    await act(async () => {
      render(<App />, container);
    });
    userEvent.type(screen.getByTestId("search"), "Naimish");

    expect(screen.getByTestId("robotList").children.length).toBe(1);
    // Remove the mock to ensure tests are completely isolated
    fetchMockCall.mockRestore();
  });

  it("search form with wrong data to find no robots", async () => {
    const fetchMockCall = jest.spyOn(global, "fetch");
    fetchMockCall.mockImplementationOnce((): any => fetchMock());

    await act(async () => {
      render(<App />, container);
    });
    userEvent.type(screen.getByTestId("search"), "ABCD");

    expect(screen.getByTestId("robotList").children.length).toBe(0);
    // Remove the mock to ensure tests are completely isolated
    fetchMockCall.mockRestore();
  });
});
