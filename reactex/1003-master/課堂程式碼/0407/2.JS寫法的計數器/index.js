document.getElementById('add').addEventListener('click', function(){
    const totalObject = document.getElementById('total')

    totalObject.innerHTML = (+totalObject.innerHTML) + 1
})

document.getElementById('minus').addEventListener('click', function(){
    const totalObject = document.getElementById('total')
    
    totalObject.innerHTML = (+totalObject.innerHTML) - 1
})