import { pythonUrl } from "./baseUrl";

const getTagDetail = async () => {
  const res = await fetch(`${pythonUrl}/getDCCI`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    mode: "cors",
  });
  const data = await res.json();
  return data.result;
};

export { getTagDetail };
