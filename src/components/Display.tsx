interface PropsDisplay {
    value: string
}

export default function Display (props: PropsDisplay) {
    return (
        <div className="bg-emerald-600 text-xl h-20 w-80">
            { props.value }
        </div>
    )
}