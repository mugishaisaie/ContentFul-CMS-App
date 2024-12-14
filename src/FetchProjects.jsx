import { createClient } from "contentful";
import { useEffect, useState } from "react";


const client = createClient({
    space:'0e97mcbmdyr7',
    environment:'master',
    accessToken:import.meta.env.VITE_API_KEY,
    
})

export const useFetchProjects =()=>{
    const [isLoading,setIsLoading] = useState(true)
    const [projects,setProjects] = useState([])


    const getData = async (params) => {
        try {
            const response =await client.getEntries({content_type:'projects'});
            const projects= response.items.map((item)=>{
                const {title,url,image} = item.fields;
                const id= item.sys.id;
                const img= image?.fields?.file?.url;
                return{title,url,img}
            })
            setProjects(projects)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            
        }
        
    }

    useEffect(()=>{
        getData()
    },[])

    return {isLoading,projects}
}
// client.getEntries({content_type:'projects'}).then((response)=>console.log(response))