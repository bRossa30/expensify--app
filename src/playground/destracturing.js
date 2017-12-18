//object destracturing

const person = {
    name: "Beata",
    age: 30,
    location: {
        city: "Warsaw",
        temp: 0
    }
};

const { name: firstName = 'Anonymous' , age } = person; //default name if it's not defined in object

console.log(`${firstName} is ${age} years old.`);

const { city, temp: temperature } = person.location;

if (city && typeof(temperature) === 'number') {
    console.log(`It's ${temperature} degree in ${city}.`);
}

//array destracturing

const address = ['17 Portowa', 'Warszawa', 'mazowieckie', '03197'];

const [, cities = 'Lomza', state] = address;

console.log(`You are in ${cities} in ${state}`);