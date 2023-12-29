import { useEffect, useState } from "react";
import { Itask } from "../../types/task";
import { Button } from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from '../../common/utils/time';

interface Props {
    selected: Itask | undefined,
    finishTask: () => void
}

export default function Stopwatch({ selected, finishTask }: Props) {

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            finishTask();
        }, 1000);
    }

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    return (
        <div className={style.stopWatch}>
            <p className={style.title}> Escolha um card e inicie o cronomêtro </p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Começar!
            </Button>
        </div>
    )
}