import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageGrid from "./components/ImageGrid";
import ImageCarousel from "./components/ImageCarousel";
//import "./styles.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sow-backend-3.onrender.com/api/communities"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="section-title">Communities We Manage</h2>
      <ImageGrid data={data} />
      <h2 className="section-title">Our Services</h2>
      <ImageCarousel data={data} />
    </div>
  );
};

export default App;
