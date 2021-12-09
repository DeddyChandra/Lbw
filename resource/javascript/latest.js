const api_get_latest = "https://api-mobilespecs.azharimm.site/v2/latest";

async function getData(api_url) {
	
	const resp = await fetch(api_url).then(response=>response.json()).then(
		response=>{
			const phones = response.data.phones;
			//console.log(phones);
			show(JSON.parse(JSON.stringify(phones)));
			//console.log(JSON.parse(JSON.stringify(phones))[0].phone_name);
		}
	);
}

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
                              <button type="button" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#phoneDetailModal" data-slug=${p.slug}>
                                 Detail
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>    
            </div>`;
}

function replacePlus(string){
   return string.replace('+', 'plus');
}

function show(data){
	
	let cards = "";
	
	for(let p of Object.keys(data)){
		
		//console.log(data[p].phone_name);
		cards += showCards(data[p]);
		//console.log(cards);
		const containerForCards = document.querySelector('.cards');
        containerForCards.innerHTML = cards;
		
		const detailButton = document.querySelectorAll('.modal-detail-button');
         detailButton.forEach(btn => {
            btn.addEventListener('click', function(){
               const slug = data[p].slug;
               fetch('https://api-mobilespecs.azharimm.site/v2/' + slug)
                  .then(response => response.json())
                  .then(response => {
					 //console.log('https://api-mobilespecs.azharimm.site/v2/'+slug);
                     //console.log(response.data.phone_images[0]);
                     const phoneDetail = showDetail(response.data);

                     const phoneDetailModal = document.querySelector('.phone-detail-modal');
                     phoneDetailModal.innerHTML = phoneDetail;

                     const carouselItem = document.querySelectorAll('.carousel-item');
                     carouselItem[0].classList.add('active');
                  })
            })
         })
		 
	}
	
	
	
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
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
      </button>
   </div>
   <div class="modal-body">
      <div class="container-fluid">
         <div class="row">
            <div class="col-md">
               <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     ${carouselImage}
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only">Next</span>
                  </a>
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
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
   </div>
   `;
}

getData(api_get_latest);