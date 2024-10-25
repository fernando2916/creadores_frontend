import { CookiesContainer } from "../components/privacidad/CookiesContainer";
import { Faqs } from "../components/privacidad/Faqs";
import { HeaderPriv } from "../components/privacidad/HeaderPriv";
import { ManageYourPersonal } from "../components/privacidad/ManageYourPersonal";
import { ProcessedData } from "../components/privacidad/ProcessedData";
import { ProtectedYourData } from "../components/privacidad/ProtectedYourData";
import { SetYourPreferences } from "../components/privacidad/SetYourPreferences";

export const metadata = {
  title: 'Privacidad'
}

export default function PrivacidadPage() {
  return (
    <div className="pt-[5rem]">
      <HeaderPriv/>
      <ManageYourPersonal/>
      <SetYourPreferences/>
      <CookiesContainer/>
      <ProcessedData/>
      <Faqs/>
      <ProtectedYourData/>
    </div>
  );
}