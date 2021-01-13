import moment from 'moment';
import 'moment/locale/sq';


export function ToDateTime(value){
    return moment(value).locale('sq').format('DD/MM/YYYY hh:mm:ss');
}

