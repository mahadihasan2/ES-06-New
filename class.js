class students {
    name;
    role = 'Work for Web Devoloper';
    addrees = 'BD';
    constructor(name, addrees, role) {
        this.name = name
        this.addrees = addrees
        this.role = role
    }
    support() {
        console.log('This is your treat')
    }
}
const amir = new students('amir Khan', 'BD', 'Actor')
const salman = new students('Salman Khan', "Dubai", 'Polatisian')
const SharukhKhan = new students('Sharukh Khan', "Indaia", 'BusinessMan')
console.log(amir, salman, SharukhKhan)