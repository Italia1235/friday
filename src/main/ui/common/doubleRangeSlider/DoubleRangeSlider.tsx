import s from './DoubleRangeSlider.module.css'

export const DoubleRangeSlider = ({value, max, min, setCardsQtyRange,
                                      setRangeValue1, setRangeValue2}:PropsType) => {

    return (
        <div className={s.wrapper}>
            <div className={s.rangeBox}>
                <span>{value[0]}</span>
                <div className={s.range_slider}>
                    <input type="range"
                           min={min}
                           max={max}
                           step={1}
                           value={value[0]}
                           onChange={(e)=>setRangeValue1(+e.currentTarget.value)}
                           id={s.slider_1}
                    />
                    <input type="range"
                           min={min}
                           max={max}
                           step={1}
                           value={value[1]}
                           onChange={(e)=>setRangeValue2(+e.currentTarget.value)}
                           id={s.slider_2}
                    />
                </div>
                <span>{value[1]}</span>
            </div>
            <button onClick={setCardsQtyRange}>Search</button>
        </div>

    )
}

type PropsType = {
    min: any
    max: any
    value: [number, number]
    setRangeValue1: (value: number) => void
    setRangeValue2: (value: number) => void
    setCardsQtyRange: ()=>void
}