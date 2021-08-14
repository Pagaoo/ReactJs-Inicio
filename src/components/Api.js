import axios from 'axios';

const Api = {
    getPersons: async function(){
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let{data} = res;

        return data;
    }
}

export default Api;