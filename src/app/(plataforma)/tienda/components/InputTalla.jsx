import { RadioCardItem, RadioCardLabel, RadioCardRoot } from "@/components/ui/radio-card"

export const InputTalla = () => {
  return (
    <div className="gap-3 flex">

    <RadioCardRoot 
      orientation="horizontal"
      align="center"
      justify="center"
      maxW="lg"
      defaultValue="paypal">
      <RadioCardLabel>Payment method</RadioCardLabel>
    </RadioCardRoot>
     <input 
     type="button" 
     value="S" 
     className="border-2 border-btn-400 hover:bg-btn-400 px-5 py-1 text-white rounded-lg" 
     placeholder="SM" />   
     <input 
     type="button" 
     value="M" 
     className="border-2 border-btn-400 hover:bg-btn-400 px-5 py-1 text-white rounded-lg" 
     placeholder="SM" />   
     <input 
     type="button" 
     value="L" 
     className="border-2 border-btn-400 hover:bg-btn-400 px-5 py-1 text-white rounded-lg" 
     placeholder="SM" />   
     <input 
     type="button" 
     value="XL" 
     className="border-2 border-btn-400 hover:bg-btn-400 px-5 py-1 text-white rounded-lg" 
     placeholder="SM" />   
    </div>
  )
}
