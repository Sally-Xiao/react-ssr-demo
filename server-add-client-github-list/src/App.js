import React, { useState } from 'react'

const filterVideoList = (videoList, delList) => {
    if(Array.isArray(videoList) && Array.isArray(delList)) {   
        return videoList.filter(item => !delList.includes(item.id))
    }

    return []
}

const App = (props) => {
    let initData

    if(__isBrowser__) { // webpack变量
        initData = window.INIT_DATA
    } else {
        initData = props.initData
    }

    const [data] = useState(initData)
    const [delList, setDelList] = useState([])

    let deleteVideo = function() {}
    if(__isBrowser__) {
        deleteVideo = ({id, title }) => {
            const result = confirm('确定不喜欢这个视频么?')

            if(result) {
                const newDelList = [
                    ...delList,
                    id
                ]
                setDelList(newDelList)
                console.log(`删除视频${title}`)
            }
        }
    }

    const displayVideoList = filterVideoList(data.list, delList)

    return (
        <div className="video-list-container">
            <div className="slide" style={{ marginBottom: '10px' }}>
                <img src={data.topImg} alt="战毒" width="100%" height="auto" />
            </div>
            <div className="video-list">
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                    {
                        displayVideoList.map(item => {
                            return (
                                <li style={{ flex: 1 }} key={item.id}>
                                    <a title={item.title} style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }} onClick={deleteVideo.bind(null, item)}>
                                        <img src={item.img} alt={item.title} width="210" height="107" />
                                        <div className="title" style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
                                            {item.title}
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App
