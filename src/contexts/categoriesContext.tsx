import React, { createContext } from 'react';
import { CategoriesType } from './categoriesType';

export interface ChildrenProps {
  children: React.ReactNode;
}

export const CategoriesContext = createContext<CategoriesType | null>(null);

export const CategoriesContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const catList: CategoriesType = {
    cateList: [
        {
          id: 0,
          name: 'None',
          color: '#AFAFAF',
        },
        {
          id: 1,
          name: 'Home',
          color: '#FF9C9C',
        },
        {
          id: 2,
          name: 'School',
          color: '#FFD79C',
        },
        {
          id: 3,
          name: 'Shopping List',
          color: '#9CD0FF',
        },
      ] 
  };

  return (
    <CategoriesContext.Provider value={catList}>
      {children}
    </CategoriesContext.Provider>
  );
};
