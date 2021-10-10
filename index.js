async function test(){ 

const webdriver = require('selenium-webdriver');
let by = webdriver.By;

const driver = new webdriver.Builder().forBrowser('firefox').build();

async function login(){
    let email = 'ti-raphael@hotmail.com';
    driver.manage().window().maximize();

    driver.get('http://aluno.cienciaemacao.com.br/login');

    driver.findElement(by.name('password')).sendKeys('123123');
    driver.findElement(by.name('email')).sendKeys(email);
    driver.findElement(by.tagName('button')).click();

    let hasSearch = await driver.wait(webdriver.until.elementLocated(by.name('search')));
    if( hasSearch ){
        driver.findElement(by.name('search')).sendKeys('123123');
    }
}

await login();


}

test();