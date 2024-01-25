import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createEntry(emojip) {
  return (
    <Entry
      key={emojip.id}
      name={emojip.name}
      emoji={emojip.emoji}
      meaning={emojip.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
