type StatusProps = {
  //   status: string;//note that we only need 3 values for this type hence we use union of types
  // this gives error in app.tsx if any other value other than specified are tried to pass in as props
  status: "loading" | "error" | "success";
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched Sucessfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status- {message}</h2>
    </div>
  );
};
