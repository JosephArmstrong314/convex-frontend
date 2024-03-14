import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const brandedFoods = useQuery(api.brandedFoods.get);

  return (
    <div className="App">
      {brandedFoods?.map(({ _id, description }) => (
        <div key={_id}>{description}</div>
      ))}
    </div>
  );
}

export default App;
