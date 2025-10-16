// import './globals.css';
// import { ReactNode } from 'react';
// import { ThemeProvider } from 'next-themes';

// export const metadata = {
//   title: 'EchoBotics',
//   description: 'AI-driven conversational platform',
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
// src/app/layout.tsx
"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Wait until component mounts to match client theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch
    return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div style={{ visibility: "hidden" }}>{children}</div>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
