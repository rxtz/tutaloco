'use client';

import 'styles/globals.css';

import credits from 'lib/credits.json';
import { font, theme } from 'lib/theme';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { Main } from 'ui';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html
      className={`[color-scheme:dark] bg-carbon accent-drip ${font.className}`}
    >
      <title>{`${credits.libro} - ${credits.autor}`}</title>
      <body className="flex flex-col min-h-screen">
        <GeistProvider themes={[theme]} themeType={theme.type}>
          <CssBaseline>
            <Main>{children}</Main>
          </CssBaseline>
        </GeistProvider>
        <Analytics />
      </body>
    </html>
  );
}
