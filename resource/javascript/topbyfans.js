// const searchButton = document.querySelector('.search-button');
const inputKeyword = document.querySelector('.input-keyword');
let compareItem = [];
const openCompareButton = document.querySelector('#openCompareButton');
// const totalCompareBadge =  openCompareButton.querySelector('#totalCompareBadge');
let no = [1,2,3,4,5,6,7,8,9,10];
let i = 1;

function showCards(p){
   return /*html*/` <tr>
      <th scope="row">${no[i], i++}</th>
      <td>${p.phone_name.charAt(0) + p.phone_name.slice(1)}</td>
      <td>${p.favorites} Users</td>
   </tr>`;
}

   fetch('https://api-mobilespecs.azharimm.site/v2/top-by-fans')
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
         const phonesContainer = document.querySelector('.topByFansDiv');
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