import React from "react";
import { FormWrapper, ButtomSubmit } from "./stylesNewComment";

const NewComment = props => {
  return (
    <FormWrapper>
      <form onSubmit={props.onSubmit}>
        <textarea
          rows={5}
          cols={40}
          onChange={e => props.onChange(e.target.value)}
          value={props.value}
        />
        <ButtomSubmit type="submit">Submit</ButtomSubmit>
      </form>
    </FormWrapper>
  );
};

export default NewComment;
