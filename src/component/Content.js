import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Home from '../pages/Home';

const { Content } = Layout;

function Head(){
return(
<>
<Layout className="layout">
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Home />></Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
  </Layout>
</>
);
}

export default Head;