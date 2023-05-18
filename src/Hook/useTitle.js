import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title =`${title}-ToyTrove`;
    },[title])

}
export default useTitle;