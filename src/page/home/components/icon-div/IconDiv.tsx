import styled from "styled-components";

const IconsDiv = styled.div`
  text-align: center;

  span {
    font-size: 70px;
    color: ${(props) => props.theme.primary};
  }
`;

interface IconProps{
    titulo:string;
    texto:string;
    icon:React.ReactNode
}

export default function IconWrapper({icon,titulo,texto}:IconProps){
    return(
        <IconsDiv>
            <span>{icon}</span>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </IconsDiv>
    )
}
