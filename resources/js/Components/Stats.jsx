import { useForm, usePage } from "@inertiajs/react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs('2018-04-04T16:00:00.000Z')
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s atras",
    s: 'hace un segundo',
    m: "hace un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un dia",
    dd: "%d dias",
    M: "un mes",
    MM: "%d meses",
    y: "un año",
    yy: "%d años"
  }
})


const Stats = ({cantidadLeche }) => {
 

    return (
        <div className="m-5 bg-white rounded-lg py-24 sm:py-32 dark:bg-gray-800 dark:border-gray-700">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {cantidadLeche.map((cantidadLeche) => (
                        <div key={cantidadLeche.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600"> Litros de leche | Actualizado {dayjs(cantidadLeche.updated_at).fromNow()} </dt>
                        <small className="m1-2 text-sm text-gray-600" > {dayjs(cantidadLeche.updated_at).fromNow()} </small>
                        <small className="m1-2 text-sm text-gray-600" > { } </small>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"> 
                        {cantidadLeche.litros}
                        </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
export default Stats