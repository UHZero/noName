import { useState } from "react";

export default function Home() {
    const [value, setValue] = useState("0")

    return {
        value
    }
}