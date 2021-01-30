import axios from 'axios';

export async function GetNews() {
    let newsList;
    await axios.get('http://localhost:3001/news').then(
        res => {
            newsList = res.data
        }
    );

    return newsList
}


