import styled from "styled-components";
import IconWrapper from "../icon-div/IconDiv";
import { BsLaptop, BsLayers, BsCheck2Circle } from "react-icons/bs";

interface IProps {
  title: string;
  url: string;
  text: string;
}

const SectionIconsStyled = styled.section`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;


function MyCard() {
  return (
   <SectionIconsStyled>
      <IconWrapper 
      icon={<BsLaptop />}
      titulo='Somente para laptop'
      texto='Vamos aprender como usar um framework'/>

      <IconWrapper 
      icon={<BsLayers />}
      titulo="Criado com componentes"
      texto="Utilizamos o Styled Components."/>

      <IconWrapper 
      icon={<BsCheck2Circle />}
      titulo="Fácil aproveitamento"
      texto="Estamos no caminho."/>

   </SectionIconsStyled>
  );
}

export default MyCard;
