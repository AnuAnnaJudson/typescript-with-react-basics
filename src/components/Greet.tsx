import React from "react";

type GreetProps = {//type for string number and boolean
  //to explicit;y specify the type use this method
  name: string;
  messageCount?: number;//optional prop
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  //if you give props like in react then the typescript
  // gives an error saying no props structure is provided and it is looking for one even though by default the type is any and typescript is not happy with it
  const {messageCount=0}=props;//since message count is made optional to handle the undefined placeholder to 0
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! you have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  );
};
