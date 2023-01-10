import React, { useEffect, useState } from 'react'
import { getMovieByTheater } from '../../../service/MovieService'
import { Tabs } from 'antd';
import MovieItemTabs from './MovieItemTabs';

export default function MovieTab() {
    const [dataMovie, setDataMovie] = useState([])
    const onChange = (key) => {
        console.log(key);
    };

    useEffect(() => {
        getMovieByTheater()
            .then((result) => {
                // console.log("OBJ", result);
                setDataMovie(result.data.content)
            }).catch((err) => {
                console.log(err);
            });
    })

    //tabs1
    const renderheThongRap = () => {
        return dataMovie.map((heThongRap, index) => {
            // console.log('HeThongRap:', heThongRap);
            return {
                label: <img className='w-16 h-16 ' src={heThongRap.logo} alt='' />,
                key: heThongRap.maHeThongRap,
                children: (
                    <Tabs key={index}

                        style={{
                            height: 400
                        }}
                        tabPosition='left'
                        defaultActiveKey="1"
                        onChange={onChange}
                        items={renderCumRapTheoHeThongRap(heThongRap)}
                    >

                    </Tabs>
                )
            }
        })
    }



    //tabs 3
    const renderDanhSachPhimTheoCumRap = (cumRap) => {
        // console.log('CumRap', cumRap);
        return (
            <div>
                {cumRap.danhSachPhim.map((movie, index) => {
                    // console.log("Movid", movie);
                    return <MovieItemTabs key={index} movie={movie} />

                })
                }

            </div >
        )
    }

    //tabs 2
    const renderCumRapTheoHeThongRap = (heThongRap) => {
        return heThongRap.lstCumRap.map((cumRap, index) => {
            return {
                label:
                    <div className='w-44'>
                        <h5>{cumRap.tenCumRap}</h5>
                        <p className='truncate'>{cumRap.diaChi}</p>
                    </div>,
                key: cumRap.maCumRap,
                children: <div key={index} style={{ height: 400, overflowY: 'scroll' }}>{renderDanhSachPhimTheoCumRap(cumRap)}</div>
            }
        })
    }



    return (
        <div className='container mx-auto mt-20'>
            <Tabs
                style={{
                    height: 400
                }}
                tabPosition='left'
                defaultActiveKey="1"
                onChange={onChange}
                items={renderheThongRap()}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
