import TextLink from "@components/atoms/TextLink";
import { staticServerUri } from "@utils/staticuri";
import { styled } from "styled-components";

const AuthLink = () => {
  return (
    <Wrapper>
      <TextLink to={staticServerUri + "/register"} children={"회원가입"} />
      <Float>
        <TextLink to={staticServerUri + "/login"} children={"계정 찾기"} />
        <span></span>
        <TextLink to={staticServerUri + "/login"} children={"비밀번호 찾기"} />
      </Float>
    </Wrapper>
  );
};

export default AuthLink;

const Wrapper = styled.div`
  margin-top: 26px;
`;

const Float = styled.div`
  float: right;

  span {
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 10px 0 10px;
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
