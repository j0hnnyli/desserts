import HomePage from "@/component/HomePage";
import { getDesserts } from "@/lib/fetchDesserts";
import { Dessert } from "@/lib/types/dessertType";


export default async function Home() {
  const { data }: {message: string, data: Dessert[] | null} = await getDesserts()


  return (
    <HomePage desserts={data}/>
  );
}
