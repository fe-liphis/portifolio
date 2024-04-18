import { PropsWithChildren } from "react";

type ModalProps = {
  visibility: boolean;
  setVisibility: () => void;
} & PropsWithChildren;

function Modal({ visibility, setVisibility, children }: ModalProps) {
  return (
    <dialog open={visibility}>
      {children}
      <button onClick={setVisibility}>Fechar</button>
    </dialog>
  );
}

export default Modal;
