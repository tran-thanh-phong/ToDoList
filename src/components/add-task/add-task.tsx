import React from 'react';
import * as S from './styles';
import AddIcon from "../../assets/img/add.svg";

/* eslint-disable-next-line */
export interface AddTaskProps {}

const AddTask: React.FC<AddTaskProps> = () => {
  function AddTask() {
    console.log('Add Task');
  }

  return (
    <S.Container onClick={AddTask}>
      <S.Icon src={AddIcon}></S.Icon>
      <S.Text>Add a task</S.Text>
    </S.Container>
  );
}

export default AddTask;
