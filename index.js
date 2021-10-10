async function test() {

    const webdriver = require('selenium-webdriver');
    let by = webdriver.By;

    const driver = new webdriver.Builder().forBrowser('firefox').build();

    async function login() {
        let email = 'ti-raphael@hotmail.com';
        driver.manage().window().maximize();

        driver.get('http://aluno.cienciaemacao.com.br/login');

        driver.findElement(by.name('password')).sendKeys('123123');
        driver.findElement(by.name('email')).sendKeys(email);
        driver.findElement(by.tagName('button')).click();

        // verificação se existe um elemento com nome 'search', no caso estamos indo na tela de video aulas após o click em login na tela de login
        // o comando wait abaixo significa que ele fará as linhas 22 e 23 apenas após o elemento de nome search existir na tela, ou seja após a tela video aulas carregar.
        let hasSearch = await driver.wait(webdriver.until.elementLocated(by.name('search')));
        if (hasSearch) {
            driver.findElement(by.name('search')).sendKeys('introdução');
            driver.findElement(by.css('input.btn')).click();
            let hasTitleResultado = await driver.wait(webdriver.until.elementLocated(by.css('.col-sm-10 > h2:nth-child(1)')));
            if (hasTitleResultado) {
                let hasFirstLesson = await driver.wait(webdriver.until.elementLocated(by.partialLinkText('Introdução à Química dos Seres Vivos')));
                if(hasFirstLesson){
                 driver.findElement(by.xpath('/html/body/div[6]/div/div/main/section/div/section/section/div/div/div[1]/a/div/div[1]/div')).click();
                }   
             
            }
        }
    }

    await login();

}

test();