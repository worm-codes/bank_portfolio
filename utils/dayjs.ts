import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/tr';

/**
 * installed weekday plugin to fix the error `clone.weekday` when trying to set the date value
 * @see https://github.com/ant-design/ant-design/issues/26190#issuecomment-703673400
 */

dayjs.locale('tr');
dayjs.extend(weekday);
dayjs.extend(localeData);

export default dayjs;
