import { supabase } from './App'
import getUsers from "./GetUsers"



const handleDeleteUsers = async (username) => {
    const { data, error } = await supabase
      .from('Users')
      .delete()
      .match({ username: username });
  
    if (error) {
      console.error('Error deleting data: ', error);
    } else {
      console.log('Data deleted: ', username);
      const userData = await getUsers()
      return userData
    }
  };

  export default handleDeleteUsers