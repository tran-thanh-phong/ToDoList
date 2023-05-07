import React from 'react';
import * as S from './styles';

export interface CategoryProps {
  name: string;
  color: string;
}

const Category : React.FC<CategoryProps> = ({name, color}) => {
  return (
    <S.Category>
      <S.ColorTag color={color} />
      <S.ListName>{name}</S.ListName>
    </S.Category>
  );
}

export default Category;
