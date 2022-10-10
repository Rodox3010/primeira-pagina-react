import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
  }

  small {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
    color: ${(props) => props.theme.primary};
  }

  span {
    font-size: 24px;
    color: ${(props) => props.theme.primary};
    margin: 5px;
  }
`;



export default function Footer ()  {
  return (
    <FooterStyled>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"#"}>Sobre Nós</Link>
            </li>
            <li>
              <Link to={"#"}>Contata</Link>
            </li>
            <li>
              <Link to={"#"}>Termos de uso</Link>
            </li>
            <li>
              <Link to={"#"} >Política de Privacidade</Link>
            </li>
          </ul>
        </nav>
        <small>&copy; Seu Site desde 2022. Todos os direitos reservados.</small>
      </div>

      <div>
        <span>
          <Link to={"https://www.facebook.com/"}target="_blank">
            <BsFacebook />
          </Link>
        </span>
        <span>
          <Link to={"https://twitter.com/"}target="_blank">
            <BsTwitter />
          </Link>
        </span>
        <span>
          <Link to={"https://linkedin.com"} target="_blank">
            <BsLinkedin />
          </Link>
        </span>
      </div>
    </FooterStyled>
  );
};

