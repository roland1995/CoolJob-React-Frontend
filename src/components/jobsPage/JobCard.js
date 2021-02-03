import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Col } from 'antd';



export const JobCard = (props) => {
    const { Meta } = Card;

	const StyledImage = styled.img`
		width: 12em;
		height: 10em;
        display: block;
        margin-left: auto;
        margin-right: auto;
	`;

    return (
        
		<Col span={6}>
			<Link to={"/"}>
                <Card
                    hoverable
                    style={{ width: 300, height:300 }}
                    cover={<StyledImage alt="example" src={props.logo} />}
                >
                     <Meta title={props.title} description={props.type}/>
                </Card>
			</Link>
		</Col>

    )
}

export default JobCard
