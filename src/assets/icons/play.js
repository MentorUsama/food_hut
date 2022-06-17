import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <path d="M12 6.5.75 12.995V.005L12 6.5Z" fill="#F54748" />
  </svg>
)

export default SvgComponent
