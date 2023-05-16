import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {

  sbtiQuestion: async(number) => {
    return await axios.get(KH_DOMAIN + `/sbti?number=${number}`)
  },

  userNumber: async(no) => {
    return await axios.get(KH_DOMAIN + `/user?no=${no}`)
  },

  userSbti: async(no, sbti) => {
    const member = {
      no : no,
      sbti : sbti
    };
    return await axios.post(KH_DOMAIN + "/sbtiresult", member);
  },

  sbtiResult: async(category) => {
    return await axios.get(KH_DOMAIN + `/sbticategory?cat=${category}`)
  }


};

export default AxiosApi;