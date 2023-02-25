import { AppstoreOutlined, OrderedListOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/auth.context'
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

      label: <Link to='/profile'>Profile</Link>,
      key: 'logout2',
      icon: <SettingOutlined />,
    },
    {

      label: <Link to='/logout'>logout</Link>,
      key: 'logout',
      icon: <SettingOutlined />,
    },
  ];
  

  const itemsLoggedOut = [
    {
      label: <Link to="/signup">Signup</Link>,
      key: 'list',
      icon:<OrderedListOutlined />,
    },
    {
      label: <Link to='/login'>Login</Link>,
      key: 'new',
      icon: <AppstoreOutlined />,
    }
  ];
function Navbar(){
  const {isLoggedIn} = useContext(AuthContext)
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

    return(
        <Menu 
        onClick={onClick} 
        selectedKeys={[current]} 
        mode="horizontal" 
        items={isLoggedIn ? items : itemsLoggedOut} />
    )
}

export default Navbar;