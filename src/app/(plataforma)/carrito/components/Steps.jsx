import { Group } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/ui/steps"

import {FaUser, FaShoppingBag, FaWallet, FaCheck} from 'react-icons/fa'
import { CompraCompleta } from "./CompraCompleta"
import { Detalles } from "./Detalles"
import { DatosContacto } from "./DatosContacto"
import { InfoPago } from "./InfoPago"
import { ProcesarCompra } from "./ProcesarCompra"
export const Steps = () => {
  return (
    <StepsRoot defaultValue={1} count={4}>
      <StepsList colorPalette='purple' >
        <StepsItem index={0} icon={<FaShoppingBag />}/>
        <StepsItem index={1} icon={<FaUser />} />
        <StepsItem index={2} icon={<FaWallet />} />
        <StepsItem index={3} icon={<FaCheck />} />
      </StepsList>

      <StepsContent index={0}><Detalles/></StepsContent>
      <StepsContent index={1}><DatosContacto/> </StepsContent>
      <StepsContent index={2}><InfoPago/></StepsContent>
      <StepsContent index={3}><ProcesarCompra/></StepsContent>
      <StepsCompletedContent> <CompraCompleta/> </StepsCompletedContent>

        <div className="flex justify-center items-center">

      <Group className="gap-10">
        <StepsPrevTrigger asChild>
          <Button variant="outline" size="sm" className='bg-btn-400 hover:bg-btn-600 transition-colors duration-300 p-2' >
            Regresar
          </Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button variant="outline" size="sm" className='bg-btn-400 hover:bg-btn-600 transition-colors duration-300 p-2'>
            Continuar
          </Button>
        </StepsNextTrigger>
      </Group>
        </div>
    </StepsRoot>
  )
}
