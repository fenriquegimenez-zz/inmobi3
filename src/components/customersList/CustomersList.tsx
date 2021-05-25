import React, { useEffect, useState } from "react"
import Link from "next/dist/client/link"

import { db } from "../../database/firebase"
import { ClientInfo } from "../../types/types"
import { toast } from "react-toastify"

const CustomersList = () => {
  const [customers, setCustomers] = useState<ClientInfo[]>([])

  const getCostumers = () => {
    db.collection("customers").onSnapshot(querySnapshot => {
      const customersList: any = []
      querySnapshot.forEach(doc => {
        customersList.push({ ...doc.data(), id: doc.id })
      })
      setCustomers(customersList)
    })
  }
  const deleteCustomer = async (id: string | undefined) => {
    if (window.confirm("are you sure?")) {
      await db.collection("customers").doc(id).delete()
      toast("Cliente eliminado", {
        type: "error",
        pauseOnFocusLoss: false,
      })
    }
  }
  useEffect(() => {
    getCostumers()
  }, [])
  return customers.length > 0 ? (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col  ">ID cliente</th>
            <th scope="col">Cliente</th>
            <th scope="col">RUC/CI</th>
            <th scope="col">Contacto</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Cuota</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {customers.map(customer => {
            return (
              <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.ruc}</td>
                <td>{customer.contact}</td>
                <td>{customer.phone}</td>
                <td>{customer.cuota}</td>

                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteCustomer(customer.id)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="text-center bg-light text-secondary">Sin clientes</div>
  )
}

export default CustomersList
