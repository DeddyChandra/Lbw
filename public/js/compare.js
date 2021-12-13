function getParameterByName(name, url = window.location.href) {
   name = name.replace(/[\[\]]/g, '\\$&');
   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let p0 = getParameterByName('p0');
let p1 = getParameterByName('p1');
let p2 = getParameterByName('p2');

function getPhoneSpec(p){
   return fetch('https://api-mobilespecs.azharimm.site/v2/' + p)
      .then(response => response.json())
      .then(response => response);
}

function searchSpecDetail(pSpec, title, key){
   if(pSpec == null){
      return '';
   }
   else{
      return pSpec.specifications.find(o => o.title === title).specs.find(o => o.key === key) != undefined ? pSpec.specifications.find(o => o.title === title).specs.find(o => o.key === key).val[0] : '';
   }
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

async function compareResult(){
   document.querySelector('.table-result').innerHTML = showLoading(true);
   let p0Spec = p0 != "" ? await getPhoneSpec(p0) : null;
   let p1Spec = p1 != "" ? await getPhoneSpec(p1) : null;
   let p2Spec = p2 != "" ? await getPhoneSpec(p2) : null;
   p0Spec = p0Spec != null ? p0Spec.data : null;
   p1Spec = p1Spec != null ? p1Spec.data : null;
   p2Spec = p2Spec != null ? p2Spec.data : null;

   // console.log(p0Spec);
   // console.log(p1Spec);
   // console.log(p2Spec);

   const tableResult = /*html*/ `
   <table class="table">
      <thead>
         <tr>
            <th scope="col" colspan="2">Specification</th>
            <th>${p0Spec != null ? p0Spec.brand.charAt(0).toUpperCase() + p0Spec.brand.slice(1) + " " + p0Spec.phone_name : ''}</th>
            <th>${p1Spec != null ? p1Spec.brand.charAt(0).toUpperCase() + p1Spec.brand.slice(1) + " " + p1Spec.phone_name : ''}</th>
            <th>${p2Spec != null ? p2Spec.brand.charAt(0).toUpperCase() + p2Spec.brand.slice(1) + " " + p2Spec.phone_name : ''}</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th scope="row">Network</th>
            <th>Technology</th>
            <td>${searchSpecDetail(p0Spec, "Network", "Technology")}</td>
            <td>${searchSpecDetail(p1Spec, "Network", "Technology")}</td>
            <td>${searchSpecDetail(p2Spec, "Network", "Technology")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="2">Launch</th>
            <th>Announced</th>
            <td>${searchSpecDetail(p0Spec, "Launch", "Announced")}</td>
            <td>${searchSpecDetail(p1Spec, "Launch", "Announced")}</td>
            <td>${searchSpecDetail(p2Spec, "Launch", "Announced")}</td>
         </tr>
         <tr>
            <th>Status</th>
            <td>${searchSpecDetail(p0Spec, "Launch", "Status")}</td>
            <td>${searchSpecDetail(p1Spec, "Launch", "Status")}</td>
            <td>${searchSpecDetail(p2Spec, "Launch", "Status")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="3">Body</th>
            <th>Dimensions</th>
            <td>${searchSpecDetail(p0Spec, "Body", "Dimensions")}</td>
            <td>${searchSpecDetail(p1Spec, "Body", "Dimensions")}</td>
            <td>${searchSpecDetail(p2Spec, "Body", "Dimensions")}</td>
         </tr>
         <tr>
            <th>Weight</th>
            <td>${searchSpecDetail(p0Spec, "Body", "Weight")}</td>
            <td>${searchSpecDetail(p1Spec, "Body", "Weight")}</td>
            <td>${searchSpecDetail(p2Spec, "Body", "Weight")}</td>
         </tr>
         <tr>
            <th>SIM</th>
            <td>${searchSpecDetail(p0Spec, "Body", "SIM")}</td>
            <td>${searchSpecDetail(p1Spec, "Body", "SIM")}</td>
            <td>${searchSpecDetail(p2Spec, "Body", "SIM")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="3">Display</th>
            <th>Type</th>
            <td>${searchSpecDetail(p0Spec, "Display", "Type")}</td>
            <td>${searchSpecDetail(p1Spec, "Display", "Type")}</td>
            <td>${searchSpecDetail(p2Spec, "Display", "Type")}</td>
         </tr>
         <tr>
            <th>Size</th>
            <td>${searchSpecDetail(p0Spec, "Display", "Size")}</td>
            <td>${searchSpecDetail(p1Spec, "Display", "Size")}</td>
            <td>${searchSpecDetail(p2Spec, "Display", "Size")}</td>
         </tr>
         <tr>
            <th>Resolution</th>
            <td>${searchSpecDetail(p0Spec, "Display", "Resolution")}</td>
            <td>${searchSpecDetail(p1Spec, "Display", "Resolution")}</td>
            <td>${searchSpecDetail(p2Spec, "Display", "Resolution")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="4">Platform</th>
            <th>OS</th>
            <td>${searchSpecDetail(p0Spec, "Platform", "OS")}</td>
            <td>${searchSpecDetail(p1Spec, "Platform", "OS")}</td>
            <td>${searchSpecDetail(p2Spec, "Platform", "OS")}</td>
         </tr>
         <tr>
            <th>Chipset</th>
            <td>${searchSpecDetail(p0Spec, "Platform", "Chipset")}</td>
            <td>${searchSpecDetail(p1Spec, "Platform", "Chipset")}</td>
            <td>${searchSpecDetail(p2Spec, "Platform", "Chipset")}</td>
         </tr>
         <tr>
            <th>CPU</th>
            <td>${searchSpecDetail(p0Spec, "Platform", "CPU")}</td>
            <td>${searchSpecDetail(p1Spec, "Platform", "CPU")}</td>
            <td>${searchSpecDetail(p2Spec, "Platform", "CPU")}</td>
         </tr>
         <tr>
            <th>GPU</th>
            <td>${searchSpecDetail(p0Spec, "Platform", "GPU")}</td>
            <td>${searchSpecDetail(p1Spec, "Platform", "GPU")}</td>
            <td>${searchSpecDetail(p2Spec, "Platform", "GPU")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="2">Memory</th>
            <th>Card slot</th>
            <td>${searchSpecDetail(p0Spec, "Memory", "Card slot")}</td>
            <td>${searchSpecDetail(p1Spec, "Memory", "Card slot")}</td>
            <td>${searchSpecDetail(p2Spec, "Memory", "Card slot")}</td>
         </tr>
         <tr>
            <th>Internal</th>
            <td>${searchSpecDetail(p0Spec, "Memory", "Internal")}</td>
            <td>${searchSpecDetail(p1Spec, "Memory", "Internal")}</td>
            <td>${searchSpecDetail(p2Spec, "Memory", "Internal")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="3">Main Camera</th>
            <th>Modules</th>
            <td>${p0Spec != null ? p0Spec.specifications.find(o => o.title === 'Main Camera').specs[0].val[0] : ''}</td>
            <td>${p1Spec != null ? p1Spec.specifications.find(o => o.title === 'Main Camera').specs[0].val[0] : ''}</td>
            <td>${p2Spec != null ? p2Spec.specifications.find(o => o.title === 'Main Camera').specs[0].val[0] : ''}</td>
         </tr>
         <tr>
            <th>Features</th>
            <td>${searchSpecDetail(p0Spec, "Main Camera", "Features")}</td>
            <td>${searchSpecDetail(p1Spec, "Main Camera", "Features")}</td>
            <td>${searchSpecDetail(p2Spec, "Main Camera", "Features")}</td>
         </tr>
         <tr>
            <th>Video</th>
            <td>${searchSpecDetail(p0Spec, "Main Camera", "Video")}</td>
            <td>${searchSpecDetail(p1Spec, "Main Camera", "Video")}</td>
            <td>${searchSpecDetail(p2Spec, "Main Camera", "Video")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="2">Selfie Camera</th>
            <th>Modules</th>
            <td>${p0Spec != null ? p0Spec.specifications.find(o => o.title === 'Selfie camera').specs[0].val[0] : ''}</td>
            <td>${p1Spec != null ? p1Spec.specifications.find(o => o.title === 'Selfie camera').specs[0].val[0] : ''}</td>
            <td>${p2Spec != null ? p2Spec.specifications.find(o => o.title === 'Selfie camera').specs[0].val[0] : ''}</td>
         </tr>
         <tr>
            <th>Video</th>
            <td>${searchSpecDetail(p0Spec, "Selfie camera", "Video")}</td>
            <td>${searchSpecDetail(p1Spec, "Selfie camera", "Video")}</td>
            <td>${searchSpecDetail(p2Spec, "Selfie camera", "Video")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="2">Sound</th>
            <th>Loudspeaker</th>
            <td>${searchSpecDetail(p0Spec, "Sound", "Loudspeaker")}</td>
            <td>${searchSpecDetail(p1Spec, "Sound", "Loudspeaker")}</td>
            <td>${searchSpecDetail(p2Spec, "Sound", "Loudspeaker")}</td>
         </tr>
         <tr>
            <th>3.5mm jack</th>
            <td>${searchSpecDetail(p0Spec, "Sound", "3.5mm jack")}</td>
            <td>${searchSpecDetail(p1Spec, "Sound", "3.5mm jack")}</td>
            <td>${searchSpecDetail(p2Spec, "Sound", "3.5mm jack")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="7">Comms</th>
            <th>WLAN</th>
            <td>${searchSpecDetail(p0Spec, "Comms", "WLAN")}</td>
            <td>${searchSpecDetail(p1Spec, "Comms", "WLAN")}</td>
            <td>${searchSpecDetail(p2Spec, "Comms", "WLAN")}</td>
         </tr>
         <tr>
            <th>Bluetooth</th>
            <td>${searchSpecDetail(p0Spec, "Comms", "Bluetooth")}</td>
            <td>${searchSpecDetail(p1Spec, "Comms", "Bluetooth")}</td>
            <td>${searchSpecDetail(p2Spec, "Comms", "Bluetooth")}</td>
         </tr>
         <tr>
            <th>GPS</th>
            <td>${searchSpecDetail(p0Spec, "Comms", "GPS")}</td>
            <td>${searchSpecDetail(p1Spec, "Comms", "GPS")}</td>
            <td>${searchSpecDetail(p2Spec, "Comms", "GPS")}</td>
         </tr>
         <tr>
            <th>NFC</th>
            <td>${searchSpecDetail(p0Spec, "Comms", "NFC")}</td>
            <td>${searchSpecDetail(p1Spec, "Comms", "NFC")}</td>
            <td>${searchSpecDetail(p2Spec, "Comms", "NFC")}</td>
         </tr>
         <tr>
            <th>Infared port</th>
            <td>${searchSpecDetail(p0Spec, "Comms", "Infared port")}</td>
            <td>${searchSpecDetail(p1Spec, "Comms", "Infared port")}</td>
            <td>${searchSpecDetail(p2Spec, "Comms", "Infared port")}</td>
         </tr>
         <tr>
            <th>Radio</th>
            <td>${searchSpecDetail(p0Spec, "Comms", "Radio")}</td>
            <td>${searchSpecDetail(p1Spec, "Comms", "Radio")}</td>
            <td>${searchSpecDetail(p2Spec, "Comms", "Radio")}</td>
         </tr>
         <tr>
            <th>USB</th>
            <td>${searchSpecDetail(p0Spec, "Comms", "USB")}</td>
            <td>${searchSpecDetail(p1Spec, "Comms", "USB")}</td>
            <td>${searchSpecDetail(p2Spec, "Comms", "USB")}</td>
         </tr>

         <tr>
            <th scope="row">Features</th>
            <th>Sensors</th>
            <td>${searchSpecDetail(p0Spec, "Features", "Sensors")}</td>
            <td>${searchSpecDetail(p1Spec, "Features", "Sensors")}</td>
            <td>${searchSpecDetail(p2Spec, "Features", "Sensors")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="4">Battery</th>
            <th>Type</th>
            <td>${searchSpecDetail(p0Spec, "Battery", "Type")}</td>
            <td>${searchSpecDetail(p1Spec, "Battery", "Type")}</td>
            <td>${searchSpecDetail(p2Spec, "Battery", "Type")}</td>
         </tr>
         <tr>
            <th>Charging</th>
            <td>${searchSpecDetail(p0Spec, "Battery", "Charging")}</td>
            <td>${searchSpecDetail(p1Spec, "Battery", "Charging")}</td>
            <td>${searchSpecDetail(p2Spec, "Battery", "Charging")}</td>
         </tr>
         <tr>
            <th>Stand-by</th>
            <td>${searchSpecDetail(p0Spec, "Battery", "Stand-by")}</td>
            <td>${searchSpecDetail(p1Spec, "Battery", "Stand-by")}</td>
            <td>${searchSpecDetail(p2Spec, "Battery", "Stand-by")}</td>
         </tr>
         <tr>
            <th>Talk time</th>
            <td>${searchSpecDetail(p0Spec, "Battery", "Talk time")}</td>
            <td>${searchSpecDetail(p1Spec, "Battery", "Talk time")}</td>
            <td>${searchSpecDetail(p2Spec, "Battery", "Talk time")}</td>
         </tr>

         <tr>
            <th scope="row" rowspan="3">Misc</th>
            <th>Colors</th>
            <td>${searchSpecDetail(p0Spec, "Misc", "Colors")}</td>
            <td>${searchSpecDetail(p1Spec, "Misc", "Colors")}</td>
            <td>${searchSpecDetail(p2Spec, "Misc", "Colors")}</td>
         </tr>
         <tr>
            <th>Models</th>
            <td>${searchSpecDetail(p0Spec, "Misc", "Models")}</td>
            <td>${searchSpecDetail(p1Spec, "Misc", "Models")}</td>
            <td>${searchSpecDetail(p2Spec, "Misc", "Models")}</td>
         </tr>
         <tr>
            <th>Price</th>
            <td>${searchSpecDetail(p0Spec, "Misc", "Price")}</td>
            <td>${searchSpecDetail(p1Spec, "Misc", "Price")}</td>
            <td>${searchSpecDetail(p2Spec, "Misc", "Price")}</td>
         </tr>
      </tbody>
   </table>`

   document.querySelector('.table-result').innerHTML = tableResult;
}

compareResult();