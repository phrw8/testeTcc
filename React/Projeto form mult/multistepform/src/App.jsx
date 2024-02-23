import { useState } from 'react';
import { useFetch } from "./hooks/useFetch";

// icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CiUser, CiStar } from "react-icons/ci";
import { SlPaperPlane } from "react-icons/sl";

// css
import './App.css';

// componentes
import UserForm from './components/UserForm';
import Review from './components/Review';
import Thanks from './components/Thanks';

const url = "http://localhost:3000/users";

function App() {
    const formTemplete = {
        name: "",
        email: "",
        review: "",
        comment: ""
    };
    const [data, setData] = useState(formTemplete);

    const updateData = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const componentsList = [
        <UserForm data={data} updateData={updateData} />,
        <Review data={data} updateData={updateData} />,
        <Thanks data={data} updateData={updateData} />
    ];
    const [screen, setScreen] = useState(0);

    const handleNextScreen = () => {
        screen < 2 && setScreen(prevScreen => prevScreen + 1);
    };
    const handlePrevScreen = () => {
        screen > 0 && setScreen(prevScreen => prevScreen - 1);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log("Dados enviados");
    };

    return (
        <>
            <header>
                <h2>Deixe a sua avaliação</h2>
                <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto.</p>
            </header>
            <div className="form-container">
                <div className="icons-container">
                    <div className="identificacao-i">
                        <CiUser className="active" />
                        <span>Identificação</span>
                    </div>
                    <hr />
                    <div className="avaliacao-i">
                        <CiStar className={screen >= 1 ? "active" : null} />
                        <span>Avaliação</span>
                    </div>
                    <hr />
                    <div className="envio-i">
                        <SlPaperPlane className={screen >= 2 ? "active" : null} />
                        <span>Envio</span>
                    </div>
                </div>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    {componentsList[screen]}
                    <div className="buttons">
                        {screen !== 0 ?
                            <button type="button" onClick={handlePrevScreen}>
                                <GrFormPrevious />
                            </button> : null}

                        {screen === 2 ?
                            <button type="submit">
                                <span>Enviar</span>
                            </button> : null}
                        {screen !== 2 ?
                        <button type="button" onClick={handleNextScreen}>
                        <GrFormNext />
                    </button> :null
                    }
                            
                    </div>
                </form>

            </div>
        </>
    );
}

export default App;