import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";

export default function Modal({ children }: { children: React.ReactNode }) {
  const portalDiv = document.getElementById("modal");
  if (!portalDiv) throw new Error("No existe el div con id modal");

  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    portalDiv
  );
}
