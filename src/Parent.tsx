import { useEffect } from "react";
import { Modal } from "./Modal";

export const Parent = () => {
  let modalRef: Modal | null

  useEffect(() => {
    modalRef?.show()
  }, [])

  return (
    <>
      <Modal ref={node => modalRef = node}/>
    </>
  )
}