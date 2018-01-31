(function() {
  const button = document.getElementById('button');
  const content = document.getElementById('content');
  button.onclick = (e) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('get', 'https://cheese-selector-api.herokuapp.com/cheeses/random');
    xhttp.onloadend = () => {
      if (xhttp.responseText) {
        const response = JSON.parse(xhttp.responseText);
        const outerDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        const innerDiv = document.createElement('div');
        h2.innerText = response.name;
        let { color, flavor, hardness, texture, aging, animalMilk, hasRennet, hasRawMilk, countryOrState, fatContent, goesWellWith, ingredientIn } = response;
        const rColor = color ? `<p>Color: ${color}</p>` : '';
        const rFlavor = flavor ? `<p>Flavor: ${flavor}</p>`: '';
        const rHardness = hardness ? `<p>Hardness: ${hardness}</p>` : '';
        const rTexture = texture ? `<p>Texture: ${texture}</p>` : '';
        const rAging = aging ? `<p>Aged for: ${aging}</p>` : '';
        const rAnimalMilk = animalMilk ? `<p>Animal it comes from: ${animalMilk}</p>` : '';
        const rHasRennet = hasRennet ? `<p>Contains rennet?: ${hasRennet}</p>` : '';
        const rHasRawMilk = hasRawMilk ? `<p>Contains raw milk?: ${hasRawMilk}</p>` : '';
        const rCountryOrState = countryOrState ? `<p>Country of origin from: ${countryOrState}</p>` : '';
        const rFatContent = fatContent ? `<p>Fat content: ${fatContent}</p>` : '';
        const rGoesWellWith = goesWellWith ? `<p>Goes well with: ${goesWellWith}</p>` : '';
        const rIngredientIn = ingredientIn ? `<p>Good ingredient in: ${ingredientIn}</p>` : '';
        innerDiv.innerHTML = `
          ${rColor}${rFlavor}${rHardness}${rTexture}${rAging}${rAnimalMilk}${rHasRennet}${rHasRawMilk}${rCountryOrState}${rFatContent}${rGoesWellWith}${rIngredientIn}
        `;
        outerDiv.className = 'outerdiv';
        if (response.color.includes('orange')) {
          outerDiv.style.backgroundColor = 'orange';
        } else if (response.color.includes('pale yellow')) {
          outerDiv.style.backgroundColor = 'lightyellow';
        } else {
          outerDiv.style.backgroundColor = 'wheat';
        }
        outerDiv.appendChild(h2);
        outerDiv.appendChild(innerDiv);
        content.appendChild(outerDiv);
      }
    }
    xhttp.send();
  };
})();
