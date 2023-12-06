import Home from '../pages/homePage/home'
import About from '../pages/aboutPage/about'
import Blog from '../pages/blogPage/blog'
import Pricing from '../pages/pricingPage/pricing'
import Service from '../pages/servicePage/service'
import Contact from '../pages/contactPage/contact'


// Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/blog', component: Blog},
    { path: '/pricing', component: Pricing},
    { path: '/service', component: Service},
    { path: '/contact', component: Contact},
];

// Private routes
const privateRoutes = [];

export {publicRoutes, privateRoutes};