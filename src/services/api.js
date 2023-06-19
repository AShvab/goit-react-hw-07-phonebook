import axios from "axios";

// створюємо екземпляр Axios, встановлюємо загальні налаштування для всіх запитів у додатку
const api = axios.create({
  baseURL: 'https://648dd2a42de8d0ea11e841b4.mockapi.io',
});

export const getContacts = async () => {
    const { data } = await api.get('/contacts');
    return data;
};

export const addContacts = async data => {
        const { data: result } = await api.post('/contacts', data);
        return result; 
}

export const deleteContacts = async (id) => {
  const { data } = await api.delete(`/contacts/${id}`);
        return data;
}

// ------------------------------------- Або: -----------------------------------------------//

// export const getContacts = async () => {
//   const { data } = await axios.get('https://648dd2a42de8d0ea11e841b4.mockapi.io/contacts');
//   return data;
// };

// export const addContacts = async data => {
//   const { data: result } = await axios.post('https://648dd2a42de8d0ea11e841b4.mockapi.io/contacts', data);
//   return result; 
// }

// export const deleteContacts = async (id) => {
//   const { data } = await axios.delete(`https://648dd2a42de8d0ea11e841b4.mockapi.io/contacts/${id}`);
//         return data;
// }