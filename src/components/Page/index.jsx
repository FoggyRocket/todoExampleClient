
import { Layout } from 'antd'
import "./styles.css"
//import {Componente as Otro} from 'Demo'
// const { Content = NewContent } = Layout
const { Content } = Layout
// <Layout.Content></Layout.Content>
// <Content></Content>
function Page({children}){
    return (
        <Layout className='container'>
            <Content className='content'>
               {children}
            </Content>
        </Layout>
    )
}


export default Page;