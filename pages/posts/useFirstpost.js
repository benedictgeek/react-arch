import { useEffect, useState } from "react";
import { useRequest } from "../../api/useRequest";
import { useUrls } from "../../api/useUrls";

export let useFirstPost = () => {
  let { sampleUrl1 } = useUrls();
  let { getRequest } = useRequest();

  let [data, setData] = useState({});
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchItem();
  }, []);

  let fetchItem = async () => {
    try {
      setIsLoading(true);
      let res = await getRequest(sampleUrl1);
      setData(res);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return { data, isLoading };
};
