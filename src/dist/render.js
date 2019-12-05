class Renderer {
    renderRecipes(data) {
        $(".recipes-container").empty() 
        let source = $('#container-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({ data });
        $('.recipes-container').append(newHTML);
    }
}

const r = new Renderer