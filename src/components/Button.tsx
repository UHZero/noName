interface PropsButton {
    value: string
}

export default function Button (props: PropsButton) {
    return (
        <div className={`
            w-20 h-20
            bg-emerald-400
        `}>
            { props.value }
        </div>
    )
} 