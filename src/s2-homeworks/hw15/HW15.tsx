import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}

type ParamsType = {
    sort: string
    page: number
    count: number
}

const getTechs = (params: ParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test3',
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1) // current page
    const [count, setCount] = useState(4) // rows per page
    const [isLoading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(100)
    const [techs, setTechs] = useState<TechType[]>([])

    const [searchParams, setSearchParams] = useSearchParams()

    const sendQuery = (params: any) => {
        setLoading(true)
        getTechs(params)
            .then((res) => {
                if (res) {
                    const { techs, totalCount } = res.data
                    setTotalCount(totalCount)
                    setTechs(techs)
                }
                // делает студент

                // сохранить пришедшие данные

                //
            })
            .finally(() => setLoading(false))
    }

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент

        setPage(newPage)
        setCount(newCount)
        sendQuery({page: newPage, count: newCount})
        setSearchParams({page: String(newPage), count: String(newCount)})
        
        //
    }
    
    const onChangeSort = (newSort: string) => {
        // делает студент
        
        setSort(newSort)
        setPage(1) // при сортировке сбрасывать на 1 страницу
        
        sendQuery({sort: newSort, page, count})
        setSearchParams({sort: newSort, page: String(page), count: String(count)})

        //
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery({page: params.page, count: params.count})
        setPage(+params.page || 1)
        setCount(+params.count || 4)
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t.id} className={s.row}>
            <div id={'hw15-tech-' + t.id} className={s.tech}>
                {t.tech}
            </div>

            <div id={'hw15-developer-' + t.id} className={s.developer}>
                {t.developer}
            </div>
        </div>
    ))

    return (
        <div id={'hw15'} className={s2['hw-container']}>
            <div className={s2.hwTitle}>Hometask №15</div>

            <div className={s2.hw}>
                <div className={s.wrapper}>
                    {isLoading && <div id={'hw15-loading'} className={s.loading}>Loading...</div>}

                    <div className={isLoading ? s.disabled : ''} onClickCapture={e => {
                        isLoading && e.stopPropagation()
                    }}>
                        <div className={s.paginationWrapper}>
                            <SuperPagination
                                page={page}
                                itemsCountForPage={count}
                                totalCount={totalCount}
                                onChange={onChangePagination}
                            />
                        </div>

                        <div className={s.rowHeader}>
                            <div className={s.techHeader}>
                                Tech &nbsp;
                                <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                            </div>

                            <div className={s.developerHeader}>
                                Developer &nbsp;
                                <SuperSort sort={sort} value={'developer'} onChange={onChangeSort}/>
                            </div>
                        </div>
                        {mappedTechs}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW15
