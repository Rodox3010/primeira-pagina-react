import SectionContainerStyled, { BoxImage, ContentTextStyled } from "./Styled";



interface ContextTextProps {
    titulo: string;
    texto: string;
  }

  interface SectionContainerProps {
    reverse?: boolean;
    urlImage: string;
    titulo: string;
    texto: string;
  }
  
  const ContentText: React.FC<ContextTextProps> = ({ titulo, texto }) => {
    return (
      <ContentTextStyled>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </ContentTextStyled>
    );
  };

  const SectionContainer: React.FC<SectionContainerProps> = ({
    reverse,
    urlImage,
    titulo,
    texto,
  }) => {
    return (
      <SectionContainerStyled ordem={reverse}>
        <ContentText titulo={titulo} texto={texto} />
        <BoxImage image={urlImage} />
      </SectionContainerStyled>
    );
  };
  
  export default SectionContainer;