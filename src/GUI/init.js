import webdriver from 'selenium-webdriver';
import { basicUrl, dashboardGraph } from './config.js';

const { Builder,By,until} = webdriver;

let driver = await new Builder().forBrowser('chrome').build();

const getDriver=()=>{ 
    return driver;
}
const navigateToBasicUrl=()=>{
    return driver.get(basicUrl);
}
const findElementByXPath=(xpath)=>{
    return driver.findElement(By.xpath(xpath)).getText();
}
const waitUntilElementLocatedByClass=()=>{
    return driver.wait(until.elementLocated(By.className(dashboardGraph)), 3000);
}
const driverQuit = async (driver)=>{
    await driver.quit();
}

export default function setInit() {
    return {
        getDriver,
        navigateToBasicUrl,
        findElementByXPath,
        waitUntilElementLocatedByClass,
        driverQuit,
    };
}