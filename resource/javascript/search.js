// const searchButton = document.querySelector('.search-button');
const inputKeyword = document.querySelector('.input-keyword');
let compareItem = [];
const openCompareButton = document.querySelector('#openCompareButton');
// const totalCompareBadge =  openCompareButton.querySelector('#totalCompareBadge');

function showCards(p){
   // /*html*/ `                              `
   return /*html*/` <div class="col-md-3 my-3">
               <div class="card">
                  <img src="${p.image}" class="card-img-top w-75 d-block mx-auto mt-3" alt="phone image">
                  <div class="card-body">
                     <div class="container">
                        <div class="row">
                           <div class="col">
                              <h5 class="card-title">${p.phone_name.charAt(0).toUpperCase() + p.phone_name.slice(1)}</h5>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-6">
                              <button type="button" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#phoneDetailModal" data-slug=${p.slug}>
                                 Detail
                              </button>
                           </div>
                           <div class="col-6">
                              <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                 <input type="checkbox" class="btn-check compare" id="compare_${replacePlus(p.slug)}" type="checkbox" data-slug=${p.slug} data-name="${p.phone_name.charAt(0).toUpperCase() + p.phone_name.slice(1)}" ${compareItem.includes(p.slug) ? 'checked' : ''} autocomplete="off">
                                 <label class="btn btn-outline-success" for="compare_${p.slug}">Compare</label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>    
            </div>`;
}

function showCarouselImage(image){
   return /*html*/`
   <div class="carousel-item">
      <img class="d-block mx-auto w-50" src="${image}" alt="First slide">
   </div>
   `
}

function specification(specs){
   // console.log(specs);
   let subSpec = '';
   specs.specs.forEach(subSpecs => {
      subSpec += /*html*/`<tr>
               <td>${subSpecs.key}</td>
               <td>${subSpecs.val}</td>
            </tr>`
   });
   return /*html*/`
      <div class="row mt-3">
         <div class="col-md">
            <table class="table table-striped">
               <thead>
                  <tr>
                     <th scope="col" colspan="2">${specs.title}</th>
                  </tr>
               </thead>
               <tbody>
                  ${subSpec}
               </tbody>
            </table>
         </div>
      </div>
   `
}

function showDetail(p){
   let carouselImage = '';
   p.phone_images.forEach(image => carouselImage += showCarouselImage(image));

   let specifications = '';
   p.specifications.forEach(specs => specifications += specification(specs));

   return /*html*/`
   <style>
      .carousel-control-next,
      .carousel-control-prev /*, .carousel-indicators */ {
         filter: invert(100%);
      }
   </style>
   <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">${p.phone_name.charAt(0).toUpperCase() + p.phone_name.slice(1)}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
      <div class="container-fluid">
         <div class="row">
            <div class="col-md">
               <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                     ${carouselImage}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
                  </button>
               </div>
               <!--<img src="${p.phone_images[0]}" alt="phone image" class="rounded mx-auto d-block w-50"> -->
            </div>
         </div>
         <div class="row mt-3">
            <div class="col-md">
               <table class="table table-striped">
                  <tbody>
                     <tr>
                        <td>Brand</td>
                        <td>${p.brand}</td>
                     </tr>
                     <tr>
                        <td>Release date</td>
                        <td>${p.release_date}</td>
                     </tr>
                     <tr>
                        <td>Dimension</td>
                        <td>${p.dimension}</td>
                     </tr>
                     <tr>
                        <td>Operating System</td>
                        <td>${p.os}</td>
                     </tr>
                     <tr>
                        <td>Storage</td>
                        <td>${p.storage}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         ${specifications}
      </div>
   </div>
   <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   </div>
   `;
}

function replacePlus(string){
   return string.replace('+', 'plus');
}

function removeCompareItem(item){
   const removeIndex = compareItem.indexOf(item);
   compareItem.splice(removeIndex, 1);
   document.querySelector('#' + replacePlus(item)).remove();
   document.querySelector('#compare_' + replacePlus(item)).checked = false;
   // console.log(compareItem);

}

function showLoading(show = true){
   if(show){
      return /*html*/`
         <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
            </div>
         </div>`
   }
   else{
      return /*html*/`
      <div class="d-flex justify-content-center invisible">
         <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>`
   }
}

