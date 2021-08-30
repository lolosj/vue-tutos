import { ref } from 'vue'
import axios from 'axios' 

function getPost(id) {
  
  const url = 'http://localhost:3000/posts/' + id;

  const post = ref(null);
  const error = ref(null);

  async function load2() {
    try {
      let data = await axios.get(url);
     // console.log(data);
      const results = data.data;
      post.value = results;
    }
    catch (err) {
      error.value = err.message;
      console.log("Erreur :", error.value);
    }
  }
  
  return { post, error, load2 }
}

export default getPost;