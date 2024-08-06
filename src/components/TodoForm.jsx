import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import styled from "styled-components";

const TodoForm = () => {
  const inputRef = useRef();
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = {
      title: todoValue,
      id: Date.now(),
    };
    dispatch(addTodo(newValue));
    setTodoValue("");
  };
  const handleChange = () => {
    setTodoValue(inputRef.current.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        ref={inputRef}
        onChange={handleChange}
        value={todoValue}
      />
      <StyledBtn>add</StyledBtn>
    </StyledForm>
  );
};

export default TodoForm;
const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #e7efef;
  color: #7b7171;
  font-weight: 400;
  font-size: 20px;
`;
const StyledBtn = styled.button`
  width: 100px;
  height: 33px;
  border-radius: 7px;
  border: none;
  background-color: #123a7e;
  color: #faf3f3;
  font-weight: 400;
  font-size: 20px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 33px;
`;
