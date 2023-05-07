import React, { useState } from 'react';
import * as S from './styles';
import Arrow from '../../assets/img/arrow.svg';
import Category from '../category/category';

/* eslint-disable-next-line */
export interface SidebarItemProps {
  name: string;
  icon: string;
}

const ExpandSidebarItem : React.FC<SidebarItemProps> = ({ name, icon}) => {
  const [active, setActive] = useState(false);
  const catList = [
    {
      name: "Home",
      color: "#FF9C9C"
    },
    {
      name: "School",
      color: "#FFD79C"
    },
    {
      name: "Shopping List",
      color: "#9CD0FF"
    }
  ];

  function handleActivate() {
    setActive(!active);
  }

  return (
    <S.OuterContainer>
      <S.Container isActive={active} onClick={handleActivate}>
        <S.Icon src={icon}/>
        <S.Name>{name}</S.Name>
        <S.Arrow src={Arrow} isActive={active}/>
      </S.Container>
      <S.CatArea isActive={active}>
        {catList.map(cat => 
          <Category name={cat.name} color={cat.color}/>  
        )}
      </S.CatArea>
    </S.OuterContainer>
  );
}

export default ExpandSidebarItem;
