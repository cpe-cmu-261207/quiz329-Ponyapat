import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [name, gender, age] = useState("");
  const handleSubmit = (e) => {
    e.preventDefualt();
  };
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="card" style={{ width: 400 }}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Person</p>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q John Smith"
              //update related state based on event
              value={name}
              required
              onChange={(e) => e.target.value}
            ></input>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              value = {gender}
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <input
              className="input"
              value={age}
              type="number"
              placeholder="e.q 30"
            ></input>
          </div>

          <button className="button is-primary is-fullwidth">Submit</button>

          <div className="mb-4"></div>

          {/* display tables for all persons */}
          <p className="is-4 title has-text-centered">Person List</p>
          {/* sample table */}
          <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
          <ItemTable name={name} gender={gender} age={age} />
          <p>Pooonyapat Anusonthi 620612156</p>
        </div>
      </div>
    </form>
  );
}

export default App;
