import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  //border-bottom: 1px solid var(--blue);

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 1rem;
    font-size :4rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  a{
    display:inline-block;
    padding-top: 2rem;
    //padding doesn't work for anchor links, so you need to add "display:inline-block"
    font-size: 2rem;
    color: var(--dtblue);
  }

  p{
    margin-top: 1rem;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    color: var(--black);
  }
  .pad{
    margin-top: 6rem;
  }
  
  .about-logo{
    text-align: center;
    white-space:nowrap;
    display: inline;
   img{
     display: inline;
     margin-top: 2rem;
     margin-left: 1rem;
     width: 7%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  .about-image{
    text-align: center;
    white-space:nowrap;
    display: inline;
   img{
     display: inline;
     margin-top: 4rem;
     margin-left: 0rem;
     margin-right: 5rem;
     width: 100%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`