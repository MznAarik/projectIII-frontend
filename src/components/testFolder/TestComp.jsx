import { Button } from '@mantine/core'
import { useEffect, useState } from 'react'
import CustomButton from '../UI/CustomButton';

export const TestComp = () => {
    const [count, setCount] = useState(0);
    const [interval, setInteraval] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `You counted: ${count}`
    }, [count])

    //useEffect state variable is only called once //
    useEffect(() => {
        const timer = setInterval(() => {
            setInteraval((prev) => prev + 1);
            console.log(interval);
        }, 1000)
        return () => clearInterval(timer);
    }, [interval])

    useEffect(() => {
        console.log(name);
    }, [name])

    return (
        <>
            <div className="container">
                <h2 >useEffect Challenge</h2>
                <p>Count: <span>{count}</span></p>
                <p>Live Count: <span>{interval}</span></p>
                <Button
                    variant="outline"
                    color="#63687C"
                    radius="md"
                    value={count}
                    onClick={() => setCount(count + 1)}
                    mt="lg"
                >
                    Increment
                </Button>

                <p> Name: <span>{name}</span></p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <CustomButton
                    buttonText="Click Me"
                    onClick={() => alert("Button Clicked")}
                    style={{ marginTop: "20px" }}
                />
            </div>
        </>
    )
}
