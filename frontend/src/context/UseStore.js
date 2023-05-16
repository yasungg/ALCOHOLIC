import { createContext, useState } from "react";
export const UserContext = createContext(null);

// contextApi는 한개만 만들면 됨
// 전역으로 관리할 데이터
const UserStore = (props) => {
  const [userId, setUserId] = useState("");
  const [takju, setTakju] = useState("");
  const [chungju, setChungju] = useState("");
  const [wine, setWine] = useState("");
  const [spirits, setSpirits] = useState("");

  return(
    <UserContext.Provider value={{userId, setUserId, takju, setTakju, chungju, setChungju, wine, setWine, spirits, setSpirits}}>
        {props.children}
    </UserContext.Provider>
  );
;}

export default UserStore;