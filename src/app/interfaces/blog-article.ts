export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
  body: string[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'shipping-without-a-second-frontend',
    title: 'Shipping without a second frontend',
    excerpt:
      'Most products do not fail because the stack is wrong. They stall because the first interface never becomes a real decision surface.',
    publishedAt: '2026-08-04',
    readMinutes: 6,
    tags: ['product', 'angular'],
    body: [
      'This is mock copy for the article layout. The point of the page is rhythm: a large title, a short meta line, and a column you can actually finish.',
      'When a team asks for a second frontend, they are usually asking for a second chance at the first one. The admin, the shop, and the landing start as three products instead of three views of the same flow.',
      'I keep the first interface honest. If a merchant cannot complete the job in that screen, another app will not save it. The work is reducing the path, not multiplying surfaces.',
      'Angular helps here because the model can stay typed from the form to the API. The design system is not a kit of cards. It is a set of decisions that survive a real checkout.',
    ],
  },
  {
    slug: 'theme-as-a-system',
    title: 'Theme as a system, not a toggle',
    excerpt:
      'A color shift is cheap if only the background moves. It becomes a system when type, borders, and motion change together.',
    publishedAt: '2026-07-21',
    readMinutes: 5,
    tags: ['design', 'motion'],
    body: [
      'Mock article. The home of this site treats theme as a wipe, not a switch. Letters leave, bars cover, color lands, letters return.',
      'If the text stays put while the wash changes, the eye reads it as a filter. If the text exits and re-enters, the new color feels like a new page without leaving the URL.',
      'The control is a double ring on the top layer. It has to look idle until hover, then obvious. Disabled states that turn the cursor into a loader break that contract.',
      'Same rule in the blog: one column, one voice, no chrome that competes with the title. The list should feel like the portfolio rows, only lighter, because an article is not a product shot.',
    ],
  },
];
