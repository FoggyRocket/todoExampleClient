import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Page } from "../../components";
import {signupEp,loginEp} from '../../services/auth.services'


function Auth(props) {
  const onFinish = async(values) => {
   
    try {
        console.log("Success:", values);
        const service = props.signup ? signupEp : loginEp;

        const response = await service(values)

        console.log("que es response",response)
    } catch (error) {
        console.log("error ",error)
        if(error.response && error.response.data && error.response.data.messageError){

            console.log("Error:",error.response.data.messageError)
        }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Page>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type:"email",
              required: true,
              message: "Please input your email!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        {props.signup && 
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        }
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {
                //si esta en la pagina de signup muestro Registro si no muestro Sign in
                props.signup ? "Register" : "Sign in"
            }
          </Button>

          or <a
                 //si esta en la pagina de signup mando a login si no al signup
            href={props.signup ? "/login":"/signup"}
          > {  props.signup ? "Log in" : "Register now"}</a>
        </Form.Item>
      </Form>
    </Page>
  );
}


export default Auth;