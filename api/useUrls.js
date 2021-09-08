import { useUserContext } from "../state/contextProviders/userContext";

export let useUrls = () => {
  let {
    state: { token },
  } = useUserContext();
  
  let BASE_URL = "";

  //SAMPLE ENDPOINTS
  //this it to show how the forms in which the enpoints can be and how seamless it can be used in a custom hook like this

  let sampleUrl1 = `${BASE_URL}/users/login`;
  let sampleUrl2 = (email) => `${BASE_URL}/users/fetch-user/${email}`;
  let sampleUrl3 = `${BASE_URL}/users/check-token?token=${token}`;

  return {
    sampleUrl1,
    sampleUrl2,
    sampleUrl3,
  };
};
