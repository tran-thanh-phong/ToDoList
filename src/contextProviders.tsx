import React from 'react';
import { DeleteContextProvider, ChildrenProps } from './contexts/deleteContext';
import { TaskListContextProvider } from './contexts/taskListContext';
import { CategoriesContextProvider } from './contexts/categoriesContext';
import { AddContextProvider } from './contexts/addContext';
import { AuthContextProvider } from './contexts/authContext';

const ContextProviders: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <TaskListContextProvider>
      <DeleteContextProvider>
        <AddContextProvider>
            <CategoriesContextProvider>
              <AuthContextProvider>
                {children}
              </AuthContextProvider>
            </CategoriesContextProvider>
        </AddContextProvider>
      </DeleteContextProvider>
    </TaskListContextProvider>
  );
};

export default ContextProviders;
