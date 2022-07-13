export default function getDate(timestamp: number) {
    var date_not_formatted = new Date(timestamp * 1000);

    var formatted_string = '';

    if(date_not_formatted.getDate() < 10) {
        formatted_string += "0";
    }
    
    formatted_string += date_not_formatted.getDate();
    formatted_string += "-";
    
    switch(date_not_formatted.getMonth()) {
        case 0:
        formatted_string += 'Janvier';
            break;
        case 1:
        formatted_string += 'Fevrier';
            break;
        case 2:
        formatted_string += 'Mars';
            break;
        case 3:
        formatted_string += 'Avril';
            break;
        case 4:
        formatted_string += 'Mai';
            break;
        case 5:
        formatted_string += 'Juin';
            break;
        case 6:
        formatted_string += 'Juillet';
            break;
        case 7:
        formatted_string += 'Aout';
            break;
        case 8:
        formatted_string += 'Septembre';
            break;
        case 9:
        formatted_string += 'Octobre';
            break;
        case 10:
        formatted_string += 'Novembre';
            break;
        case 11:
        formatted_string += 'Decembre';
            break;
    }

    /* if (date_not_formatted.getMonth() < 9) {
        formatted_string += "0";
    }
    
    formatted_string += (date_not_formatted.getMonth() + 1);
    formatted_string += "-";

    formatted_string += date_not_formatted.getFullYear(); */    

    return formatted_string;
}

export function getTime(timestamp: number) {
    var date_not_formatted = new Date(timestamp * 1000);

    var formatted_string = date_not_formatted.getHours() + ':';

    var minute = date_not_formatted.getMinutes();

    if (minute < 10) {
        formatted_string += '0' + minute;
    } else {
        formatted_string += minute;
    }

    return formatted_string;
}