import chai from 'chai';
import {goto, run, stop} from './lib/browser';
import {app} from './framework/page/index';

const {expect} = chai;
describe('Проверка сценариев на странице авторизации demo-opencart', () => {
        let page;
        beforeEach(async () => {
            await run();
            page = await goto();
        })
        afterEach(async () => {
            await stop();
        })

        it('Успешная загрузка формы авторизации', async () => {
                expect(await app().AuthPage().getPageTitle(page)).to.equal('Авторизация');
                expect(await app().AuthPage().checkVisibleAuthForm(page)).to.be.true;
            }
            )

        it('Успешная авторизация демо-юзером', async () => {
            await app().AuthPage().login(page);
            expect(await app().AuthPage().getLogin(page)).to.equal('Demo User');
        }
        )
    }
)

describe('Проверка сценариев demo-opencart авторизованным пользователем', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto();
        await app().AuthPage().login(page);
    })
    afterEach(async () => {
        await stop();
    })
    it('Демо-пользователь может перейти к разделу "настройки" в панели навигации и добавить новый язык системы', async () => {
        await app().MenuFragment().openMenuSystem(page);
        await app().MenuFragment().openMenuLocalization(page);
        await app().MenuFragment().openMenuLanguages(page);
        expect(await app().LanguagePage().getPageTitle(page)).to.equal('Языки');

        //Создаем новый язык(в демо-версии нет возможности сохранить язык, поэтому тут проверить что нельзя сохранить с пустыми полями)
        await app().LanguagePage().createLanguage(page);
        expect(await app().LanguagePage().checkAlert(page)).to.be.true;
    }
    )

    it('Демо пользователь может скролиить список категорий и выбрать категорию', async () => {
            //Навигация по панели меню
            await app().MenuFragment().openMenuCatalog(page);
            await app().MenuFragment().openMenuCategory(page);

            //Пагинация на странице с категориями
            await app().CategoryPage().nextPageClick(page);

            //кликаем чекбокс
            await app().CategoryPage().checkAllClick(page);

            //Проверяем что любой чек-бокс на странице выставлен
            expect(await app().CategoryPage().checkBoxTrue(page)).to.be.true;
        }
        )

    it('Пользователь успешно разлогинен, после разлогина попадает на страницу авторизации', async () => {
            await app().CurrentPage().exUser(page);
            expect(await app().AuthPage().getPageTitle(page)).to.equal('Авторизация');
            }
        )    
}
)