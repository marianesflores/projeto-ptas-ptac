import { TopbarMenu } from "@/components/ui/topbar-menu";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <TopbarMenu/>
        {children}
      </body>
    </html>
  );
}