function populate(countrydetails){
    let country_name = countrydetails[0].name;
    let country_capital = countrydetails[0].capital;
    let timezone = countrydetails[0].timezones[0];
    let callingcode = countrydetails[0].callingCodes[0];
    let population = countrydetails[0].population;
    let currency = countrydetails[0].currencies[0].name;
    let symbol = countrydetails[0].currencies[0].symbol;
    let language = countrydetails[0].languages[0].name;
    let flag = countrydetails[0].flag;

    console.log(country_name,country_capital,timezone,callingcode,population,currency,symbol,language,flag);

    resultname.innerHTML = country_name;
    resultcapital.innerHTML = country_capital;
    resulttimezone.innerHTML = timezone;
    resultcallingcode.innerHTML =`+ ${callingcode}`;
    resultpopulation.innerHTML = population;
    resultcurrency.innerHTML = currency;
    resultsymbol.innerHTML = symbol;
    resultlanguage.innerHTML = language;
    resultflag.src = flag;
}

function fetchCountry(){
    let country_name = countryname.value;
    let url = `https://restcountries.eu/rest/v2/name/${country_name}?fullText=true`
    fetch(url).then(resp=>resp.json()).then(data=>populate(data));
}

function clearAll(){
    countryname.value = "";
    resultname.innerHTML = "---";
    resultcapital.innerHTML = "---";
    resulttimezone.innerHTML = "---";
    resultcallingcode.innerHTML = "---";
    resultpopulation.innerHTML = "---";
    resultcurrency.innerHTML = "---";
    resultsymbol.innerHTML = "---";
    resultlanguage.innerHTML = "---";
    resultflag.src = "---";
}