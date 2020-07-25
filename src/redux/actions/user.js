import axios from 'axios'

export function GET_USER(data){
    return{
        type:"GET_USER",
        payload:axios.post(`http://solarindo.indorobotik.com/api/v1/user/${JSON.stringify(data.data.id)}`,{
            headers:{
                Authorization:`Bearer ${JSON.stringify(data.token)}`,
                Accept: 'application/json',
                'Content-Type':'application/json'
            }
        })
    }    
}