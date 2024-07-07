import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useRandom = () => {

  const getRandomNumberFromApi = async (): Promise<number> => {
    const { data } = await axios("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new");
    console.log(data);
    // throw new Error("SoS");
    return data;
  }

  const query = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumberFromApi,
    staleTime: 1000 * 60 * 60
  });

  return query;
}
