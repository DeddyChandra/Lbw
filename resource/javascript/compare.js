//mengambil data dari url
function getUrlVars(param=null)
{
	if(param !== null)
	{
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars[param];
	} 
	else 
	{
		return null;
	}
}
getUrlVars("p0");

let p0, p1, p2;
   p0 = fetch('https://api-mobilespecs.azharimm.site/v2/' + getUrlVars("p0"))
   .then(response => response.json())
   .then(response => {
    // console.log(response.data.phone_images[0]);
    const phoneDetail = showDetail(response.data);
 });
   console.log(p0)
