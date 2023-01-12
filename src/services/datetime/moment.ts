import moment from "moment-timezone";

export const setLocale = ({ week }: any) => {
  moment.updateLocale("en", {
    week,
  });
};

export const initMoment = () => {
  setLocale({ week: { dow: 1 } });
};

initMoment();
export default moment;
