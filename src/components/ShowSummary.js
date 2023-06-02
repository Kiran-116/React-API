import React, {useState, useEffect} from "react";
import styles from '../App.module.css';
import { useNavigate, useParams } from "react-router-dom";

const ShowSummary = ({ showId }) => {

    let navigate = useNavigate();
    const buttonHandler = (id) => {
        console.log(id);
        let path=`/`;
        navigate(path);
    }
    const id = useParams();
    console.log(id);
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
        const fetchSummary = async () => {
            try {
            const response = await fetch(`https://api.tvmaze.com/shows/${id.id}`);
            const data = await response.json();
            setSummary(data.summary);
            } catch (error) {
            setError('Failed to fetch show summary.');
            } finally {
            setLoading(false);
            }
        };
  
        fetchSummary();
    }, [showId]);
  
    if (loading) {
        return <div>Loading...</div>;
    }
  
    if (error) {
        return <div>{error}</div>;
    }
  
    return (
        <div className={styles.summary}>
            <h2>Summary</h2>
            <p>{summary.replace('<p>','').replace('</p>', '').replace('<b>', '').replace('</b>', '')}</p>
            <center>
            <button onClick={() => buttonHandler(showId)}>go back</button>
            </center>
        </div>
    );
};

export default ShowSummary;