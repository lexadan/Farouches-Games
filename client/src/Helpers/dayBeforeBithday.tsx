export default function getDaysBeforeBD(birthday: string) {
    const birthdate: Date = new Date(birthday);
    const myBirthday: number[] = [birthdate.getDay() ,birthdate.getMonth()]; // 6th of February
    const today = new Date();
    const bday = new Date(today.getFullYear(), myBirthday[1] -1, myBirthday[0]);
    if( today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear()+1);
    }
    const diff = bday.getTime()-today.getTime();
    return Math.floor(diff/(1000*60*60*24));
}