'use client'
import { useState } from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { SiMercadopago } from "react-icons/si";

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState('')
  return (
    <div className="">
    {/* Tabs List */}
    <div className="flex w-full justify-between">
      <button
      type="button"
        className={`flex items-center py-2 px-4 gap-2 ${
          activeTab === "debito"
            ? "bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md"
            : " hover:text-link-400 text-slate-600 dark:text-slate-300 dark:hover:text-link-200 transition-colors duration-150"
        }`}
        onClick={() => setActiveTab("debito")}
      >
        <FaCreditCard className="box-content" />
        <span>Tarjeta Débito/Crédito</span>
      </button>
      <button
      type="button"
        className={`flex items-center py-2 px-4 gap-2 ${
          activeTab === "paypal"
            ? "bg-[#0079c1] hover:bg-[#0e6ba1] text-white dark:bg-[#00457c] dark:hover:bg-[#072c4b] transition-colors duration-150 rounded-md p-2"
            : "hover:text-link-400 text-slate-600 dark:text-slate-300 dark:hover:text-link-200 transition-colors duration-150"
        }`}
        onClick={() => setActiveTab("paypal")}
      >
        <FaPaypal className="box-content text-xl" />
        <span>Paypal</span>
      </button>
      <button
      type="button"
        className={`flex items-center py-2 px-4 gap-2 ${
          activeTab === "mercado"
            ? "bg-[#4287f5] hover:bg-[#327df7] text-white dark:bg-[#2676f7] dark:hover:bg-[#176cf5] transition-colors duration-150 rounded-md p-2"
            : "hover:text-link-400 text-slate-600 dark:text-slate-300 dark:hover:text-link-400 transition-colors duration-150"
        }`}
        onClick={() => setActiveTab("mercado")}
      >
        <SiMercadopago className="box-content text-2xl" />
        <span>Mercado Pago</span>
      </button>
      <button
      type="button"
        className={`flex items-center py-2 px-4 gap-2 ${
          activeTab === "transferencia"
            ? "bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md"
            : " hover:text-link-400 text-slate-600 dark:text-slate-300 dark:hover:text-link-200 transition-colors duration-150"
        }`}
        onClick={() => setActiveTab("transferencia")}
      >
        <FaMoneyBillTransfer className="box-content text-xl" />
        <span>Transferencia</span>
      </button>
    </div>

    {/* Tabs Content */}
    <div className="mt-4">
      {activeTab === "debito" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Información de pago</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold">Número de Tarjeta</label>
              <input
                type="text"
                placeholder="Número de Tarjeta"
                className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Nombre y apellido del titular de la tarjeta
              </label>
              <input
                type="text"
                placeholder="Nombre y apellido del titular de la tarjeta"
                className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Fecha de Vencimiento</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Código de seguridad (CVV)</label>
              <input
                type="text"
                placeholder="CVV"
                className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "paypal" && (
        <div>
          <h2 className="text-xl font-semibold">Paypal</h2>
          <p>Contenido de Paypal...</p>
        </div>
      )}

      {activeTab === "mercado" && (
        <div>
          <h2 className="text-xl font-semibold">Mercado Pago</h2>
          <p>Contenido de Mercado Pago...</p>
        </div>
      )}
      {activeTab === "transferencia" && (
        <div>
          <h2 className="text-xl font-semibold">Transferencia Electrónica</h2>
          <p>Datos para la transferencia</p>
        </div>
      )}
    </div>
  </div>
  )
}
