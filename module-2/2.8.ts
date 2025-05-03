{
// async await data
type Data = {
    userId: number;
    id: number;
    title:string;
    body:string
  };

  const fetchData = async (): Promise<Data> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const data = await res.json();
    console.log(data)
    return data;
    
  };
   
  fetchData()








}