import React, { useState, useContext } from 'react';
import * as S from './styles';
import { ActionMeta } from 'react-select';
import { AddContext } from 'src/contexts/addContext';
import { AddType } from 'src/contexts/addType';
import { CategoriesContext } from 'src/contexts/categoriesContext';
import { CategoriesType } from 'src/contexts/categoriesType';
import { TaskListContext } from 'src/contexts/taskListContext';
import { TaskListType, TaskProps } from 'src/contexts/taskType';

/* eslint-disable-next-line */
export interface AddModelProps {}

const AddModel: React.FC<AddModelProps> = () => {
  const { setShowAdd } = useContext(AddContext) as AddType;
  const { cateList } = useContext(CategoriesContext) as CategoriesType;
  const { addTask } = useContext(TaskListContext) as TaskListType;

  const [ title, setTitle ] = useState("");
  const [ categoryItem, setCategoryItem ] = useState(cateList.find(cate => cate.name === 'None'));

  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleCategoryChange() {
    const select = document.getElementById("select") as HTMLSelectElement;
    const selectedId = select.options[select.selectedIndex].value;
    const catItem = cateList.find(x => x.id === Number(selectedId));
    setCategoryItem(catItem);
  }

  function handleCancel() {
    setShowAdd(false);
  }

  function handleAdd() {
    const task: TaskProps = {
      id: Math.random(),
      title: title,
      categories: categoryItem!.name,
      color: categoryItem!.color,
      done: false
    };

    setShowAdd(false);

    addTask(task);
  }

  return (
    <S.Background>
      <S.Container>
        <S.Text>Insert name</S.Text>
        <S.TitleInput placeholder="Task name" value={title} onChange={handleTyping}/>
        <S.Text>Select a category</S.Text>
        <S.Select id="select" onChange={handleCategoryChange}>
          {cateList.map(cat => 
            <option key={cat.id} value={cat.id}>{cat.name}</option>  
          )}
        </S.Select>
        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.AddButton onClick={handleAdd}>Add</S.AddButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
}

export default AddModel;
