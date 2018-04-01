import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navigation = props => {
  const { items } = props;

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className="Menu">
      {items.map(item => (
        <Menu.Item key={item.key}>
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navigation;
