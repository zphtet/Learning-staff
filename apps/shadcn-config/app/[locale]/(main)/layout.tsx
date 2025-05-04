import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang={locale} suppressHydrationWarning>
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     <NextIntlClientProvider messages={messages}>
    //       <ThemeProvider
    //         attribute="class"
    //         defaultTheme="system"
    //         enableSystem
    //         disableTransitionOnChange
    //       >
    //         <ThemeDataProvider>
    <AdminPanelLayout>{children}</AdminPanelLayout>
    //         </ThemeDataProvider>
    //       </ThemeProvider>
    //     </NextIntlClientProvider>
    //   </body>
    // </html>
  );
}
