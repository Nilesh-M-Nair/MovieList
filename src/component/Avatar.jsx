import React from 'react';
import { Card } from 'antd';

function Avatar(props){
  const { Meta } = Card;
  return(
<>
    <Card className ='newdiv'
    hoverable
    style={{ width: 600}}
    cover={<img alt="image_view" src="https://image4.uhdpaper.com/wallpaper-hd/sunset-city-scifi-illustration-digital-art-uhdpaper.com-hd-4.2006.jpg" />}
  >
    <Meta title={props.source.title} />
  </Card>
</>
);
}

export default Avatar;