// import React from "react"

type OscarProps={
    children:React.ReactNode//type for a react component passed as children
}                           //ReactNode is from react types package
export const Oscar = (props:OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}
