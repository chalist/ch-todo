import React, { FormEvent, useRef, useContext } from "react";
import { Context as TodoContext } from "../context";
import { createTodo } from "../Actions";

const AddTodo: React.FC = () => {
  const { dispatch } = useContext(TodoContext);

  const textInputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const titleVal = textInputRef.current!.value;

    if (titleVal.trim() === "") {
      return;
    }

    dispatch(
      createTodo({
        id: new Date().getTime().toString(),
        title: textInputRef.current!.value,
        description: textAreaRef.current?.value,
        status: "ToDo",
      })
    );
  };

  return (
    <form>
      <input type="text" ref={textInputRef} />
      <textarea ref={textAreaRef}></textarea>
      <button type="button" onClick={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
