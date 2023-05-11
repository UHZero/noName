interface PropsDisplay {
    value: string
}

export default function Display (props: PropsDisplay) {
    return (
        <div className="flex justify-end items-center bg-emerald-600 text-2xl h-20 w-80 p-5 font-black">
            { props.value }
        </div>
    )
}