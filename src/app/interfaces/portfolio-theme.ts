export const PORTFOLIO_THEME_NAMES = [
  'monochrome',
  'blueOrange',
  'blueRedWine',
] as const;

export type PortfolioThemeName = (typeof PORTFOLIO_THEME_NAMES)[number];

export function isPortfolioThemeName(value: string | null): value is PortfolioThemeName {
  return PORTFOLIO_THEME_NAMES.some((themeName) => themeName === value);
}
