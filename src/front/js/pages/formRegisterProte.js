import React, { useState } from "react";

import "../../styles/formRegisterProte.css";

export const FormRegisterProte = () => {
  const [formregister, setFormregister] = useState({});

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterProte_view">
            <div className="row formRegisterProte_title">
              <div className="col-xl-12">
                <h2>REGISTRO PROTECTORAS</h2>
              </div>
            </div>
            <form>
              <div className="row formRegisterProte_GroupInput">
                <div className="row">
                  <label htmlFor="name">Nombre de la protectora:</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterProte_Input"
                    name="name"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="email">Correo</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="email"
                    className="form-control formRegisterProte_Input"
                    name="email"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="password"
                    className="form-control formRegisterProte_Input"
                    name="password"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="passwordrepeat">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="form-control formRegisterProte_Input"
                    name="passwordrepeat"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="direction">Dirección:</label>
                    <input
                      onChange={(event) => {
                        setFormregister({
                          ...formregister,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="text"
                      className="form-control formRegisterProte_Input"
                      name="direction"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="city">Ciudad:</label>
                    <input
                      onChange={(event) => {
                        setFormregister({
                          ...formregister,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="text"
                      className="form-control inputAgeAndCity"
                      name="city"
                    />
                  </div>
                </div>
                <div className="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <button
                    className="btn formRegisterProte_button"
                    type="submit"
                  >
                    Registrarme
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