inputKeyword.addEventListener('input', function(){
   const inputKeyword = document.querySelector('.input-keyword');
   document.querySelector('.phones-container').innerHTML = showLoading(true);
   fetch('https://api-mobilespecs.azharimm.site/v2/search?query=' + inputKeyword.value)
      .then(response => response.json())
      .then(response => {
         // const phones = response.
         // console.log(response)
         // console.log(response.data.phones)
         const phones = response.data.phones;
         let cards = "";
         // console.log(phones[0]);
         phones.forEach(p => cards += showCards(p));
         // console.log(cards);
         const phonesContainer = document.querySelector('.phones-container');
         phonesContainer.innerHTML = cards;

         const modalDetailButton = document.querySelectorAll('.modal-detail-button');
         modalDetailButton.forEach(btn => {
            btn.addEventListener('click', function(){
               const slug = this.dataset.slug;
               fetch('https://api-mobilespecs.azharimm.site/v2/' + slug)
                  .then(response => response.json())
                  .then(response => {
                     // console.log(response.data.phone_images[0]);
                     const phoneDetail = showDetail(response.data);

                     const phoneDetailModal = document.querySelector('.phone-detail-modal');
                     phoneDetailModal.innerHTML = phoneDetail;

                     const carouselItem = document.querySelectorAll('.carousel-item');
                     carouselItem[0].classList.add('active');
                  })
            })
         })
         const compareCheckbox = document.querySelectorAll('.compare');
         const compareBadges = document.querySelector('.compareBadges');
         compareCheckbox.forEach(item => {
            // console.log(item)
            item.addEventListener('change', function(){
               if(this.checked){
                  if(compareItem.length >= 3){
                     alert('Cannot compare more than 3 items at once!');
                     this.checked = false;
                  }
                  else{
                     let span = document.createElement("span");
                     let icon = document.createElement("i");
                     icon.classList.add("fas");
                     icon.classList.add("fa-times-circle");
                     icon.classList.add("pointer");
                     icon.id = "delete_" + replacePlus(this.dataset.slug);
                     const slug = this.dataset.slug;
                     icon.addEventListener('click',function(){
                        removeCompareItem(slug);
                        if(compareItem.length == 0){
                           openCompareButton.classList.add('invisible');
                        }
                        else{
                           openCompareButton.classList.remove('invisible');
                        }
                     })
                     span.textContent = this.dataset.name + " ";
                     span.appendChild(icon);
                     span.classList.add("badge");
                     span.classList.add("rounded-pill");
                     span.classList.add("bg-success");
                     span.classList.add("p-2");
                     span.classList.add("mx-1");
                     span.id = replacePlus(this.dataset.slug);
                     compareBadges.appendChild(span);
                     compareItem.push(replacePlus(this.dataset.slug));
                     console.log(compareItem);


                     // console.log(this.dataset.slug +  " checked");
                  }
               }
               else{
                  // const removeIndex = compareItem.indexOf(this.dataset.slug);
                  // compareItem.splice(removeIndex, 1);
                  // document.querySelector("#"+this.dataset.slug).remove();
                  removeCompareItem(this.dataset.slug);
                  // console.log(this.dataset.slug +  " unchecked");
               }
               
               if(compareItem.length == 0){
                  openCompareButton.classList.add('invisible');
               }
               else{
                  openCompareButton.classList.remove('invisible');
               }
               // totalCompareBadge.textContent = compareItem.length;
               console.log(compareItem);
            })
         })
      });
});

openCompareButton.addEventListener('click', function(){
   // let p1, p2, p3;
   // p1 = await fetch('https://api-mobilespecs.azharimm.site/v2/' + compareItem[0])
   // .then(response => response.json())
   // .then(response => response);

   // if(compareItem.length == 2){
   //    p2 = await fetch('https://api-mobilespecs.azharimm.site/v2/' + compareItem[1])
   //    .then(response => response.json())
   //    .then(response => response);
   // }

   // if(compareItem.length == 3){
   //    p3 = await fetch('https://api-mobilespecs.azharimm.site/v2/' + compareItem[2])
   //    .then(response => response.json())
   //    .then(response => response);
   // }

   // showCompareItems(p1,p2,p3);
   window.open(`compare?p0=${compareItem[0]}&p1=${compareItem[1] == undefined? "" : compareItem[1]}&p2=${compareItem[2] == undefined? "" : compareItem[2]}`);

});

