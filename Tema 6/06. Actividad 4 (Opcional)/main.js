function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");


    if (data == "borrar"){
        if ((ev.target.childNodes[1].innerText)-0 > 0){
            ev.target.childNodes[1].innerText = (ev.target.childNodes[1].innerText-0)-1
        }

    }else{
        if (ev.target.classList[0] == "despegados"){
            if (data == "despegue"){
                ev.target.childNodes[1].innerText = (ev.target.childNodes[1].innerText-0)+1
            }
        }else if (ev.target.classList[0] == "aterrizados"){
            if (data == "aterrizaje"){
                ev.target.childNodes[1].innerText = (ev.target.childNodes[1].innerText-0)+1
            }
        }
    }

    console.log(data)
    // ev.target.appendChild(document.getElementById(data));
}