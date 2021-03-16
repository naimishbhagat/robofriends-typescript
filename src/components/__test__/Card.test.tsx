import React from "react";

import Card from "../Card";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";

const sampleRobot = {
  id: 1,
  name: "Naimish Bhagat",
  username: "nb",
  email: "nb@april.biz",
};

let container: any = null;
describe("<Card />", () => {
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

  it("should render card without error", async () => {
    act(() => {
      render(
        <Card
          id={sampleRobot.id}
          name={sampleRobot.name}
          email={sampleRobot.email}
        />
      );
    });
    expect(screen.getByTestId("robot-1")).toBeInTheDocument();
  });
});
