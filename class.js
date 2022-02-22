class Support {
    name;
    designation = 'support web dev';
    address = 'Bangladesh';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}

const amir = new Support('Amir Khan', 'Bangladesh');
const salman = new Support('Salman Khan', 'Dobai');
const Sahruk = new Support('Sahruk Khan', 'Dobai');
const aksoi = new Support('aksoi Khan', 'Dobai');
console.log(amir, salman, Sahruk, aksoi);

amir.startSession();
salman.startSession();