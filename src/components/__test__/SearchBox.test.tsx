import React from "react";

import Card from "../Card";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";

import SearchBox from "../SearchBox";

let container: any = null;
describe("<SearchBox />", () => {
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

  it("should render component without error", async () => {
    act(() => {
      render(<SearchBox searchField={"dsf"} searchChange={() => jest.fn()} />);
    });
    expect(screen.getByTestId("searchBox")).toBeInTheDocument();
  });
});
