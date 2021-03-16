import React, { useState, useEffect } from "react";

import { RobotType } from "./types";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  const [robots, setRobots] = useState<RobotType[]>([]);
  const [error, setError] = useState<string | boolean>(false);
  const [searchField, setSearchField] = useState<string>("");
  const getRobots = async (): Promise<void> => {
    try {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (fetchData.ok) {
        const response = await fetchData.json();
        return response;
      } else if (fetchData.status > 200 && fetchData.status < 500) {
        return Promise.reject("Error 404");
      } else {
        return Promise.reject("Some other error: " + fetchData.status);
      }
    } catch (err) {
      return Promise.reject(err.message);
    }
  };
  useEffect(() => {
    let mounted = true;

    getRobots()
      .then((data) => {
        if (mounted) {
          setRobots(data as any);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };
  if (error) {
    return <div data-testid="error">{error}</div>;
  }
  const filteredRobots =
    robots.length > 0
      ? robots.filter((robot) => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
      : [];
  return !robots.length ? (
    <h1 data-testid="loading">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} searchField={searchField} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
