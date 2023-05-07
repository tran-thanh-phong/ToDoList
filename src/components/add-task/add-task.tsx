import React, { useContext } from 'react';
import * as S from './styles';
import AddIcon from "../../assets/img/add.svg";
import { AddContext } from 'src/contexts/addContext';
import { AddType } from 'src/contexts/addType';

/* eslint-disable-next-line */
export interface AddTaskProps {}

const AddTask: React.FC<AddTaskProps> = () => {
  const { setShowAdd } = useContext(AddContext) as AddType;

  function AddTask() {
    setShowAdd(true);
  }

  return (
    <S.Container onClick={AddTask}>
      <S.Icon src={AddIcon}></S.Icon>
      <S.Text>Add a task</S.Text>
    </S.Container>
  );
}

export default AddTask;
