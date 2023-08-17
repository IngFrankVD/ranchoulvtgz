import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react'
import DataTable from '@/Components/DataTable';
import LineChart from '@/Components/lineChart';
import Stats from '@/Components/Stats';
import { useState } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


export default function registroLeche({ auth, LecheRegistros, cantidadLeche }) {

    const [agregando, setAgregando] = useState(false)
    const {data, setData, post, processing, reset, errors} = useForm({
        litros: "",
        desc: "",
    })
    const submit = (e) => {
        e.preventDefault();
        post(route('home.store'), {onSuccess: ()=>setAgregando(false)})
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <Stats cantidadLeche={cantidadLeche}/>

                    <LineChart/>
                    

                    <div className="m-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            { agregando ? 
                                <div className="h-20 flex items-center ">
                                    <form className="absolute top-0 flex items-center" onSubmit={submit}>
                                    <input 
                                        value={data.litros}
                                        onChange={e=>setData('litros', e.target.value)}
                                        type="text"
                                        className="m-5 h-18 w-12 rounded-lg"
                                        autoFocus
                                    />
                                    <textarea
                                        value={data.desc}
                                        className=" h-12 "
                                        onChange={e=>setData('desc', e.target.value)}
                                    ></textarea>
                                    <InputError message={errors.message} className="mt-2" />
                                
                                        <PrimaryButton className="m-2 " >Save</PrimaryButton>
                                        <button className="inline-flex items-center px-2 py-2 border border-solid border-1 border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest hover:text-white hover:bg-red-400 active:bg-gray-300 transition ease-in-out duration-150" onClick={()=>setAgregando(false) && reset()} >
                                            Cancel
                                        </button>
                                
                                    
                                </form>
                                </div>
                                  : 
                                  <h1></h1>
                            }
                            <table className="w-full bg-gray-800 text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Litros
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            descripcion
                                        </th>
                                        
                                        <th> <button className="m-5 bg-green-300 text-black p-1 rounded-lg" onClick={ ()=> setAgregando(true)}>+Agregar </button> </th>
                                    </tr>
                                    
                                </thead>
                                
                                <tbody >
                                    {
                                        LecheRegistros.map( lecheRegistro => 
                                            <DataTable key={lecheRegistro.id} lecheRegistro={lecheRegistro} />
                                     )}
                                </tbody>
                             </table>
                        </div>                   
                    </div>
                                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
