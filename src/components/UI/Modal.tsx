import { PropsWithChildren, useEffect, useRef } from "react";
import styled from "styled-components";

const DialogModal = styled.dialog`
  box-sizing: border-box;
  width: 85%;
  padding: 30px 40px;
  border-radius: 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  &::backdrop {
    background-color: rgb(0 0 0 / 0.5);
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.principal};
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.text.default.x};
  font-family: "IBM Plex Mono", sans-serif;
`;

const Title = styled.h6`
  color: ${({ theme }) => theme.colors.text.principal};
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.text.subtitle.x};
`;

type ModalProps = {
  visibility: boolean;
  setVisibility: () => void;
  title?: string;
} & PropsWithChildren;

function Modal({
  visibility,
  setVisibility,
  title = "Detalhes",
  children,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (visibility) ref.current?.showModal();
  }, [visibility]);

  function handleOnCloseModal() {
    setVisibility();
    ref.current?.close();
  }

  return (
    <DialogModal ref={ref} onClose={handleOnCloseModal}>
      <Title>{title}</Title>
      {children}
      <Button onClick={handleOnCloseModal}>Fechar</Button>
    </DialogModal>
  );
}

export default Modal;
