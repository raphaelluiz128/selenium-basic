const webdriver = require('selenium-webdriver');
let by = webdriver.By;

const driver = new webdriver.Builder().forBrowser('firefox').build();

for (let i = 0; i < 1; i+=1){
    let email = 'ti-raphael@hotmail.com';
    driver.manage().window().maximize();

    driver.get('http://aluno.cienciaemacao.com.br/login');

    driver.findElement(by.name('password')).sendKeys('123123');
    driver.findElement(by.name('email')).sendKeys(email);
    driver.findElement(by.tagName('button')).click();

}
