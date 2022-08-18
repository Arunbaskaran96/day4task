var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all" );
xhr.send();
xhr.responseType = "json";

xhr.onload = function displayresult() {
    const countries = xhr.response;
    for (index in countries){
        console.log(countries[index].name.common, "=",  countries[index].population, "region =", countries[index].region, "sub region =", countries[index].subregion)
        console.log(countries[index].flags)
    }
}


