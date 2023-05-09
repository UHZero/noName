import Button from "./Button";
import Display from "./Display";
import Home from "./hooks/Home";

export default function Calculator () {
    const { value } = Home();
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <Display value={ value } />
            </div>
            <div className="grid grid-cols-4">
                <Button value="AC" />
            </div>
        </div>
    )
}