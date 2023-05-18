import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
const [memberValue, setMemberValue] = useState({
    user_id: "",
    user_name: ""
});

    return(
        <UserContext.Provider value = {{memberValue, setMemberValue}}>
            {props.children}
        </UserContext.Provider> 
    );
};
export default UserStore;