import styled from "styled-components";

export const ResumoContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 15%;
`;

export const ResumoParagrah = styled.p`
  font-size: ${({ theme }) => theme.sizes.text.default.lg};
  color: ${({ theme }) => theme.colors.text.principal};
  width: 31ch;
  text-align: justify;
  line-height: 45px;
`;

export const ResumoTitulo = styled.h1`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.principal};
  margin-bottom: 15px;
`;

export const ProfileIMG = styled.img`
  width: 400px;
  border-radius: 100%;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.19);
`;

export const Strong = styled.strong`
  color: ${(props) => props.color};
`;
