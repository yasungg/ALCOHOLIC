import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";


const AxiosApi = {
// 로그인 
memberLogin : async(id, pw) => {
    const login = {
        user_id : id,
        user_pw : pw
    };
        return await axios.post(KH_DOMAIN + "/login", login);
    },
// 회원 가입
MemberSign : async(id, pw, name, jumin, email, phone) => {
    const member ={
        user_id : id,
        user_pw: pw,
        user_name: name,
        user_jumin : jumin,
        user_email: email,
        user_phone: phone
    };
    return await axios.post(KH_DOMAIN + "/new", member);
},
IdCheck : async(id) => {
    return await axios.get(KH_DOMAIN + `/check?id=${id}`)
},
IdGet: async(email) => {
    return await axios.get(KH_DOMAIN + `/memberId?email=${email}`)
}, 
PwGet: async(id) => {
    return await axios.get(KH_DOMAIN + `/memberPw?id=${id}`)
}, 
MemberUpdate : async(existpw, pw, name, jumin, email, phone) => {
    const update = {
        exist_pw : existpw,
        user_pw : pw,
        user_name : name,
        user_jumin : jumin,
        user_email : email,
        user_phone : phone
    };
    return await axios.post(KH_DOMAIN + "/update", update)
},
// 진행중인 이벤트 조회
eventGet : async(eventname) => {
    return await axios.get(KH_DOMAIN + `/event?eventname=${eventname}`);
},
// 종료된 이벤트 조회
doneEventGet : async(eventname) => {
    return await axios.get(KH_DOMAIN + `/dEvent?eventname=${eventname}`);
},
// 상품 검색
searchResultGet: async(productname) => {
    return await axios.get(KH_DOMAIN + `/search?productname=${productname}`);
}

};
export default AxiosApi;