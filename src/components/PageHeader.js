import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Card, Col, Row } from 'antd';

const PageHeader = props => {
  const { title, breadcrumbItems, children } = props;
  return (
    <Card>
      <Row type="flex" justify="space-between">
        <Col>
          <h1>{title}</h1>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems.map(item => (
              <Breadcrumb.Item key={item.name}>
                <Link to={item.linkTo}>{item.name}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Col>
        <Col>{children}</Col>
      </Row>
    </Card>
  );
};

export default PageHeader;
