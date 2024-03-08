import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  padding-bottom: 10%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  //border: solid;
  //border-color: red;
  background: rgba(0,0,0,0);
  .hero-text{
    padding-top: 5%;
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 12rem;
    }

    h3{
      color:var(--green);
      font-size: 2rem;
      padding-left:1rem;
      margin: 2rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:2rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      //padding-right: 90%;
      align-items: center;
      //max-width: 500px;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      //border: solid;
      //border-color: red;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`