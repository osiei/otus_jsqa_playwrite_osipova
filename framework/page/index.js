import { AuthPage} from './authPage';
import { LanguagePage} from './languagesPage';
import {MenuFragment} from '../page fragment/menuNavigation';
import {CategoryPage} from './categoryPages';
import {CurrentPage} from './currentPage';


const app = () => ({
    AuthPage: () => new AuthPage(),
    LanguagePage: () => new LanguagePage(),
    MenuFragment: () => new MenuFragment(),
    CategoryPage: () => new CategoryPage(),
    CurrentPage: () => new CurrentPage(),
})

export { app };