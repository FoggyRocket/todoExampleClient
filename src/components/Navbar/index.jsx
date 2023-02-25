import { AppstoreOutlined, OrderedListOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const items = [
    {
      label: <Link to="/">List</Link>,
      key: 'list',
      icon:<OrderedListOutlined />,
    },
    {
      label: <Link to='/create'>New</Link>,
      key: 'new',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Random',
      key: 'random',
      icon: <SettingOutlined />,
    },

  ];

function Navbar(){
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

    return(
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Navbar;