import React from 'react';
import { DeleteContextProvider, ChildrenProps } from './contexts/deleteContext';
import { TaskListContextProvider } from './contexts/taskListContext';
import { CategoriesContextProvider } from './contexts/categoriesContext';
import { AddContextProvider } from './contexts/addContext';

const ContextProviders: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <TaskListContextProvider>
      <DeleteContextProvider>
        <AddContextProvider>
            <CategoriesContextProvider>
                {children}
            </CategoriesContextProvider>
        </AddContextProvider>
      </DeleteContextProvider>
    </TaskListContextProvider>
  );
};

export default ContextProviders;
