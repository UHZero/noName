interface PropsButton {
    value: string
    onClick: (el: string) => void
    double?: boolean
    triple?: boolean
}

export default function Button (props: PropsButton) {
    return (
        <div className={`
            flex items-center justify-center font-black text-xl
            ${props.double ? 'w-40 col-span-2' : 'w-20'}
            ${props.triple ? 'w-60 col-span-3' : 'w-20'}
            border-b-lime-600 border-r border-b
            h-20 bg-emerald-400
        `} onClick={() => props.onClick(props.value)}>
            { props.value }
        </div>
    )
} 