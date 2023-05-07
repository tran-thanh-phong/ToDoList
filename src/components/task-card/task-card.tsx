import React, { useContext } from "react";
import * as S from "./styles";
import EditIcon from "../../assets/img/edit.svg";
import EraseIcon from "../../assets/img/erase.svg";
import { TaskListContext } from "../../contexts/taskTypeContext";
import { TaskListType } from "../../contexts/taskType";
import { DeleteContext } from "../../contexts/deleteContext";
import { DeleteType } from "../../contexts/deleteType";

/* eslint-disable-next-line */
export interface TaskCardProps {
  id: number;
  name: string;
  list: string;
  color: string;
  done: boolean
}

const TaskCard: React.FC<TaskCardProps> = ({id, name, list, color, done}) => {
  const { checkTask } = useContext(TaskListContext) as TaskListType;
  const { setShowDelete, setId } = useContext(DeleteContext) as DeleteType;

  function handleCheck() {
    checkTask(id);
  }

  function handleDelete() {
    setId(id);
    setShowDelete(true);
  }

  return (
    <S.Container>
      <S.CheckField>
        <S.CheckboxRing onClick={handleCheck}>
          <S.CheckFill done={done}></S.CheckFill>
        </S.CheckboxRing>
      </S.CheckField>
      
      <S.Description>
        <S.Name done={done}>{name}</S.Name>
        <S.ListBelong>
          <S.ColorTag color={color}/>
          <S.ListName>{list}</S.ListName>
        </S.ListBelong>
      </S.Description>

      <S.Icon src={EditIcon}/>
      <S.Icon src={EraseIcon} onClick={handleDelete}/>
    </S.Container>
  );
}

export default TaskCard;
