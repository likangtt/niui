import { createContext, useContext } from 'react';

export type PageVariant = 'family' | 'roommate';

export const PageVariantContext = createContext<PageVariant>('roommate');

export function usePageVariant() {
  return useContext(PageVariantContext);
}