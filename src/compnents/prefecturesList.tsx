import React, { useEffect, useState } from "react"
import { getPrefecures, prefectures } from '@/utils/getPrefectures'

export type checkBoxState = {
    onChange: (
        name: string,
        prefCode: number,
        check: boolean
    ) => void
}

const checkBox = ({ onChange }: checkBoxState):JSX.Element => {
    const [ prefectures, setPrefectuers ] = useState<prefectures["result"]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data:any = await getPrefecures()
                if( data && data.result) {
                    setPrefectuers(data.result)
                }
            } catch (e) {
                console.error('Error' ,e)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div>
                {prefectures.map((prefecture) => (
                    <div key={prefecture.prefName}>
                        <input
                            type="checkbox"
                            onChange={(event) => 
                                onChange(
                                    prefecture.prefName,
                                    prefecture.prefCode,
                                    event.target.checked
                                )
                            }
                            id={"checkbox" + prefecture.prefCode}
                        />
                        <label htmlFor={"checkbox" + prefecture.prefCode}>
                            {prefecture.prefName.length === 3 ? "　" + prefecture.prefName: prefecture.prefName}
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default checkBox