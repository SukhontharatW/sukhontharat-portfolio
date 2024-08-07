// const API_URL = "http://localhost:3001";
const API_URL = "https://portfolio-api-flvz.onrender.com";
export async function getProjects() {
  const res = await fetch(`${API_URL}/getProjects`);
  // const res = await fetch(`http://localhost:3001/getProjects`);
  if (!res.ok) throw Error("Failed getting projects");

  const data = await res.json();
  return data;
}

export async function getProjectItem(id) {
  const data = await getProjects();
  // console.log(data);
  const dataItem = data.filter((i) => i._id.toString() === id);
  return dataItem[0];
}
