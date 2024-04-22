import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--green);
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      //background-color: #2b2b2b;
      background-color: var(--brown);
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--gray);
      }

      img{
        max-width: 100%;
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        color: var(--black);
        margin-bottom: 3rem;
      }

      p{
        color: var(--black);
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: var(--dtblue);
          //border-bottom: 1px solid var(--dtblue);
          transition: color 0.25s;
          &:hover{
            //color: #9ed3ff;
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          //background-color: var(--brown);
          //opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`