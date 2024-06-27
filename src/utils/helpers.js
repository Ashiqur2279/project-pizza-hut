//function of currency formatting
export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "BDT",
  }).format(value);
}

//function of date formatting
export function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}

//function of minutesLeft
export function calcMinutesLeft(dateString) {
  const date1 = new Date().getTime();
  const date2 = new Date(dateString).getTime();

  return Math.round((date2 - date1) / 60000);
}
