import { test } from '../fixtures/TodoFixture'

const TODO_ITEMS = [
    'buy some cheese',
    'buy bottle of wine, or two',
    'celebrate'
];

// our test is imported from fixtures folder
// so we can have access to tododDempPage and noneExistingPage objects
// in callback function trhough destructuring and we can use it for our needs
test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ todoDemoPage }) => {
    await todoDemoPage.addTodo(TODO_ITEMS[0])
    await todoDemoPage.checkInputIsEmpty();
    await todoDemoPage.addTodo(TODO_ITEMS[1])
    await todoDemoPage.checkAddedTodos([TODO_ITEMS[0], TODO_ITEMS[1]])
    await todoDemoPage.checkNumberOfTodosInLocalStorage(2);
  });

  test('should clear text input field when an item is added', async ({ todoDemoPage }) => {
    await todoDemoPage.addTodo(TODO_ITEMS[0])
    await todoDemoPage.checkInputIsEmpty();
    await todoDemoPage.checkNumberOfTodosInLocalStorage(1);
  });


  test('should append new items to the bottom of the list', async ({ todoDemoPage }) => {
    await todoDemoPage.addDefaultTodos(TODO_ITEMS);
    await todoDemoPage.checkDefaultAddedTodods(TODO_ITEMS);
    await todoDemoPage.checkAddedTodos(TODO_ITEMS)
    await todoDemoPage.checkNumberOfTodosInLocalStorage(3);
  });
});
