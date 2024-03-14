import { createPortal } from "react-dom"


function Loading() {
  return createPortal(
    <div style={{
      color: "#fff",
      fontSize: "60px",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      width: "100vw",
      height: "100vh"

    }}><span>Loading...</span></div>,
    document.body
  )
}

export default Loading
