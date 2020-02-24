import React from 'react';
import {Descriptions, Statistic, Row, Col, Icon} from 'antd';

function UserView(props){

    return(
        <>
            <Descriptions title="Movie Info">
                <Descriptions.Item label="Title">{props.source.title} ({props.source.original_title})</Descriptions.Item>
                <Descriptions.Item label="Popularity">{props.source.popularity}</Descriptions.Item>
                <Descriptions.Item label="Available language">{props.source.original_language} </Descriptions.Item>
                <Descriptions.Item label="Release date">{props.source.release_date}</Descriptions.Item>
            </Descriptions>,
            
            <Row gutter={16}>
                <Col span={12}>
                <Statistic title="Ratings" value={props.source.vote_average} prefix={<Icon type="like" />} suffix="/ 10"/>
            </Col>
            
            <Col span={12}>
                <Statistic title="Viewed" value={props.source.vote_count}  />
            </Col>
            </Row>,
        </>
        );
}


export default UserView;