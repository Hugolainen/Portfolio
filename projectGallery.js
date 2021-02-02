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
    var element = $("<div> </div>");
    element.addClass("p-3 col-lg-4 col-10 m-auto");

    var card = $("<div> </div>");
    card.addClass("card bg-info shadow");
    card.attr("style", "height:fit-content");
    
    // Image
    var image=$("<img >");
    image.addClass("card-img-top cardStyle__image");
    image.attr("style", "height:250px");
    image.attr("src", cardData.img);
    image.attr("alt", cardData.title);

    // Card-body
    var cardBody =  $("<div> </div>");
    cardBody.addClass("card-body");

    var title = $("<h4> </h4>").text(cardData.title);
    title.addClass("card-title cardStyle__title");

    var desc = $("<p> </p>").text(cardData.desc);
    desc.addClass("card-text cardStyle__desc");
 
    // TagList
    var tagList = $("<ul> </ul>");
    tagList.addClass("list-inline text-center");

    for(let i=0; i<cardData.tags.length; i++){
        let tag= $("<li> </li>").text(cardData.tags[i]);
        tag.addClass("list-inline-item cardStyle__tag m-1 bg-secondary text-white");
        tagList.append(tag);
    }

    // Buttons
    var buttonBar = $("<div> </div>");
    buttonBar.addClass("text-center");

    var buttonView = $("<a target=\"_blank\"> </a>");
    buttonView.addClass("btn btn-primary col-5 mr-3 cardStyle__button");

    if(type === "dev"){
        buttonView.text("Live");
        buttonView.attr("href", cardData.linkLive);
        if(cardData.linkLive === "#")
        {
            buttonView.addClass("disabled");
        }
    } 
    else if(type === "eng"){
        buttonView.text("Documentation");
        buttonView.attr("href", cardData.linkDocu);
        if(cardData.linkDocu === "#")
        {
            buttonView.addClass("disabled");
        }
    }
    else{
        alert("wrong project type entered");
    }

    var buttonCode = $("<a target=\"_blank\"> </a>");
    buttonCode.addClass("btn btn-primary col-5 cardStyle__button");
    buttonCode.text("Code");
    buttonCode.attr("href", cardData.linkCode);

    buttonBar.append(buttonView);
    buttonBar.append(buttonCode);

    // Building
    cardBody.append(title);
    cardBody.append(desc);
    cardBody.append(tagList);
    cardBody.append(buttonBar);

    card.append(image);
    card.append(cardBody);

    element.append(card);

    return element;
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