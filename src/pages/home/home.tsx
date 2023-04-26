import React from "react";
import * as S from "./styles";
import Logo from "../../assets/img/Logo.png"
import TaskFill from "../../assets/img/taskFill.png";
import Settings from "../../assets/img/settings.svg";
import Folder from "../../assets/img/folder.svg";
import Logout from "../../assets/img/logout.svg"
import SidebarItem from "../../components/sidebar-item/sidebar-item";

/* eslint-disable-next-line */
export interface HomeProps {}

const Home:React.FC = ()=>{
  return(
      <S.Page>
          <S.Sidebar>
              <S.Img src={Logo}/>
              <S.Tabs>
                  <SidebarItem icon={TaskFill} name="Tasks" isActive={true} ></SidebarItem>
                  <SidebarItem icon={Folder} name="Projects" isActive={false} ></SidebarItem>
                  <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
              </S.Tabs>
              <SidebarItem icon={Logout}name="Logout" isActive={false}></SidebarItem>
          </S.Sidebar>
      </S.Page>
  )
}

export default Home;
