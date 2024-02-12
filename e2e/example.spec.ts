import { test, expect } from '@playwright/test';

/* 코드 10-2
test("코드 10-2",async ({ page }) => {
  await page.getByLabel("User Name").fill("John");
  await page.getByLabel("Password").fill("secret-password");
  await page.getByRole("button", { name: "Sign in" }).click();
})
*/

/* 코드 10-3
test("Locator를 사용한 단언문 작성법",async ({ page }) => {
  // 특정 문자열을 가진 요소를 취득해서 화면에 보이는 상태인지 검증한다.
  await expect(page.getByText("Welcome, John!")).toBeVisible();
  // 체크박스체크 박스를 취득해서 체크되어 있는지됐는지 검증한다.
  await expect(page.getByRole("checkbox")).toBeChecked();
  // not으로 진릿값을 반전시킨다.
  await expect(page.getByRole("heading")).not.toContainText("some text");
})
*/

/* 코드 10-4
test("페이지를 사용한 단언문 작성법",async ({ page }) => {
  // 페이지 URL에 "intro"가 포함됐는지 검증한다.
  await expect(page).toHaveURL(/.*intro/);
  // 페이지 제목에 "Playwright"가 포함됐는지 검증한다.
  await expect(page).toHaveTitle(/Playwright/);
})
*/

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // 페이지 제목에 "Playwright"가 포함됐는지 검증한다.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // "Get started"라는 접근 가능한 이름을 가진 링크를 취득하고, 링크를 클릭한다.
  await page.getByRole("link", { name: "Get started" }).click();

  // 페이지 URL에 "intro"가 포함됐는지 검증한다.
  await expect(page).toHaveURL(/.*intro/);
});
