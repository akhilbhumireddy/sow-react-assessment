import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import ImageCarousel from "../components/Carousel";
import DataCard from "../components/DataCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
    };
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      {data.length > 0 && (
        <ImageCarousel images={data.map((item) => ({ url: item.image_Url }))} />
      )}
      <div className={styles.grid}>
        {data.map((item) => (
          <DataCard
            key={item.ID}
            title={item.post_title}
            description={item.post_excerpt}
            imageUrl={item.image_Url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
