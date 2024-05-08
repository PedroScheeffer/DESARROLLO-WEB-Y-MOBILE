import "./styles.css";
import { useEffect, useState } from "react";
import { getJokes } from "./api";
import Card from "./components";

export default function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokesPayload = async () => {
      const newJokes = await getJokes();
      setJokes(newJokes);
    };
    getJokesPayload();
  }, []);

  return (
    <div className="App">
      {jokes.map((j) => {
        return (
          <Card>
            <p>{j.setup}</p>
            <p>{j.punchline}</p>
          </Card>
        );
      })}
    </div>
  );
}
