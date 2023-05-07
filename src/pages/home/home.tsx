import React, {useContext, useState} from "react";
import * as S from "./styles";
import Logo from "../../assets/img/Logo.png";
import TaskFill from "../../assets/img/taskFill.png";
import Settings from "../../assets/img/settings.svg";
import Folder from "../../assets/img/folder.svg";
import Logout from "../../assets/img/logout.svg";
import Filter from "../../assets/img/filter.svg";
import SidebarItem from "../../components/sidebar-item/sidebar-item";
import TaskCard from "../../components/task-card/task-card";
import AddTask from "../../components/add-task/add-task";
import { TaskListContext } from "../../contexts/taskTypeContext";
import { TaskListType, TaskProps } from "../../contexts/taskType";
import FilterTag from "../../components/filter-tag/filter-tag";
import DeleteModel from "../../components/delete-model/delete-model";
import { DeleteContext } from "../../contexts/deleteContext";
import { DeleteType } from "../../contexts/deleteType";
import ExpandSidebarItem from "src/components/expand-sidebar-item/expand-sidebar-item";

/* eslint-disable-next-line */
export interface HomeProps {}

const Home:React.FC = ()=>{
  const { taskList, doneTasks, notDoneTasks } = useContext(TaskListContext) as TaskListType;
  const { showDelete } = useContext(DeleteContext) as DeleteType;

  const listOfLists = [taskList, doneTasks, notDoneTasks];
  const [listToDisplay, setListToDisplay] = useState(0);

  const [allActive, setAllActive] = useState(true);
  const [doneActive, setDoneActive] = useState(false);
  const [notDoneActive, setNotDoneActive] = useState(false);

  function handleAll() {
    setListToDisplay(0);
    setAllActive(true);
    setDoneActive(false);
    setNotDoneActive(false);
  }

  function handleDone() {
    setListToDisplay(1);
    setAllActive(false);
    setDoneActive(true);
    setNotDoneActive(false);
  }

  function handleNotDone() {
    setListToDisplay(2);
    setAllActive(false);
    setDoneActive(false);
    setNotDoneActive(true);
  }

  return(
      <S.Page>
          <S.Sidebar>
              <S.Img src={Logo}/>
              <S.Tabs>
                  <SidebarItem icon={TaskFill} name="Tasks" isActive={true} ></SidebarItem>
                  <ExpandSidebarItem icon={Folder} name="Categories" ></ExpandSidebarItem>
                  <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
              </S.Tabs>
              <SidebarItem icon={Logout}name="Logout" isActive={false}></SidebarItem>
          </S.Sidebar>
          <S.Main>
            <S.Header>All your tasks</S.Header>
            <S.TitleAndFilter>
              <S.Title>Tasks</S.Title>
              <S.FilterField>
                <div onClick={handleAll}><FilterTag name='All' active={allActive}/></div>
                <div onClick={handleDone}><FilterTag name='Done' active={doneActive}/></div>
                <div onClick={handleNotDone}><FilterTag name='Not done' active={notDoneActive}/></div>
                <S.FilterIcon src={Filter}/>
              </S.FilterField>
            </S.TitleAndFilter>
            {
              listOfLists[listToDisplay].map(task =>
                <TaskCard key={task.id} id={task.id} name={task.title} list={task.categories} color={task.color} done={task.done}/>
              )
            }
            <AddTask></AddTask>
          </S.Main>
          {showDelete && <DeleteModel/>}
      </S.Page>
  )
}

export default Home;
