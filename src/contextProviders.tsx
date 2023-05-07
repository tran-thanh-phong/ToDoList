import React from 'react';
import { DeleteContextProvider, ChildrenProps } from './contexts/deleteContext';
import { TaskListContextProvider } from './contexts/taskTypeContext';
import { CategoriesContextProvider } from './contexts/categoriesContext';

const ContextProviders: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <TaskListContextProvider>
      <DeleteContextProvider>
        <CategoriesContextProvider>{children}</CategoriesContextProvider>
      </DeleteContextProvider>
    </TaskListContextProvider>
  );
};

export default ContextProviders;
