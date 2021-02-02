const projectGallery = $("#projectGallery");


async function getAsync() 
{
  let response = await fetch(`https://hugolainen.github.io/Portfolio/datafile.json`);
  let data = await response.json()
  return data;
}

getAsync().then((data) => 
{
    
});




///////// Project card HTML code
/*
    <div class="d-flex flex-wrap justify-content-around">
        <div class="card bg-info my-3" style="width:350px">
            <img class="card-img-top" style="height:180px" src="images/Reservia.png" alt="Reservia">
            <div class="card-body">
                <h4 class="card-title"> Reservia </h4>
                <p class="card-text"> A hotel reservation mock-up turned into a web page </p>
                <ul class="list-inline">
                    <li class="list-inline-item skillTag"> HTML </li>
                    <li class="list-inline-item skillTag"> CSS </li>
                </ul>
                <a target="_blank" href="https://hugolainen.github.io/Reservia/public/" class="btn btn-primary">Live</a>
                <a target="_blank" href="https://github.com/Hugolainen/Reservia" class="btn btn-primary">Code</a>
            </div>
        </div>
    </div>
*/