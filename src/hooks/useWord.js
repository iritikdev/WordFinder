import { useQuery } from "react-query";
import axios from "axios";

const useWord = (word) => {
  console.log("Hi");
  const { data, error, isLoading, refetch } = useQuery(
    "words",
    async () => {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      return data;
    },
    { enabled: false }
  );
  return { data, error, isLoading, refetch };
};

export default useWord;
