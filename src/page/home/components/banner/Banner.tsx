import styled from "styled-components";

interface BannerProps {
    titulo:string;
}

const BannerStyled=styled.div`
  background-image: url(https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2014/07/agua-mar-submarino.jpg?fit=1000%2C563&ssl=1);
  background-size: cover;  
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    text-shadow: 0.1em 0.1em 0.2em black;
  }
`




export default function Banner ({titulo}:BannerProps){

    return(
        <BannerStyled>
            <h1>
                {titulo}
            </h1>
        </BannerStyled>

    )
}
