import Banner from "./components/banner/Banner";
import BannerDois from "./components/banner/NannerDois"
import Footer from "./components/footer/Footer";
import SectionIcons from "./components/sectionIcons/SectionIcons";
import SectionContainer from "./section-container/SectionContainer";

function Home() {
  return (
    <>
      <Banner titulo="Minha primeira página com ReactJs." />
      <SectionIcons/>
      <SectionContainer
        titulo="Declarativo"
        texto="React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. Views declarativas fazem com que seu código seja mais previsível e simples de depurar."
        urlImage='https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-react_2127.png'
      />
      <SectionContainer
        titulo="Baseado em componentes"
        texto="Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas. Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM."
        reverse
        urlImage='https://edteam-media.s3.amazonaws.com/blogs/original/7fe0047f-9b3c-49b0-8063-7c5773ae22b6.jpg'
      />
      <SectionContainer
        titulo="Aprenda uma vez, use em qualquer lugar"
        texto="Não fazemos suposições sobre as outras tecnologias da sua stack, assim você pode desenvolver novos recursos com React sem reescrever o código existente. O React também pode ser renderizado no servidor, usando Node, e ser usado para criar aplicações mobile, através do React Native."
        urlImage='https://blog.rocketseat.com.br/content/images/2019/03/5_ferramentas_em_alta_para_desenvolvedores_React.png'
      />


      <BannerDois tituloDois="Contato"  />
      <Footer />
    </>
  );
}

export default Home;
