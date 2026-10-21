// Add the official store URLs when the listings are live.
export const storeLinks: { apple: string | null; google: string | null } = {
  apple: null,
  google: null,
};

export const appCallToAction = storeLinks.apple || storeLinks.google ? 'Get the app' : 'Coming soon';
