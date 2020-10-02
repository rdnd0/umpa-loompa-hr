import useSWR from "swr";
import { useParams } from "react-router-dom";

const baseUrl =
  "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/{id}";

export default function useGetSingleOompaResult() {
  const { id } = useParams();
  const url = baseUrl.replace(/{id}/, parseInt(id));
  const { data, error } = useSWR(url);

  return { data, error };
}
