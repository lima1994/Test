//Sparar url som en const för att anropa via fetch smidigt. Funktionen hämtar info från api och skapar en lista. Varje rad läggs till med namn och förnamn i listan som options. 
const api_url = ('https://cgi-osd-kodtest-default-rtdb.europe-west1.firebasedatabase.app/businessCards.json')
async function createList() {
    const response = await fetch(api_url);
    const data = await response.json()
    let listOptions = document.getElementById("selectPerson");
    for (let name in data) {
        let option = document.createElement("option")
        const j = name
        option.text = data[j].name + ' ' + data[j].surName;
        option.value = j
        listOptions.add(option);

    }
}
createList();
// Data hämtas från api:n som tidigare. Indexen av personen laddas in som variabel i, som sedan används för att hämta data från api:n. All info skrivs ut i tabell via html-id:et. 
// För att ladda ny bild för varje nytt val används "new Date().getTime", det görs för att lägga till en tidpunkt, så att varje url blir unik. 
async function getapi() {
    let person = document.getElementById("selectPerson");
    let i = person.options[person.selectedIndex].value

    const response = await fetch(api_url);
    const data = await response.json()
    document.getElementById("email").innerHTML = `Email: ` + data[i].email
    document.getElementById("name").innerHTML = `Name: ` + data[i].name
    document.getElementById("surName").innerHTML = `Surname: ` + data[i].surName
    document.getElementById("telephone").innerHTML = `Telephone: ` + data[i].telephone
    document.getElementById("id").innerHTML = `Id: ` + data[i].id
    document.getElementById("image").innerHTML = `<img src=${data[i].image + new Date().getTime()}>`

}
getapi();