const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++){
//     // using parent element
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

close.forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';

        //tergantung dengan aksi utama aksi utama dari tag close adalah href
        e.preventDefault();
    })
})

//menghentikan aksi event default