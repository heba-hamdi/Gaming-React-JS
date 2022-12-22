
import axios from 'axios';


export let getGames = async (setFun) => {
    let {data} = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/game", {
        headers: {
            'X-RapidAPI-Key':
                'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68'}
    })
   setFun(data)
}
export let getDetails = async (setFun,id) => {
    let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
        headers: {
            'X-RapidAPI-Key':
                'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68'}
    }
    )
   setFun(data)
   
}

export let axiosPost =  async (formData, endPoint) => {
    let { data } = await axios.post(`https://sticky-note-fe.vercel.app/${endPoint}`, formData);
    return data}