const projectGallery = $("#projectGallery");


async function getAsync() 
{
  let response = await fetch(`https://hugolainen.github.io/Portfolio/datafile.json`);
  let data = await response.json()
  return data;
}

getAsync().then((data) => 
{
    const dev_projectList = data.Dev_projects;
    const eng_projectList = data.Eng_projects;

    generateCardGallery(projectGallery, dev_projectList, "dev");
    generateCardGallery(projectGallery, eng_projectList, "eng");

});

// RecipeCard gallery element generation
function generateCardGallery(galleryElement, cardDatalist, type){
    for(let i=0; i<cardDatalist.length;i++){
        galleryElement.append(generateProjectCard(cardDatalist[i], type));
    }
}

function generateProjectCard(cardData, type)
{
    var card = $("<div> </div>");
    card.addClass("card bg-info shadow-sm my-3");
    card.attr("style", "width:350px");
    
    // Placeholder image
    var image=$("<img src=\"" + cardData.img + "\" class=\"card-img-top\" alt=\"" + cardData.title + "\">");
    image.attr("style", "height:180px");

    // Card-body
    var cardBody =  $("<div> </div>");
    cardBody.addClass("card-body");

    var title = $("<h4> </h4>").text(cardData.title);
    title.addClass("card-title");
    var desc = $("<p> </p>").text(cardData.desc);
    desc.addClass("card-text");
 
    // TagList
    var tagList = $("<ul> </ul>");
    tagList.addClass("list-inline");

    for(let i=0; i<cardData.tags.length; i++){
        let tag= $("<li> </li>").text(cardData.tags[i]);
        tag.addClass("list-inline-item skillTag");
        tagList.append(tag);
    }

    // Buttons
    var buttonView = $("<a target=\"_blank\"> </a>");
    buttonView.addClass("btn btn-primary");

    if(type === "dev"){
        buttonView.text("Live");
        buttonView.attr("href", cardData.linkLive);
    } 
    else if(type === "eng"){
        buttonView.text("Documentation");
        buttonView.attr("href", cardData.linkDocu);
    }
    else{
        alert("wrong project type entered");
    }

    var buttonCode = $("<a target=\"_blank\"> </a>");
    buttonCode.addClass("btn btn-primary");
    buttonCode.text("Code");
    buttonCode.attr("href", cardData.linkCode);

    cardBody.append(title);
    cardBody.append(desc);
    cardBody.append(tagList);
    cardBody.append(buttonView);
    cardBody.append(buttonCode);

    card.append(image);
    card.append(cardBody);

    return card;
}

///////// Project card HTML code
/*
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
*/