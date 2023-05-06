import React from 'react';
import * as S from './styles';

/* eslint-disable-next-line */
export interface FilterTagProps {
  active: boolean;
  name: string;
}

const FilterTag : React.FC<FilterTagProps> = ({active, name}) => {
  return (
    <S.Container active={active}>
      <S.TagName active={active}>
        {name}
      </S.TagName>
    </S.Container>
  );
}

export default FilterTag;
