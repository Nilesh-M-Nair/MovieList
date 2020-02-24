import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function Foot(){
return(
<>
<Layout className="layout">
    <Footer style={{ textAlign: 'center' }}>MovieList ©2020 Created by Codalyze Tech</Footer>
</Layout>
</>
);
}

export default Foot;