import axios from "axios";

const API_URL = "https://devsow.wpengine.com/wp-json/communities/all/";

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};
