import { useForm, usePage } from "@inertiajs/react";
import react, { useState } from "react";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";


const DataTable = ({lecheRegistro}) => {

    const {auth} = usePage().props
    const [editing, setEditing] = useState(false)
    const {data, setData, patch, processing, reset, errors} = useForm({
        litros: lecheRegistro.litros,
        desc: lecheRegistro.desc,
    })
    const submit = (e)=>{
        e.preventDefault();
        patch(route('home.update', lecheRegistro.id), {onSuccess: ()=>setEditing(false)})
    }
    
    return (
            
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            
                            
                            { editing ?
                            <td className="relative h-20 " >
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
                                        <button className="inline-flex items-center px-2 py-2 border border-solid border-1 border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest hover:text-white hover:bg-red-400 active:bg-gray-300 transition ease-in-out duration-150" onClick={()=>setEditing(false) && reset()} >
                                            Cancel
                                        </button>
                                
                                    
                                </form>
                                </td>
                                            :
                                            <>
                                    
                                                <td className="px-6 py-4"> 
                                                <p> { data.litros } </p>
                                                </td>

                                                <td className="px-6 py-4">
                                                <p> {data.desc} </p>
                                                </td>
                                                <td> 
                                                    { lecheRegistro.user.id === auth.user.id &&
                                                        <>
                                                        <button className="m-2 p-1 bg-yellow-200 rounded-lg px-3" onClick={ ()=> setEditing(true)} > Editar </button> 
                                                        <button className="m-2 p-1 bg-red-400 rounded-lg " > Eliminar </button> 
                                                        </>
                                                    }
                                                </td>
                                            </>
                            }
                        
                            
                            
                        </tr>   

    
    ); 
}
export default DataTable