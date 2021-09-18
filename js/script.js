/*Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.*/

/*Milestone 2
Coloriamo le icone per tipo*/

/*Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone*/

const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

  const colors = {
	food: "pink",
	animal: "green",
	beverage: "yellow"
};

// ciclo su ogni icona e compongo il markup html da inserire 

const printIcons = (arr, container) => {
	container.innerHTML = "";
	arr.forEach(
		(elm) => {
			const {name, family, prefix, color} = elm;

			document.getElementById("icons").innerHTML += `
					<div class="icon">
								<i class="${family} ${prefix}${name}" style="color:${color}" ></i>
								<div class="icon-name">${name}</div>
					</div>
			`
		}
	);
}

//   Selezioniamo il contenitore di icone e le coloriamo in base alla category
const containerIcons = document.getElementById("icons");

const iconsColored = icons.map(
    (elm) => {
        return {
            ...elm,
			color: colors[elm.category]
        };
		
    }
);


// console.log(iconsColored.color);


printIcons(iconsColored, containerIcons);

// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const iconCategories = [];
icons.forEach(
	(elm) => {
		if ( iconCategories.includes(elm.category) == false ) {
			iconCategories.push(elm.category);
		}
	}
);


const selectCategories = document.getElementById("category");

iconCategories.forEach(
	(elm) => {
		selectCategories.innerHTML += `<option value="${elm}">${elm}</option>`;
	}
);

// creo l'evento "change" sulla select creata
selectCategories.addEventListener("change", 
	function() {
		// console.log(selectCategories.value);

		const iconsFiltered = iconsColored.filter(
			(elm) => {
				if ( elm.category == selectCategories.value || selectCategories.value == "" ) {
					return true;
				}
				return false;
			}
		);

		printIcons(iconsFiltered, containerIcons);
	}
);
