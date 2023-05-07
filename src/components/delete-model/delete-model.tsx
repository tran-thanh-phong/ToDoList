import React, { useContext } from 'react';
import * as S from './styles';
import { DeleteContext } from '../../contexts/deleteContext';
import { TaskListContext } from '../../contexts/taskTypeContext';
import { TaskListType } from '../../contexts/taskType';
import { DeleteType } from '../../contexts/deleteType';

const DeleteModel:React.FC = () => {
  const { setShowDelete, id, setId } = useContext(DeleteContext) as DeleteType;
  const { deleteTask } = useContext(TaskListContext) as TaskListType;

  function handleCancel() {
    setShowDelete(false);
  }

  function handleDelete() {
    deleteTask(id);
    setId(0);
    setShowDelete(false);
  }

  return (
    <S.Background>
      <S.Container>
        <S.Text>Are you sure you want to delete this task?</S.Text>
        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.DeleteButton onClick={handleDelete}>Delete</S.DeleteButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
}

export default DeleteModel;
