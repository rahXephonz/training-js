document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Membuat XHR Objek
    const xhr = new XMLHttpRequest();

    // Membuka
    xhr.open('GET', 'data.txt', true);

    // Optional - Digunakan untuk spinner dan loader
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    // XHR on load 
    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h3>${this.responseText}<h3>`;
        }
    }


    // console.log('READYSTATE', xhr.readyState);
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText)
    //     }
    // }

    xhr.onerror = function(){
        console.log('Request error...')
    }

    // Kirim data ke console
    xhr.send();

    // HTTP Status
    // 200 : "OK"
    // 403 : "Forbidden"
    // 404 : "Not Found"

    // Nilai readyState
    // 0 : request not initialized
    // 1 : server connection established
    // 2 : request received
    // 3 : proccesing request
    // 4 : request finished and response is ready
}