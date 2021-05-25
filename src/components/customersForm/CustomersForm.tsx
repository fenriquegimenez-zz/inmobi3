import React, { FormEvent, useState, useEffect, useRef } from "react"
import { db } from "../../database/firebase"
import { toast } from "react-toastify"

import { ClientInfo } from "../../types/types"
import { initialStateValues } from "../../utils/utils"

const CustomersForm = () => {
  const [clientInfo, setClientInfo] = useState<ClientInfo>(initialStateValues)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    addCustomer(clientInfo)
    setClientInfo(initialStateValues)
  }

  const handleInputChange = (event: FormEvent) => {
    const { name, value }: EventTarget | any = event.target
    setClientInfo({ ...clientInfo, [name]: value })
  }

  const addCustomer = async (customerObject: ClientInfo) => {
    try {
      await db.collection("customers").doc().set(customerObject)
      toast("Cliente cargado exitosamente", {
        type: "success",
      })
    } catch (error) {
      toast(error, { type: "error" })
    }
  }
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <div className="text-center my-2">
        <h2>Cargar cliente</h2>
      </div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={clientInfo?.name}
          placeholder="Ingrese el nombre del cliente"
          onChange={handleInputChange}
          name="name"
          ref={inputRef}
        />
      </div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={clientInfo?.ruc}
          placeholder="Ingrese el RUC o CI del cliente"
          onChange={handleInputChange}
          name="ruc"
        />
      </div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={clientInfo?.contact}
          placeholder="Ingrese el contacto del cliente"
          onChange={handleInputChange}
          name="contact"
        />
      </div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={clientInfo?.phone}
          placeholder="Ingrese el número de teléfono"
          onChange={handleInputChange}
          name="phone"
        />
      </div>
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control"
          value={clientInfo?.cuota}
          placeholder="Ingrese la cuota"
          onChange={handleInputChange}
          name="cuota"
        />
      </div>
      <div className="text-center mb-2">
        <button className="btn btn-secondary">Cargar</button>
      </div>
    </form>
  )
}

export default CustomersForm
