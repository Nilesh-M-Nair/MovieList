import React from 'react';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const { Header } = Layout;

function Head(){
return(
<>

<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
          
        <Menu.Item key="1" Link to ="/">Home</Menu.Item>
        <Menu.Item key="2" Link to = {`/overview/${419704}`}> Overiew </Menu.Item>
        
      </Menu>
    </Header>
  </Layout>
</>
);
}

export default Head;