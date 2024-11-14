

let button = document.getElementById('btnOne');

button.addEventListener('click', axiosEvent);
    

function successFunction(response){
    console.log(response);

    let image = document.getElementById('image');
    image.insertAdjacentHTML('beforeend', '<img src="https://images.dog.ceo//breeds//vizsla//n02100583_6003.jpg", alt="dog" width="300px"/>')
    
     
  }

function failureFunction(error){
    console.log(error);
    document.body.innerHTML = 'Error has occur, please try again'
}



function axiosEvent(details){

    axios.request({
        url: 'https://dog.ceo/api/breeds/image/random',
    }).then(successFunction).catch(failureFunction)

}



let buttonTwo = document.getElementById('btnTwo');

function success(response){
    console.log(response)  //log actual data

    let author = document.getElementById('container');
   
    for(let i = 0; i < response.data.length; i++){
        
        author.insertAdjacentHTML('beforeend', `<div>
            
            <img src="${response.data[i].download_url}" width="250px"/>
            <h1>${response.data[i].author}</h1>
              
            
            </div>`)
}

}

function failure(error){
    console.log(error)
    document.body.innerHTML ='Error has occur, Check your work.'
}

buttonTwo.addEventListener('click', function(details){
    axios.request({
        url: 'https://picsum.photos/v2/list',
    }).then(success).catch(failure)
})
    

