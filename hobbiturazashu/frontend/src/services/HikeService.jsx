import axios from 'axios'

export async function getAllHikes(){
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/hikes/')
        return response.data
    } catch (error) {
        return []
    }
}

export async function getLatests(volume){
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/latesthikes/${volume}`)
        return response.data
    } catch (error) {
        return []
    }
}

export async function getByCategory(category){
    try{
        const response = await axios.get(`http://127.0.0.1:8000/api/hikes/${category}`)
        return response.data
    } catch (error){
        return []
    }
}

export async function getHikeById(id){
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/hike/${id}`)
        return response.data
    } catch (error) {
        return []        
    }


}