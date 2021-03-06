import axios from 'axios'
const getId = () => (100000 * Math.random()).toFixed(0)
const url = 'http://localhost:3001/anecdotes'


const getAll = async () => {
    const response = await axios.get(url)
    return response.data
  }
  
  const createNew = async (content) => {
    const object = { 
        content,
        id: getId(),
        votes: 0}
    const response = await axios.post(url, object)
    return response.data
  }
  
  export default {
    getAll,
    createNew,
  }

