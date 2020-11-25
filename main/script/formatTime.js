import dayjs from "dayjs";

export default function formatTime(time) {
  return dayjs(time).format("YYYY-MM-DD HH:mm");
}
