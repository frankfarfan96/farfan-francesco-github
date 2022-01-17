import axios from 'axios';
// getUser = listRepos
export const getUser = async() => {
  try {
    const Response = await axios.get('https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos').then(Response=>Response.data);
    console.log(Response);
} catch (error) {
  console.error(error);
}
}
getUser();