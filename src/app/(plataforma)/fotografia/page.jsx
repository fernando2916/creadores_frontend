import { BannerContact } from "./components/BannerContact";
import { HeaderFoto } from "./components/Header";
import { ImageCorp } from "./components/ImageCorp";
import { InfoFoto } from "./components/InfoFoto";
import { Portafolio } from "./components/Portafolio";
import { Testimonios } from "./components/Testimonios";
import { TiposFoto } from "./components/TiposFoto";

export const metadata = {
  title: 'Fotografía'
}

export default function FotografiaPage() {
  return (
    <>
    <HeaderFoto/>
    <InfoFoto/>
    <TiposFoto/>
    <ImageCorp/>
    <BannerContact/>
    <Portafolio/>
    <Testimonios/>
    </>
  );
}