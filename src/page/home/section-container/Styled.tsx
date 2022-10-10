import styled from "styled-components";


interface BoxImgProps{
    image:string;
}

interface SectionProps {
    ordem?: boolean;
  }

   const BoxImage = styled.div<BoxImgProps>`
  width: 50%;
  height: 100%;
  background: url(${(props) => props.image}) no-repeat;
 
  background-size: cover;
`;

 const ContentTextStyled = styled.div`
width: 50%;
height: 100%;
padding: 50px;
display: flex;
flex-direction: column;
justify-content: center;
`;

const SectionContainerStyled = styled.section<SectionProps>`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.ordem ? "row-reverse" : "row")};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;

export{BoxImage,ContentTextStyled}

export default SectionContainerStyled;