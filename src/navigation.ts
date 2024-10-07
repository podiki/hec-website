import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
        text: 'About',
        href: getPermalink('/#about')
    },
    {
        text: 'Contact',
        href: getPermalink('/#contact')
    },
    {
        text: 'News & Articles',
        href: getBlogPermalink(),
    },
    {
        text: 'Events',
        href: getPermalink('/calendar'),
    },
    {
        text: 'Resources',
        href: getPermalink('/resources'),
    },
  ],
  actions: [{ text: 'Donate', href: getPermalink('/donate') }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/hecphila/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/HECPhilly/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Design based on <a class="text-blue-600 underline dark:text-muted" href="https://github.com/onwidget/astrowind"> AstroWind</a> · All rights reserved.
  `,
};
