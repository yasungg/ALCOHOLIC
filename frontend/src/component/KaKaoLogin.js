import styled from "styled-components";
import { KAKAO_AUTH_URL } from "./OAuth"

const Button = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    margin: 10px;
&:hover {
    cursor: pointer;
}
`;
const KaKaoLogin = () => {
    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <div>
            <Button onClick={kakaoLogin}>카카오 로그인</Button>
        </div>
    );
};

export default KaKaoLogin;