import React, { useState, useContext } from 'react';
import * as S from './styles';
import Arrow from '../../assets/img/arrow.svg';
import Add from '../../assets/img/add.svg';
import Category from '../category/category';
import { CategoriesContext } from 'src/contexts/categoriesContext';
import { CategoriesType } from 'src/contexts/categoriesType';

/* eslint-disable-next-line */
export interface SidebarItemProps {
  name: string;
  icon: string;
}

const ExpandSidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => {
  const [active, setActive] = useState(false);
  const { cateList } = useContext(CategoriesContext) as CategoriesType;

  function handleActivate() {
    setActive(!active);
  }

  return (
    <S.OuterContainer isActive={active}>
      <S.Container isActive={active} onClick={handleActivate}>
        <S.Icon src={icon} />
        <S.Name>{name}</S.Name>
        <S.Arrow src={Arrow} isActive={active} />
      </S.Container>
      <S.CatArea isActive={active}>
        {cateList.map((cat) => (
          <Category key={cat.id} name={cat.name} color={cat.color} />
        ))}

        <S.AddArea>
          <S.AddIcon src={Add} />
          <S.AddText>Add New</S.AddText>
        </S.AddArea>
      </S.CatArea>
    </S.OuterContainer>
  );
};

export default ExpandSidebarItem;
