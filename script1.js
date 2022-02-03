const api_url = ('https://cgi-osd-kodtest-default-rtdb.europe-west1.firebasedatabase.app/businessCards.json')
async function createList() {
    const response = await fetch(api_url);
    const data = await response.json()
    let selects = document.getElementById("selectPerson");
    for (var name in data) {
        var option = document.createElement("option")
        const j = name
        option.text = data[j].name + ' ' + data[j].surName;
        option.value = j
        selects.add(option);

    }
}
createList();

async function getapi() {
    var select = document.getElementById("selectPerson");
    var i = select.options[select.selectedIndex].value

    const response = await fetch(api_url);
    const data = await response.json()
    document.getElementById("email").innerHTML = data[i].email
    document.getElementById("name").innerHTML = data[i].name
    document.getElementById("surName").innerHTML = data[i].surName
    document.getElementById("telephone").innerHTML = data[i].telephone
    document.getElementById("id").innerHTML = data[i].id
    document.getElementById("image").innerHTML = `<img src=${data[i].image + new Date().getTime()}>`

}
getapi();