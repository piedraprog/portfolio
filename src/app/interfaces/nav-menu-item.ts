export interface NavMenuItem {
  label: string;
  route: string;
  available: boolean;
}

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  { label: 'About', route: 'about', available: true },
  { label: 'Portfolio', route: 'portfolio', available: true },
  { label: 'Blog', route: 'blog', available: true },
  { label: 'Contact', route: 'contact', available: true },
];

export const NAVBAR_ITEMS: NavMenuItem[] = [
  { label: 'home', route: 'home', available: true },
  ...NAV_MENU_ITEMS.map((item) => ({
    ...item,
    label: item.label.toLowerCase(),
  })),
];
