import { test as base } from '@playwright/test';
import { TodoDemoPage } from '../pages/TodoPage';

type MyFixtures = {
  todoDemoPage: TodoDemoPage;
  noneExistingPage: any
};

export const todoDemoPage = async({page}, use) => {
  const todoDemoPage = new TodoDemoPage(page);
  // Set up the fixture.
  await todoDemoPage.goto();
  // Use the fixture value in the test.
  await use(todoDemoPage);
}

// we can create as many fixtures as we want, but I prefer to store them in separate files
export const noneExistingPage = async({page}, use) => {
  // Let's imagine we have another fixter-page set up here
}

export const test = base.extend<MyFixtures>({todoDemoPage, noneExistingPage});


