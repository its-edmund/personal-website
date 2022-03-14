import axios from "axios";
import React, { useEffect, useState } from "react";

const Cat = () => {
  const [image, setImage] = useState<string>("");
  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: "cat",
          page: Math.floor(Math.random() * 100),
          per_page: 10,
          client_id: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
        },
      });
      setImage(response.data.results[Math.floor(Math.random() * 10)].urls.regular);
    };
    fetchImage();
  });
  return (
    <div>
      {image.length === 0 ? (
        <div>
          <h2>have this cat photo!</h2>
          <img src={image} alt="beautiful cat" />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Cat;
