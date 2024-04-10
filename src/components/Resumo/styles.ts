import styled from "styled-components";

export const ResumoContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 15%;
  padding-top: calc(5% + 40px);

  @media (max-width: 1400px) {
    padding: 5% 12.5%;
    padding-top: calc(5% + 40px);
  }

  @media (max-width: 900px) {
    padding: 5% 10%;
    padding-top: calc(5% + 40px);
  }

  @media (max-width: 768px) {
    padding: 7.5%;
    padding-top: calc(7.5% + 40px);
    flex-direction: column-reverse;
    gap: 20px;
  }

  @media (max-width: 425px) {
    padding-top: calc(7.5% + 50px);
  }
`;

export const ResumoParagrah = styled.p`
  font-size: ${({ theme }) => theme.sizes.text.default.lg};
  color: ${({ theme }) => theme.colors.text.principal};
  width: 31ch;
  text-align: justify;
  line-height: 45px;

  @media (max-width: 1600px) {
    font-size: 30px;
  }

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.default.m};
    width: 37ch;
    line-height: 35px;
  }

  @media (max-width: 1180px) {
    width: 30ch;
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
    width: 30ch;
    line-height: 27.5px;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
    line-height: 25px;
    width: fit-content;
  }
`;

export const ResumoTitulo = styled.h1`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.principal};
  margin-bottom: 15px;

  @media (max-width: 1600px) {
    font-size: 70px;
  }

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.title.m};
    margin-bottom: 10px;
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.title.x};
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.title.xx};
  }
`;

export const ProfileIMG = styled.img`
  width: 400px;
  border-radius: 100%;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.19);

  @media (max-width: 1600px) {
    width: 350px;
  }

  @media (max-width: 1400px) {
    width: 250px;
  }

  @media (max-width: 1180px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 175px;
  }

  @media (max-width: 425px) {
    width: 150px;
  }
`;

export const Strong = styled.strong`
  color: ${(props) => props.color};
`;
