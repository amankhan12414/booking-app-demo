import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  const getRestaurants = async () => {
    try {
      const restaurants = await client.getEntries({
        content_type: "restaurant",
        select: "fields",
      });

      const sanitizedRestaurants = restaurants.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedRestaurants;
    } catch (error) {
      console.log("Error ", error);
    }
  };
  return { getRestaurants };
};

export default useContentful;

