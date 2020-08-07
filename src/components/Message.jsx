import React, { forwardRef } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div>
      <Card ref={ref} className={`message ${isUser && "message__user"}`}>
        <CardContent>
          <Typography color="white" variant="h6">
            {!isUser && `${message.username || "Unknown User"}: `}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
