import React from "react"
import CustomersList from "../../components/customersList/CustomersList"
import Link from "next/link"

import { initialStateValues } from "../../utils/utils"

const index = () => {
  return (
    <>
      <h2 className="text-center my-3">Listado de clientes</h2>
      <div className="d-flex justify-content-end my-3">
        <Link href="/customers/create">
          <a>
            <button className="btn btn-outline-success">
              Cargar nuevo cliente
            </button>
          </a>
        </Link>
      </div>
      <CustomersList />
    </>
  )
}

export default index
