import { Page } from "../../components";
import { Link } from "react-router-dom";
import { Card, Space } from "antd";
import { useEffect, useState } from "react";
import { getAllTodo } from "../../services/todo.services";
function Home() {
    const [todoList,setTodoList] = useState([
        {
            _id:"a89ud98asd",
            title:"Comer pan",
            description:"antes de que llegen a casa",
            status:"Pending"
        },{
            _id:"a89u3d98asd",
            title:"Ir por agua",
            status:"In Progress"
        },{
            _id:"a892ud98asd",
            title:"Vamos a descansar",
            description:"Ya fue mucho tiempo danos 10min",
            status:"Completed"
        }
    ])

    useEffect(()=>{

    const getData = async()=>{
        try {
            const response = await getAllTodo()
            console.log("que es res",response.data)
            setTodoList(response.data)
        } catch (error) {
           console.log("error",error) 
        }
    }

    getData()

    },[ ])
  return (
    <Page>
      <Space direction="vertical" size={16} style={{padding:20}}>
        {todoList.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            extra={<Link to={`/detail/${item._id}`}>More</Link>}
            style={{
              width: 300,
            }}
          >
           { item.description && <p>{item.description}</p> }

           <div>
            status: {item.status}
           </div>
          </Card>
        ))}
      </Space>
    </Page>
  );
}

export default Home;
