type HeadingProps={
    children: string//type for children, that is string type
}
export const Heading = (props:HeadingProps) => {
  return (
    <h2>{props.children}</h2>
  )
}
