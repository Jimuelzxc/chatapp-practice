import axios from "axios";
export default async function useFetch(url, newMessage, addData, loader) {
  try {
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });
    const responseData = response.data.choices[0].message;
    addData([...newMessage, responseData]);
    loader(false);
  } catch (err) {
    console.log(err);
  }
}
