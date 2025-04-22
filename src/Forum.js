import React from "react";
import { comments } from "./commentData";
import Card from "./Card";

function Forum() {
  return comments.map((comment) => <Card commentObject={comment} />);
}

export default Forum;
