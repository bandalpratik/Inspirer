export function diff_minutes(dt2, dt1) {
  console.log(dt2, dt1);
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.round(diff);
}
