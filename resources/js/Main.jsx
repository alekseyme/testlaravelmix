import React from "react";
import axios from "axios";

const Main = () => {
    const [data, setData] = React.useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8000/api/proj").then(({ data }) => {
            console.log(data);
            setData(data);
        });
    };

    return (
        <div>
            Компонент Main
            <hr />
            <button onClick={fetchData}>Получить данные</button>
            <ul>
                {data.map((proj) => (
                    <li key={proj.id}>
                        {proj.name}, {proj.id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;
