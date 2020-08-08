import React, { useState } from 'react'

const App = ({ initData = {} }) => {
    const [data] = useState(initData)

    return (
        <div className="video-list-container">
            <div className="slide" style={{ marginBottom: '10px' }}>
                <img src={data.topImg} alt="战毒" width="100%" height="auto" />
            </div>
            <div className="video-list">
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                    {
                        data.list.map(item => {
                            return (
                                <li style={{ flex: 1 }}>
                                    <a href="#" title={item.title} target="_blank" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
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
