import React, { Component } from "react";
import "../styles/Login.css";

class Login extends Component {
  // creamos el metodo de login y cuando se ejecute el metodo de login se redireccionara a la ruta de /landingpage
  constructor(props) {
    super(props);
    this.state = {
      email: "admin@gmail.com", // se le asigna un valor por defecto
      password: "123456", // se le asigna un valor por defecto
      checkbox: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.email === "admin@gmail.com" &&
      this.state.password === "123456" &&
      this.state.checkbox === true
    ) {
      alert(
        "Los datos son correctos muchas gracias" +
          this.state.email +
          this.state.password +
          this.state.checkbox
      );
      window.location.href = "/landingpage";
    } else {
      alert("los datos son incorrectos");
      if (this.state.email !== "admin@gmail.com") {
        alert("el email es incorrecto");
      }
      if (this.state.password !== "123456") {
        alert("la contraseña es incorrecta");
      }
      if (this.state.checkbox !== true) {
        alert("debe aceptar los terminos y condiciones");
      }
    }
  }

  render() {
    return (
      <div className="contai">
        <div className="row">
          <div className="col-md-6">
            <h1 className="login">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <div className="form-check">
                  <label htmlFor="checkbox">checkbox</label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox"
                    name="checkbox"
                    value={this.state.checkbox}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="buttonHome">
                Login
              </button>
            </form>
            <footer>
              <p className="footer">© 2022 - Todos los derechos reservados</p>
              <a href="https://github.com/farobledo" className="git">
                <i className="fa fa-github" aria-hidden="true"></i>GitHub
                Proyecto Fabian Robledo Developer{" "}
              </a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
