import React, {useContext} from "react";
import * as S from "./styles";
import Logo from "../../assets/img/Logo.png"
import TaskFill from "../../assets/img/taskFill.png";
import Settings from "../../assets/img/settings.svg";
import Folder from "../../assets/img/folder.svg";
import Logout from "../../assets/img/logout.svg"
import SidebarItem from "../../components/sidebar-item/sidebar-item";
import TaskCard from "../../components/task-card/task-card";
import AddTask from "../../components/add-task/add-task";
import { TaskListContext } from "../../contexts/taskTypeContext";
import { TaskListType } from "../../contexts/taskType";

/* eslint-disable-next-line */
export interface HomeProps {}

const Home:React.FC = ()=>{
  const {taskList, addTask} = useContext(TaskListContext) as TaskListType;

  return(
      <S.Page>
          <S.Sidebar>
              <S.Img src={Logo}/>
              <S.Tabs>
                  <SidebarItem icon={TaskFill} name="Tasks" isActive={true} ></SidebarItem>
                  <SidebarItem icon={Folder} name="Categories" isActive={false} ></SidebarItem>
                  <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
              </S.Tabs>
              <SidebarItem icon={Logout}name="Logout" isActive={false}></SidebarItem>
          </S.Sidebar>
          <S.Main>
            <S.Header>All your tasks</S.Header>

            {
              taskList.map(task =>
                <TaskCard key={task.id} id={task.id} name={task.title} list={task.categories} color={task.color} done={task.done}/>
              )
            }
            <AddTask></AddTask>
          </S.Main>
      </S.Page>
  )
}

export default Home;
