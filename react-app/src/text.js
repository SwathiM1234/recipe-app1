var fetch=require('fetch').fetchUrl;

 fetch("https://www.food2fork.com/api/search?key=ca2454d7306f760399be2ed3932c1ed7&q=chicken%20breast&page=2").then(data=>console.log(data)); 
