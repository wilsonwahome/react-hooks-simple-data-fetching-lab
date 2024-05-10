import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
}

export default App;
