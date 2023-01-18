import dayjs from "dayjs";

export function generateDateFromYearBeginning () {
    const firtDayOfTheYear = dayjs().startOf('year');
    const today = new Date();

    const dates = []
    let compareDate = firtDayOfTheYear;

    while(compareDate.isBefore(today)) {
        dates.push(compareDate.toDate());
        compareDate = compareDate.add(1, 'day');
    }

    return dates;
}