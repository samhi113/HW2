export function changePage(pageName) {
    console.log(pageName);
    let pageVarName = "../pages/" + pageName + ".html";
    console.log(pageVarName);
    $("#app").html(pageVarName);
}