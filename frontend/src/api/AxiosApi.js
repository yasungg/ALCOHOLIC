import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {

  sbtiQuestion: async(number) => {
    return await axios.get(KH_DOMAIN + `/sbti?number=${number}`)
  },

  userNumber: async(no) => {
    return await axios.get(KH_DOMAIN + `/user?no=${no}`)
  },

  sbtiUpdate: async(no, sbti) => {
    const member = {
      user_no : no,
      user_sbti : sbti
    };
    return await axios.post(KH_DOMAIN + "/sbtiupdate", member);
  },

  sbtiRecommend: async(category) => {
    return await axios.get(KH_DOMAIN + `/sbtirecommend?cat=${category}`)
  }


};

export default AxiosApi;