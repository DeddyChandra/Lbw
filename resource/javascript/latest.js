const api_get_latest = "https://api-mobilespecs.azharimm.site/v2/latest";

async function getData(api_url) {
	
	const resp = await fetch(api_url).then(response=>response.json()).then(
		response=>{
			const phones = response.data.phones;
			console.log(phones);
			show(JSON.parse(JSON.stringify(phones)));
			console.log(JSON.parse(JSON.stringify(phones))[0].phone_name);
		}
	);
}


function show(data){
	
	let tab = 
		`<tr>
			<th>Phone Name</th>
			<th>Slug</th>
			<th>Image</th>
			<th>Detail</th>
		</tr>
	`;
	
	let i = 0;
	
	for(let p of Object.keys(data)){
		//console.log(data[p].phone_name);
		tab+= `
			<tr>
				<td>${data[p].phone_name}</td>
				<td>${data[p].slug}</td>
				<td><img src="${data[p].image}"></td>
				<td>${data[p].detail}</td>
			</tr>
		`;
		
		i += 1;
		
	}
	
	document.getElementById("latestTab").innerHTML = tab;
	
}

getData(api_get_latest);