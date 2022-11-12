import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, delete_dog } from "../actions";
import { useEffect } from "react";
import "../styles/Detail.css";
import { GiDogBowl, GiDogHouse, GiSittingDog } from "react-icons/gi";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams((state) => state.detail); // Para acceder al id del Detail

  useEffect(() => {
    dispatch(getDetail(id));
    setTimeout (() => {
      dispatch(getDetail(id));
    }, 0.2);
  }, [dispatch, id]);

  
const myDog = useSelector((state) => state.detail);

  // vamos a crear un metodo para borrar el perro de la lista creada
   const deleteDog = () => {
    dispatch(delete_dog(id));
    alert("Seguro que quieres borrar a este perro?");
    window.location.href = "/home";
  };



 
return (
    <div className="divDetail">
      <div className="detail-container">
        <div className="detail-container-img">
         
          <h1 className="name">{myDog.name}</h1>
          <img src={myDog.image} alt={myDog.name} className="image" />
        </div>
        <div className="detail-container-info">
          <h4 className="caracts">Altura</h4>
          <p>
            {myDog.heightMin} - {myDog.heightMax} cm
          </p>
          <h4 className="caracts">Peso</h4>
          <p>
            {myDog.weightMin} - {myDog.weightMax} kg
          </p>
          <h4 className="caracts">Esperanza de vida</h4>
          <p className="last">{myDog.life_span}</p>
          <div className="conta">
          <Link to="/home">
            <button className="buttonHome3" id="home">
              Home <GiDogHouse />
            </button>
          </Link>
          
          <Link to="/dogs">
            <button className="buttonHome3">
              Crear Cachorro <GiSittingDog />
            </button>
          </Link>
          <Link to={"/home"}>
            <button className="buttonDelete" onClick={deleteDog}>
              Borrar <GiDogBowl />
            </button>
          </Link>
          </div>
        </div>
      </div>
      <div>{/* button submit para borrar el perro de la lista */}</div>
    </div>
  );
}
