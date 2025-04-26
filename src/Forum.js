import React from "react";
import { comments } from "./component/forum/commentData";
import Card from "./component/forum/Card";

function Forum() {
  return comments.map((comment) => <Card commentObject={comment} />);
}

export default Forum;
