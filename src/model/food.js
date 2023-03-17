import HTTP from '../helper/http';

const baseURL = 'https://64101f86864814e5b647f663.mockapi.io';

const foodModel =
{
    getAll: async function()
    {
        var url = `${baseURL}/list/v1`;
        
        return await HTTP.get(url).then(response => response);
    },

    getInfo: async function(id)
    {
        var url = `${baseURL}/list/v1/?id=${id}`;
        
        return await HTTP.get(url).then(response => response);
    }    
};

export default foodModel;