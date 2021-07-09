import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSessions } from "./conveymapSlice";

const ConveymapApp = () => {
    const dispatch = useAppDispatch();
    const sessions = useAppSelector(store => {
        if (store.conveymapSlice.ids.length > 0)
            console.log(store.conveymapSlice.entities);
    })
    useEffect(() => {
        dispatch(getSessions());
    }, [dispatch])

    return (
        <div>
            Conveymap
        </div>
    )
}

export default ConveymapApp;