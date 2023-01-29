import { expect, Locator, Page } from '@playwright/test';

export class TodoDemoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoTitle: Locator;
  readonly todoCount: Locator

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    this.todoTitle = page.getByTestId('todo-title');
    this.todoCount = page.getByTestId('todo-count');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(data: string) {
    await this.newTodoInput.fill(data)
    await this.newTodoInput.press("Enter")
  }

  async addDefaultTodos(todosItems: string[]) {
    for (const todo of todosItems) {
      await this.addTodo(todo)
    }
  }

  async checkDefaultAddedTodods(todos: string[]) {
    await expect(this.page.getByText(`${todos.length} items left`)).toBeVisible();
    await expect(this.todoCount).toHaveText(`${todos.length} items left`);
    await expect(this.todoCount).toContainText(todos.length.toString());
  }

  async checkAddedTodos(todos: string[]) {
    await expect(this.todoTitle).toHaveText(todos)
  }

  async checkNumberOfTodosInLocalStorage(expected: number) {
    return await this.page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).length === e;
    }, expected);
  }

  async checkNumberOfCompletedTodosInLocalStorage(expected: number) {
    return await this.page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).filter((todo: any) => todo.completed).length === e;
    }, expected);
  }

  async checkInputIsEmpty() {
    await expect(this.newTodoInput).toBeEmpty();
  }

}