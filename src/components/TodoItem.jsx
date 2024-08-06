import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice";
import { ModalUi } from "./Modal";
import styled from "styled-components";

const TodoItem = ({ title, id }) => {
  const [isEditing, setIsEditin] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [showModal, setShowModal] = useState(false);
  const openAndCloseModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();
  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  const handleEditing = () => {
    setIsEditin(true);
  };
  const handleUpdate = () => {
    dispatch(updateTodo({ id, title: newTitle }));
    setIsEditin(false);
  };

  return (
    <StyledWrapper>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <Styledspan>{title}</Styledspan>
      )}
      {isEditing ? (
        <button onClick={handleUpdate}>update</button>
      ) : (
        <StyledWrapperBtn>
          <StyledBtnTwo onClick={handleEditing}>edit</StyledBtnTwo>
          <StyledBtn onClick={openAndCloseModal}>delete</StyledBtn>
        </StyledWrapperBtn>
      )}

      <ModalUi isOpen={showModal} onClose={openAndCloseModal}>
        <h2>Вы точно хотите удалить?</h2>
        <StyledbtnModal onClick={() => handleDelete(id)}>да</StyledbtnModal>
        <StyledbtnModal2 onClick={openAndCloseModal}>нет</StyledbtnModal2>
      </ModalUi>
    </StyledWrapper>
  );
};

export default TodoItem;
const Styledspan = styled.span`
  color: #fefbfb;
  font-weight: 400;
  font-size: 20px;
`;
const StyledWrapper = styled.div`
  width: 80rem;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  gap: 90px;
`;
const StyledBtn = styled.button`
  width: 70px;
  height: 33px;
  border-radius: 7px;
  border: none;
  background-color: #e83912;
  color: #fbfcfc;
`;
const StyledBtnTwo = styled.button`
  width: 70px;
  height: 33px;
  border-radius: 7px;
  border: none;
  background-color: #12e856;
  color: #262a2a;
`;
const StyledWrapperBtn = styled.div`
  display: flex;
  gap: 15px;
`;
const StyledbtnModal = styled.button`
  font-weight: 400;
  font-size: 20px;
  width: 70px;
  height: 33px;
  border-radius: 7px;
  border: none;
  background-color: #e83912;
  color: #fbfcfc;
`;
const StyledbtnModal2 = styled.button`
  font-weight: 400;
  font-size: 20px;
  width: 70px;
  height: 33px;
  border-radius: 7px;
  border: none;
  background-color: #12e856;
  color: #262a2a;
`;
