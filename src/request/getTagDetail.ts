import { pythonUrl } from "./baseUrl";

const getTagDetail = async (url: string = '') => {
  const res = await fetch(`${pythonUrl}/getDataAnalyse`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({ url: url }),
  });
  const data = await res.json();
  return data.data[0].result || [];
};

export { getTagDetail };
