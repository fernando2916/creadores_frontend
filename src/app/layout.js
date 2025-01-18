import { Providers } from "@/store/provider";
import "./globals.css";
import RootProvider from "./provider";

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
      <body className="bg-fondo-100 text-white selection:text-white selection:bg-selec-100">
        <RootProvider>
          <Providers>{children}</Providers>
        </RootProvider>
      </body>
    </html>
  );
}
