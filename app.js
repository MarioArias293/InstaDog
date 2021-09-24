const linkDog = async () => {
    try {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random')
         
        console.log(res.data.message);
        return res.data.message
        
    } catch (error) {
        console.log(error)
    }
};

const handleImage = src => {
    console.log(src)
    const newDiv = document.createElement('div');
    newDiv.style = "width:300px;height:300px;overflow:hidden"
    newDiv.className = 'pm'
    const newImg = document.createElement('img');
    newImg.src = src
    newDiv.appendChild(newImg)
    document.querySelector("#am").appendChild(newDiv)
}

const images = new Array(9)

for (let i = 0; i < images.length; i++) {
    images[i] = linkDog();
}

Promise.all(images).then(images => images.forEach(handleImage))

const button = document.querySelector('#more')

document.querySelector('#more').addEventListener('click',  function(){
    for (let i = 0; i < images.length; i++) {
        images[i] = linkDog();
    }
    
    return Promise.all(images).then(images => images.forEach(handleImage))
   
})



    










