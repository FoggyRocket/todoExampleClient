import { Button, Form, Input, Alert } from "antd";
import { Page } from "../../components";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../../services/todo.services";
import { useState } from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Create() {
      //utilizar el hook de navigate
  const navigate = useNavigate()    
  const [isDone,setDone] = useState(false)
  const onFinish = async (values) => {
    //estado del formulario pues todos sus inputs key=valor
    console.log(values);

    //values === body es un objeto con los datos que se almacenaran en mi backend 
    try{
        const response = await createTodo(values)
        // se creo tu tarea bye!! 
        //Siempre denn feedback al usuario!!!
        setDone(true)
        
        setTimeout(()=>{
            //borrar la alerta y mandarme a otra pagina
            setDone(false)
            navigate("/")
        },3000)
        

    }catch(error){
        console.log("Create error",error)
        //mandar alert custom si hay error
    }
  };


  /**
   *   axios.get("https//").then(response=>{}).catch(error=>{})
   *   axios.post("https//",data).then(response=>{}).catch(error=>{})
   */

  return (
    <Page>
        {isDone && 
         <Alert message="Success Tips" type="success" showIcon />}
      <Form
        {...layout}
        name="control-hooks"
        //metodo de andtd para forms
        onFinish={(e)=>onFinish(e)}
        style={{
            padding:20,
            maxWidth: 600,
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Page>
  );
}

export default Create;
