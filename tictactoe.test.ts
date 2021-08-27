import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(3000)
    
    // test('Clicking the upper left of the square adds an X')
    let upperLeft = await (await driver).findElement(By.id('cell-0'));
    await upperLeft.click();
    await driver.sleep(3000)

    // test('Clicking the upper right of the square adds an X')
    let upperRight = await (await driver).findElement(By.id('cell-2'));
    await upperRight.click();
    await driver.sleep(3000)

    // test('Clicking the lower left of the square adds an X')
    let lowerLeft = await (await driver).findElement(By.id('cell-6'));
    await lowerLeft.click();
    await driver.sleep(3000)

    // test('Clicking the middle square adds an X')
    let middleSquare = await (await driver).findElement(By.id('cell-4'));
    await middleSquare.click();
    await driver.sleep(3000)
});


