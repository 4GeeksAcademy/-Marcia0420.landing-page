import React from "react";// esta es la importacion de la libreria React

//include images into your bundle

//create your first component aqui eatoy creando el componente nadbar
const Nadvar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Boostrmp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link disabled" aria-disabled="true">Contact</a>
      </div>
    </div>
  </div>
</nav>
	);
};
// estoy haciendo la exportacion del componente
export default Nadvar;