import React, {useState} from "react";
import * as S from "./styles";
import EditIcon from "../../assets/img/edit.svg";
import EraseIcon from "../../assets/img/erase.svg";

/* eslint-disable-next-line */
export interface TaskCardProps {
  name: string;
  list: string;
  color: string;
}

const TaskCard: React.FC<TaskCardProps> = ({name, list, color}) => {
  const [check, setCheck] = useState(false);

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <S.Container>
      <S.CheckField>
        <input type="checkbox" onClick={handleCheck}/>
      </S.CheckField>
      
      <S.Description>
        <S.Name done={check}>{name}</S.Name>
        <S.ListBelong>
          <S.ColorTag color={color}/>
          <S.ListName>{list}</S.ListName>
        </S.ListBelong>
      </S.Description>

      <S.Icon src={EditIcon}/><S.Icon  src={EraseIcon}/>
    </S.Container>
  );
}

export default TaskCard;
