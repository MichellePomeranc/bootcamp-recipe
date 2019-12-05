const getRecipes = function () {
    let input = $("#ingredientInput").val()

    $.get(`recipes/${input}`, function(data){
        console.log({ data })
        r.renderRecipes(data)
    })
}
