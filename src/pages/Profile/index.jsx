import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Page } from "../../components";
import {signupEp,loginEp} from '../../services/auth.services'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { uploadSingle } from "../../services/upload.services";
import { editProfile } from "../../services/user.services";
function ProfilePage(props) {

    // pongo en uso el useNavigate
    const navigate = useNavigate()
    //pongo en uso el contexto
    const {storeToken, authenticateUser} = useContext(AuthContext)
    const [urlImage,setUrlImage]=useState("")
    const handleImage = async(e)=>{
        try {
            if(!e.target.files || e.target.files.length === 0){
                return
            }

            //formData
            const formData = new FormData();
            formData.append("image",e.target.files[0] )
            //[["key","value"],["key2","value"],....]
            const response = await uploadSingle(formData)
            console.log("Se subio la imagen",response)
            setUrlImage(response.data.imgUrl)
        } catch (error) {
            console.log("error:",error)
        }
    }
  const onFinish = async(values) => {
   
    try {
        console.log("Success:", values);
        if(urlImage.length){
            values["image_url"] = urlImage
        }
        const response = await editProfile(values)
        
        console.log("se actualizo????",response)
       
        
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
          label="Username"
          name="username"
          hasFeedback
        >
          <Input />
        </Form.Item>
        
        <input type={"file"} onChange={handleImage} />
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            editar
          </Button>
        </Form.Item>
      </Form>
    </Page>
  );
}


export default ProfilePage;