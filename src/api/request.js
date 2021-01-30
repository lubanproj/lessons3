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

export async function GetCourses() {
    let courseList;
    await axios.get('http://localhost:3001/courses').then(
        res => {
            courseList = res.data
        }
    )
    return courseList;
}

