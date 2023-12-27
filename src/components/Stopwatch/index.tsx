import { useState } from "react";
import { Itask } from "../../types/task";
import { Button } from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";
import {timeToSeconds} from '../../common/utils/time';

interface Props {
    selected: Itask | undefined
}

export default function Stopwatch({selected}: Props) {
    const [time, setTime] = useState<number>();
    if(selected?.time){
        setTime(timeToSeconds(selected.time));
    }
    return (
        <div className={style.stopWatch}>
            <p className={style.title}> Escolha um card e inicie o cronomêtro </p>
            Tempo: {time}
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}