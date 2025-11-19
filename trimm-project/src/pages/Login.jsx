import "../styles/login.css";
export default function Login() {
  return (
    <div className="container">
      <div className="card">

        <h1 className="title">Trimm</h1>

        <h2 className="subtitle">Bem-Vindo</h2>
        <p className="description">
          Preencha os dados abaixo para acessar sua conta.
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="inputField"
          />

          <input
            type="password"
            placeholder="Senha"
            className="inputField"
          />

          <button className="loginButton">
            Entrar
          </button>
        </div>

        <div className="dividerContainer">
          <span className="dividerLine"></span>
          <span className="dividerText">Ou faça login com</span>
          <span className="dividerLine"></span>
        </div>

        <div className="space-y-3">
          <button className="oauthButton">
            Continue com Google
          </button>

          <button className="oauthButton">
            Continue com Apple
          </button>
        </div>

        <p className="footerText">
          Não tem uma conta?{" "}
          <a href="#" className="footerLink">Cadastre-se aqui!</a>
        </p>

      </div>
    </div>
  );
}
