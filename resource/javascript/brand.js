function getApiInformation(){
    fetch("https://api-mobilespecs.azharimm.site/v2/brands")
    .then(response => response.json())
    .then(response => {
        
        let responseJson = response.data;
        let temp = "";
        const phonesContainer = document.getElementById('js-container');
        for(let i = 0; i < responseJson.length; i++){
            temp = responseJson[i];
            phonesContainer.innerHTML = '<li class="list-group-item">' + temp.brand_name + '</li>';
        }
    });
}

 getApiInformation();