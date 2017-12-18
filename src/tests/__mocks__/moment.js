//import moment from 'moment' //can't do that because it will be used mocked version of moment 

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};