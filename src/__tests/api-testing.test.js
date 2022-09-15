import { diff_minutes } from "../common/core";

test("news details should not be empty", async () => {
  const actualResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68825892e0354082b6776c34857a459c`
  );
  expect(actualResponse).not.toBeNull();
});

test("difference should be zero for same dates", () => {
    let date1 = new Date("09/15/2022");
    let date2 = new Date("09/15/2022")
    console.log(date1, date2)
    const actualResponse = diff_minutes(date1, date2)

    expect(actualResponse).toBe(0);
})
