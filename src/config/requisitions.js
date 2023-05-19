import {getUser} from './session';

const HOST = 'http://localhost:8083/'
//const HOST = 'https://tarciiz-saude-server.serveo.net/'

const API = 'api/v1/app/'

export async function get(endpoint){
    
    try{
        const fetched = await fetch(HOST+API+endpoint, {method:'GET', headers: {'Content-type': 'application/json', "Bypass-Tunnel-Reminder":"true"}})
        
        if (fetched.ok){
            const result = await fetched.json();
            
            return result
        }
        throw fetched
    }catch(error){
        
        // showMessage({message:error.type + ' - ' + error.status, type:'error'})
        throw error
    }
}

export async function get_params(endpoint, paramsMap){
    
    let params = Object.entries(paramsMap).map(a => a.join('='));
     try{
        let url = HOST+API+endpoint+'?'+params.join('&')
        console.log('url', url)
         const fetched = await fetch(url, {method:'GET', headers: {'Content-type': 'application/json', "Bypass-Tunnel-Reminder":"true"}})
         console.log('fecthed ', fetched)
        
        if (fetched.ok){
            const result = await fetched.json();
            
            return result
        }
        throw fetched
    }catch(error){
        
        console.log('Erro', error)
        // showMessage({message:error.type + ' - ' + error.status, type:'error'})
        throw error
    }
}

export async function post(endpoint, body){
    
    try{
        const fetched = await fetch(HOST+API+endpoint, {method:'POST', headers: {'Content-type': 'application/json', "Bypass-Tunnel-Reminder":"true"}, body:JSON.stringify(body)})
        
        if (fetched.ok){
            const result = await fetched.json();
            
            return result
        }
        throw fetched
    }catch(error){
        
        // showMessage({message:error.type + ' - ' + error.status, type:'error'})
        throw error
    }
}

export async function uploadFile(endpoint, file, pi) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("parentId", pi);
    
    try {
      const response = await fetch(HOST+API+endpoint, {
        method: "POST",
        body: formData,
        headers:{
            "Bypass-Tunnel-Reminder":"true"
        }
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (error) {
      console.error(error);
        throw error

    }
  }