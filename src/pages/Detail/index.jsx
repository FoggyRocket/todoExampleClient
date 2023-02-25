
import {Page} from '../../components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getbyId } from '../../services/todo.services'


function Detail(){
    const [infoTodo,setInfoTodo] = useState({})
    const params = useParams()

    const getData = async ()=>{
        try{
            const response = await getbyId(params.idTodo)
            setInfoTodo(response.data)
        }catch(error){
            console.log("error",error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <Page>
            <h1>{infoTodo.title}</h1>

            {infoTodo.description ? 
            <p>{infoTodo.description}</p>:
            <p>No hay descripcion</p>}

            <p>Status: {infoTodo.status}</p>
        </Page>
    )
}


export default Detail;