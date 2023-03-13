const url = "http://localhost:3010/posts";


function fetchPosts(url) {
    const getPromise = axios.get(url); // get all data from specified url
    // axios.get returns a promise
    getPromise.then((response) => {
        response.data.forEach(p => {
            document.body.innerHTML += `${p.id}-${p.title} - ${p.author} <br/>`;
        })
    })

    getPromise.catch((reject)=>{alert(reject)})
}


function savePost(event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    //fromEntries returns a object created by key value entries
    alert(formProps.id+" "+formProps.title+" "+formProps.author);

    const postPromise = axios.post(url,formProps);
    // alert("success ") 

    //put alert or preventDefault to stop default reloading of page
    event.preventDefault();

    postPromise.then(response=>{
       
        alert("data added successfully")
    });

    postPromise.catch((reject)=>{alert(reject)})
}

fetchPosts(url);
