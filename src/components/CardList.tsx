import React from "react";
import { RobotType } from "../types";
import Card from "./Card";

interface Props {
  robots: RobotType[];
}
const CardList: React.FC<Props> = ({ robots }) => {
  return (
    <div data-testid="robotList">
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
