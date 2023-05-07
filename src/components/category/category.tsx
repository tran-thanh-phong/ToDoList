import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

export interface CategoryProps {
  name: string;
  color: string;
}

const Category : React.FC<CategoryProps> = ({name, color}) => {
  return (
    <Link to={"/category/"+name} style={{ textDecoration: 'none' }}>
      <S.Category>
        <S.ColorTag color={color} />
        <S.ListName>{name}</S.ListName>
      </S.Category>
    </Link>
  );
}

export default Category;
