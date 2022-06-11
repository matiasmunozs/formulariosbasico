import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''


    })

    const handleInputChange = (e) =>{

        console.log(e.target.value )

        setDatos({
            ...datos,
            [e.target.name]: e.target.value 


        }        )

    }

    const enviarDatos = (e)=>{

        e.preventDefault();
        console.log(datos.nombre +'' + datos.apellido)


    }


    return (
        <Fragment>
            <h1> Formulario</h1>
            <form className='row' onSubmit={enviarDatos} >


                <div className='col-md-3' >

                    <input 
                    placeholder='Ingrese Nombre'  
                    className='form-control' 
                    type="text"
                    name ="nombre"
                    onChange={handleInputChange}
                    >
                  
                    </input>
                </div>

                <div className='col-md-3' >

                    <input 
                    placeholder='Ingrese Apellido'  
                    className='form-control' 
                    type="text" 
                    name="apellido"
                    onChange={handleInputChange}
                    >
                 
                    </input>
                </div>

                <div className='col-md-3' >
                    
                    <button className='btn btn-primary' 
                    type='submit'
                    > Enviar

                    </button>
                </div>

            </form>


        </Fragment>
    );
}

export default Formulario;


