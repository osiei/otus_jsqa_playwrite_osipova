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