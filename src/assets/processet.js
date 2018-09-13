import moment from 'moment'

const start_timestamp = 1514764800;
function time_generator () {
    return new Date(Math.floor(start_timestamp + (2629743 * (Math.random() * (11 - 1) + 1)))*1000);
}

function getProcent(){
    return Math.random() * (100 - 0) + 0;
}
export const proceset = [
    {
      "_id": "a5b96fcae419ff0ec41bbbbe3",
       "title": "Рассмотрение кредитной заявки",
       "repeats": "340233",
        "associate": "120",
        "scenario": "32",
        "mid_execute_time":  moment(time_generator().toString()).locale('ru').format("h [ч] m [мин]"),
        "active_time":  moment(time_generator().toString()).locale('ru').format('h [ч] m [мин]'),
        "begin": moment(time_generator().toString()).locale('ru').format('LL'),
        "end": moment(time_generator().toString()).locale('ru').format('LL'),
        "data_of_load": moment(time_generator().toString()).locale('ru').format('LL'),
        "completed": getProcent().toFixed(1) + '%'
    },
    {
      "_id": "b5b96fcae37f9124709a0e862",
      "title": "Ожидание платежей",
        "repeats": "3433",
        "associate": "12",
        "scenario": "322",
        "mid_execute_time":  moment(time_generator().toString()).locale('ru').format('h [ч] m [мин]'),
        "active_time":  moment(time_generator().toString()).locale('ru').format('h [ч] m [мин]'),
        "begin": moment(time_generator().toString()).locale('ru').format('LL'),
        "end": moment(time_generator().toString()).locale('ru').format('LL'),
        "data_of_load": moment(time_generator().toString()).locale('ru').format('LL'),
        "completed": getProcent().toFixed(1) + '%'
    },
    {
      "_id": "g5b96fcaeb44e594bbd105916",
      "title": "Оформление страховой премии",
        "repeats": "233",
        "associate": "33",
        "scenario": "5",
        "mid_execute_time":  moment(time_generator().toString()).locale('ru').format('h [ч] m [мин]'),
        "active_time":  moment(time_generator().toString()).locale('ru').format('LT'),
        "begin": moment(time_generator().toString()).locale('ru').format('LL'),
        "end": moment(time_generator().toString()).locale('ru').format('LL'),
        "data_of_load": moment(time_generator().toString()).locale('ru').format('LL'),
        "completed": getProcent().toFixed(1) + '%'
    }
  ];
