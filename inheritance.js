// common class 
class TeamMember {
    name;
    designation = 'support web dev';
    address = 'Bangladesh';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}
const amir = new Support('Amir Khan', 'Bangladesh', 11);
const salman = new Support('Salman Khan', 'Dobai', 3);
const Sahruk = new Support('Sahruk Khan', 'Dobai', 4);
const aksoi = new Support('aksoi Khan', 'Dobai', 6);
console.log(amir, salman, Sahruk, aksoi);

amir.startSession();
salman.startSession();


class StudentCare extends TeamMember {
    buildARoutine(Student) {
        console.log(this.name, 'buid a routine for', Student);
    }
}
const alia = new StudentCare('alia batt', 'mumbai');
console.log(alia);

class NaptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}
const ossoriya = new NaptuneDev('ash', 'mumbai', 'android');
ossoriya.releaseApp('1.4.5')
console.log(ossoriya);