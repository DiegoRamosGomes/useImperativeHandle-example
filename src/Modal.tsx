import { forwardRef, useImperativeHandle, useState } from "react";

export type Modal = {
  show(): void
}

export const Modal = forwardRef<Modal>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    show
  }));

  const show = () => {
    setIsVisible(true)
  }
  const hide = () => {
    setIsVisible(false)
  }

  if (isVisible) {
    return (
      <div>
        <p>modal aberta</p>
        <button onClick={hide}>fechar</button>
      </div>
    )
  }

  return null
})