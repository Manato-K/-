import React, { useEffect, useState } from "react"
import { getPrefecures } from '@/utils/getPrefectures'


type Prefecture = {
    message: null;
    result: {
        prefCode: string;
        prefName: string;
    }[];
};

const checkBox = ():JSX.Element => {
    const [ prefectures, setPrefectuers ] = useState<Prefecture["result"]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data:any = await getPrefecures()
                if( data && data.result) {
                    setPrefectuers(data.result)
                }
            } catch (e) {
                console.error('Error lol' ,e)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {prefectures.map((prefecture) => (
                <div key={prefecture.prefCode}>
                    <input
                        type="checkbox"
                        id={prefecture.prefCode}
                        value={prefecture.prefCode}
                    />
                    <label htmlFor={prefecture.prefCode}>{prefecture.prefName}</label>

                </div>
            ))}
        </div>
    )
}

export default checkBox