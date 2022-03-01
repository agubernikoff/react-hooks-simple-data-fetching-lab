import React, { useState, useEffect } from "react";

function App() {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => setDog(data));
  }, []);
  return (
    <div>
      {dog.message ? (
        <img src={dog.message} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
