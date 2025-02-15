import { Providers } from "@/store/provider";
import "./globals.css";
import RootProvider from "./provider";
import { UseAuthInitializer } from "@/lib/session";
import { DarkModeProvider } from "@/context/DarkModeProvider";
export const metadata = {
  title: {
    template: "%s | Emprendedores Creativos",
    default: "Emprendedores Creativos",
  },
  description:
    "Plataforma de servicios, educación online, asesorias, venta de productos personalizados, recursos para publico en general, emprendedores y empresas de todos los tamaños",
  image: "./favicon.ico",
};

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className="dark:bg-fondo-100 bg-gray-200 text-black dark:text-white selection:text-white selection:bg-selec-100">
      <DarkModeProvider>
        <RootProvider>
            <Providers>
              <UseAuthInitializer/>
              {children}
            </Providers>
        </RootProvider>
      </DarkModeProvider>
      </body>
    </html>
  );
}
