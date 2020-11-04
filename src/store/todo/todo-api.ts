import axios from 'axios';

const baseURL ="https://jsonplaceholder.typicode.com/todos";
export const todoAsync=async()=>{
  try {
    const res = await axios.get(baseURL);
    return res.data
  } catch (err) {
    console.log(err)
  }
}