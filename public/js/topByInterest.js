var rank = 0;
function showCards(p){
   rank++;
   return /*html*/` <tr>
      <th scope="row">${rank}</th>
      <td>
         <button type="button" class="btn modal-detail-button" data-bs-toggle="modal" data-bs-target="#phoneDetailModal" data-slug=${p.slug}>
         ${p.phone_name.charAt(0) + p.phone_name.slice(1)}
         </button>
      </td>
      <td>${p.hits}</td>
   </tr>`; 
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

   fetch('https://api-mobilespecs.azharimm.site/v2/top-by-interest')
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
                        console.log(phoneDetailModal);
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
                     })
                     span.textContent = this.dataset.name + " ";
                     span.appendChild(icon);
                     span.classList.add("badge");
                     span.classList.add("badge-pill");
                     span.classList.add("badge-info");
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
               // totalCompareBadge.textContent = compareItem.length;
               if(compareItem.length == 0){
                  openCompareButton.classList.add('invisible');
               }
               else{
                  openCompareButton.classList.remove('invisible');
               }
            })
         })
      });
