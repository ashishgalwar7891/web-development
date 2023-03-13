let view = "grid"; //default view is grid-view
let noteList = [];
let id = 0; 

function saveNote(){
    let note = {
        id : id++,
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
    }
    noteList.push(note);
    console.log(note);
    
    let noteCard=document.createElement("div");
    noteCard.setAttribute("id",`${id}`);
    // noteCard.id=`${id}`;
    noteCard.style.width = "300px";
    noteCard.style.height = "fit-content";
    noteCard.style.border = "2px solid black";
    noteCard.style.marginTop = "10px";
    // noteCard.style.display = "wrap";
    // noteCard.style.flexDirection = "column";
    noteCard.style.backgroundColor = "rgb(252, 221, 69)";
    let container = document.getElementById("note-container");
    container.appendChild(noteCard);

    let title = document. createElement("h2");
    title.innerHTML = note.title;
    title.style.textAlign="center";
    title.style.color="black";
    noteCard.appendChild(title);

    let hr = document.createElement("hr");
    hr.style.border="1px solid black";
    noteCard.appendChild(hr);

    let content = document.createElement("p");
    content.innerHTML = note.content;
    content.style.textAlign="justify";
    content.style.color="black";
    noteCard.appendChild(content);
    
    let button = document.createElement("button");
    button.setAttribute("id",`${id}`);
    // noteCard.id=`${id}`;
    button.innerHTML="Delete";
    button.style.color="#fff";
    button.style.backgroundColor="rgb(34, 104, 224)";
    button.style.height="40px";
    button.style.width="80px";
    button.onclick = function() {
        let d = document.getElementById(`${this.id}`);
        d.remove();
        alert("delete successful");
    };

    noteCard.appendChild(button);
    alert("Notes Adding");

}






