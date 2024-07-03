let mydiv = document.querySelector('div')
mydiv.style.width = '200px';
mydiv.style.height = '200px';
mydiv.style.border = '1px solid black'

mydiv.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'red';
})