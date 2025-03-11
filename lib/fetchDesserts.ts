const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function getDesserts(){
  try{
    const response = await fetch(`${BASE_URL}/filter.php?c=dessert`)
    const data = await response.json();

    return {
      message : 'Success',
      data : data.meals
    } 
  }catch(err){
    return {
      message : err instanceof Error ?  `$Failed : ${err.message}` : 'Unkown Error', 
      data: null,
    }
  }
}
