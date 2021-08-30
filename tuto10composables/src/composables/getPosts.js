import { ref } from 'vue'
import axios from 'axios' 
const url = 'http://localhost:3000/posts';

function getPosts() {
    const posts = ref([]);
    const error = ref(null);


    

    async function load() {
      try {
        let data = await fetch(url);
        if (!data.ok) {
          console.log('prout throw error');
          throw Error('no data available');
        }
        posts.value = await data.json(); 
        //console.log(data);
      }
      catch (err) {
        error.value = err.message;
        console.log("Erreur :", error.value);
      }
    }

    async function load2() {
       try {
        
      
        
        
        let data = await axios.get(url);
        // if (!data.ok) {
        //   console.log('prout throw error');
        //   throw Error('no data available');
        // }
        const results = data.data;
        posts.value = results;
        //console.log(results);
      }
      catch (err) {
        error.value = err.message;
        console.log("Erreur :", error.value);
      }
    }

    return { posts, error, load, load2 }


}

export default getPosts;