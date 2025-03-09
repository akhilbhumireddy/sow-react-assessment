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
          "https://devsow.wpengine.com/wp-json/communities/all/",
          {
            headers: {
              Authorization: "Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=",
            },
          }
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
      <ImageGrid data={data} />
      <ImageCarousel data={data} />
    </div>
  );
};

export default App;
