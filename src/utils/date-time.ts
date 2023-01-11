import { Moment } from "moment-timezone";
import moment from "services/datetime/moment";

export type DayOfWeekTitles =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
export type DayOfWeekAlias =
  | "MON"
  | "TUE"
  | "WED"
  | "THU"
  | "FRI"
  | "SAT"
  | "SUN";

export interface DayOfWeeks {
  title: DayOfWeekTitles;
  alias: DayOfWeekAlias;
}

export interface DayOfWeekObject {
  monday: DayOfWeeks;
  tuesday: DayOfWeeks;
  wednesday: DayOfWeeks;
  thursday: DayOfWeeks;
  friday: DayOfWeeks;
  saturday: DayOfWeeks;
  sunday: DayOfWeeks;
}

export const DAY_OF_WEEKS: DayOfWeekObject = {
  monday: {
    title: "Monday",
    alias: "MON",
  },
  tuesday: {
    title: "Tuesday",
    alias: "TUE",
  },
  wednesday: {
    title: "Wednesday",
    alias: "WED",
  },
  thursday: {
    title: "Thursday",
    alias: "THU",
  },
  friday: {
    title: "Friday",
    alias: "FRI",
  },
  saturday: {
    title: "Saturday",
    alias: "SAT",
  },
  sunday: {
    title: "Sunday",
    alias: "SUN",
  },
};

export const DATE_FORMAT = "YYYY-MM-DD";
export const LONG_DATE_FORMAT = "DD MMM YYYY";
export const LONG_MONTH_FORMAT = "MMMM DD, YYYY";
export const SHORT_DATE_TIME_FORMAT = "DD/MM HH:mm";
export const SHORT_DATE_FULL_TIME_FORMAT = "DD MMM - LTS";
export const LONG_DATE_TIME_FORMAT = "DD MMM YYYY - LT";
export const CALENDAR_DATE_FORMAT = "YYYY-MM-DD";
export const TIME_FORMAT = "LT";
export const LONG_MONTH_NAME_FORMAT = "DD MMM YYYY";
export const DATE_TIME_24H_FORMAT = "DD.MM.YYYY HH:mm";
export const HOUR_MIN_24H_FORMAT = "H:mm";
export const TIME_ZONE_FORMAT = "HH:mm Z";
export const TIME_24H_FORMAT = "HH:mm";
export const HOUR_24H_FORMAT = "HH";
export const COMBINE_DATE_TIME_FORMAT = `${DATE_FORMAT}LT`;
export const YEAR_FORMAT = "yyyy";

export function formatYear(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(YEAR_FORMAT);
}

export function formatDate(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(DATE_FORMAT);
}

export function formatTime(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(TIME_FORMAT);
}

export function formatShortDateTime(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(SHORT_DATE_TIME_FORMAT);
}

export function formatShortDateFullTime(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(SHORT_DATE_FULL_TIME_FORMAT);
}

export function formatLongDateTime(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(LONG_DATE_TIME_FORMAT);
}

export function formatLongMonth(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(SHORT_DATE_TIME_FORMAT);
}

export function formatDateTime24H(value: moment.MomentInput) {
  if (!value) {
    return "";
  }
  return moment(value).format(DATE_TIME_24H_FORMAT);
}

export function formatIOString(time: moment.MomentInput) {
  let momentTime = time as Moment;
  if (!(time instanceof moment)) {
    momentTime = moment(time);
  }
  return momentTime.toISOString()?.replace(/[.]\d+/, "");
}

export function formatStartOfDate(value?: moment.MomentInput) {
  if (!value) {
    return "";
  }
  // 2022-02-02T00:00:00Z
  let startOfDay = moment.utc(new Date()).clone().startOf("day");
  if (value) {
    startOfDay = moment.utc(value).clone().startOf("day");
  }
  return formatIOString(startOfDay);
}

export function combineDateTime(
  date: string,
  time: string,
  format: true
): string;
export function combineDateTime(
  date: string,
  time: string,
  format: false
): Moment;
export function combineDateTime(
  date: string,
  time: string,
  format?: boolean
): string;
export function combineDateTime(date: string, time: string, format = true) {
  if (!date) {
    date = formatDate(new Date());
  }
  if (!time) {
    time = formatTime(new Date());
  }
  const momentObj = moment(date + time, COMBINE_DATE_TIME_FORMAT);
  return format ? momentObj.format() : momentObj; // 2022-02-02T23:30:00+07:00Z
}

export const getWeekFromNow = (date: Moment) => {
  const currentWeek = moment().get("w");
  const selectedWeek = date.get("w");
  const diff = currentWeek - selectedWeek;
  if (diff === 0) {
    return "This week";
  }
  if (diff === -1) {
    return "Next week";
  }
  if (diff === 1) {
    return "Last week";
  }
  if (diff < -1) {
    return `Next ${Math.abs(diff)} weeks`;
  }
  if (diff > 0) {
    return `Past ${diff} weeks`;
  }
};
