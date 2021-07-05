import axios from "axios";


export async function get(url) {
  const { data } = await axios.get(url);
  return data;
}

export async function post(url, product) {
  const { data } = await axios.post(url, { ...product });
  return data;
}

export async function patch(url, product) {
  const {data} = await axios.patch(url, {...product})
  return data
}
