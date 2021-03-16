import React from "react";

import Card from "../Card";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import CardList from "../CardList";
const stubbedData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
];

let container: any = null;
describe("<CardList />", () => {
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
  it("renders data", async () => {
    act(() => {
      render(<CardList robots={stubbedData} />);
    });
    expect(screen.getByTestId("robotList").children.length).toBe(2);
  });
});
