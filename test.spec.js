import chai from 'chai';
import {goto, run, stop} from './framework/lib/browser';

const {expect} = chai;
describe('Проверка тестовой страницы авторизации demo-opencart', () => {
        let page;
        beforeEach(async () => {
            await run();
            page = await goto('http://demo-opencart.ru/admin/index.php?route=common/login');
        })
        afterEach(async () => {
            await stop();
        })

        it('Первый тест проверка загрузки страницы', async () => {
                const pageName = await page.textContent('head > title');
                expect(pageName).to.equal('Авторизация');
                const visible = await page.isVisible("[class='panel panel-default']");
                expect(visible).to.be.true;
            }
            )

        it('Проверка успешной авторизации', async () => {
            await page.fill('#input-username', 'demo');
            await page.fill('#input-password', 'demo');
            await page.click('[class="btn btn-primary"]');
            const userLogin = await page.getAttribute('#user-profile', 'alt');
            expect(userLogin).to.equal('Demo User');
        }
        )
    }
)

describe('Проверка страницы demo-opencart авторизованным пользователем', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('http://demo-opencart.ru/admin/index.php?route=common/login');
        await page.fill('#input-username', 'demo');
        await page.fill('#input-password', 'demo');
        await page.click('[class="btn btn-primary"]');
    })
    afterEach(async () => {
        await stop();
    })
    it('Проверка перехода к настройкам в панели навигации и добавление нового языка системы', async () => {
        //Навигация по панели меню
        await page.click('#menu-system');
        await page.click('#collapse42 > li:nth-child(2) > a');
        await page.click('#collapse43 > li:nth-child(2)');
        const pageName = await page.textContent('head > title');
        expect(pageName).to.equal('Языки');

        //Создаем новый язык(в демо-версии нет возможности сохранить язык, поэтому тут проверить что нельзя сохранить с пустыми полями)
        await page.click('.pull-right [class="btn btn-primary"]');
        await page.click('.pull-right > button');
        const visible = await page.isVisible('[class="alert alert-danger alert-dismissible"]');
        expect(visible).to.be.true;
    }
    )

    it('Проверка пролистывания и чека категорий', async () => {
            //Навигация по панели меню
            await page.click('#menu-catalog');
            await page.click('#collapse1 > li:nth-child(1) > a');

            //Пагинация на странице с категориями
            await page.click('.pagination li:nth-child(4) > a');

            //кликаем чекбокс
            await page.click('table > thead > tr > td.text-center > input[type=checkbox]');

            //Проверяем что любой чек-бокс на странице выставлен

            const userLogin = await page.isChecked('#form-category > div > table > tbody > tr:nth-child(6) > td.text-center > input[type=checkbox]');
            expect(userLogin).to.be.true;
        }
        )

    it('Проверка разлогина', async () => {
            await page.click('[class="nav navbar-nav navbar-right"] > li:nth-child(2) > a');
            const pageName = await page.textContent('head > title');
            expect(pageName).to.equal('Авторизация');
            }
        )    
}
)