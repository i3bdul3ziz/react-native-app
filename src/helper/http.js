import axios from 'axios';

const HTTP =
{
    get: async function(url)
    {
        return await axios.get(url)
        .then(response =>
        {
            return response?.data;
        })        
        .catch(e =>
        {
            return e?.message;
        });
    },  
};

export default HTTP;