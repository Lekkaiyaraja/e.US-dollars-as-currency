fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries that use US dollars as currency
    const countriesWithUSD = data.filter(country => {
      return country.currencies && country.currencies.USD;
    });

    // Print the names of the countries
    console.log("Countries that use US dollars as currency:");
    countriesWithUSD.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
