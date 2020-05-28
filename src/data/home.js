const axios = require('axios')

function sort_object(postObject) {
    return {
        id: postObject.id,
        picture: '',
        title: postObject.title,
        description: '',
        date: postObject.updated_at,
        content: postObject.content
    }
}

async function staffPosts() {
    let reponse = await axios.get('http://127.0.0.1:8000/post/post_list/')
    let posts = reponse.data.results
    posts = posts.map(elem => {
        return sort_object(elem)
    })
    
    return posts
}

export { staffPosts }