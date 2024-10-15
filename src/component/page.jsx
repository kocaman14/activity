import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcActivityes, HandleClick, showClick } from "./features/fetchSlice";
import './App.css';

function App() {
    const { activeAr, loading, error, click, buttonDetails } = useSelector((state) => state.activity);
    const dispatch = useDispatch();

    useEffect(() => {
        if (click > 0) {
            dispatch(fetcActivityes());
        }
    }, [click, dispatch]);

    return (
        <>
            <h1 className="title">Activity Generator</h1>
            <button className="generate-button" onClick={() => dispatch(HandleClick())}>Generate</button>

            {loading && <p className="loading">Yükleniyor...</p>}
            {error && <p className="error">Bir Hata Oluştu</p>}
            {activeAr.map((actives) => {
                const { accessibility, activity, key, link, participants, price, type } = actives;
                const detailOpen = buttonDetails[key]

                return (
                    <div className="activity-card" key={key}>
                        <h3 className="activity-title">{activity}</h3>
                        <button className="details-button" onClick={() => dispatch(showClick(key))}>
                        
                        </button>
                        {detailOpen && (
                            <ul className="details-list">
                                <li>Accessibility: {accessibility}</li>
                                <li>Activity: {activity}</li>
                                <li><a href={link} target="_blank" rel="noopener noreferrer">Link</a></li>
                                <li>Participants: {participants}</li>
                                <li>Price: {price}</li>
                                <li>Type: {type}</li>
                            </ul>
                        )}
                    </div>
                );
            })}
        </>
    );
}

export default App;
