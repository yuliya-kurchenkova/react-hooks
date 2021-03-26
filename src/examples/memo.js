import React, {useState, useMemo, useEffect} from 'react'
import './assets/scss/style.scss';


function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {

    }, [styles])

    return (
        <>
            <div>
                <h1 style={styles}>Вычисляемое свойство: {number}</h1>
                <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
                <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
                <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
            </div>
        </>
    );
}

export default App;
