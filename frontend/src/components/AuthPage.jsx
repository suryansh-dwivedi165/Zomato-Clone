import { Link } from "react-router-dom"
import "./AuthPage.css"

const AuthPage = ({ role, mode }) => {
  const isPartner = role === "partner"
  const isRegister = mode === "register"
  const basePath = isPartner ? "/food-partener" : "/user"

  return (
    <main className="auth-page">
      <header className="auth-header">
        <Link className="brand" to="/user/login" aria-label="Zomato home">
          <span className="brand-mark" aria-hidden="true">z</span>
          <span>zomato</span>
        </Link>
        <span className="header-note">
          {isPartner ? "For restaurant partners" : "Good food, good mood"}
        </span>
      </header>

      <section className="auth-content" aria-labelledby="auth-title">
        <div className="auth-intro">
          <span className="auth-eyebrow">
            {isPartner ? "GROW WITH ZOMATO" : "WELCOME TO ZOMATO"}
          </span>
          <h1 id="auth-title">
            {isRegister
              ? isPartner ? "Bring your restaurant online" : "Discover something delicious"
              : isPartner ? "Welcome back, partner" : "Welcome back"}
          </h1>
          <p>
            {isRegister
              ? isPartner
                ? "Reach more customers and grow your business with us."
                : "Sign up to find your next favorite meal."
              : isPartner
                ? "Sign in to manage your restaurant on Zomato."
                : "Sign in to pick up where your cravings left off."}
          </p>
        </div>

        <div className="auth-card">
          <nav className="account-tabs" aria-label="Choose account type">
            <Link
              className={`account-tab${!isPartner ? " is-active" : ""}`}
              to={`/user/${mode}`}
              aria-current={!isPartner ? "page" : undefined}
            >
              I&apos;m here to eat
            </Link>
            <Link
              className={`account-tab${isPartner ? " is-active" : ""}`}
              to={`/food-partener/${mode}`}
              aria-current={isPartner ? "page" : undefined}
            >
              Restaurant partner
            </Link>
          </nav>

          <form className="auth-form">
            <div className="form-heading">
              <h2>
                {isRegister ? "Create your account" : "Sign in"}
              </h2>
              <p>
                {isRegister ? "It only takes a minute." : "Enter your details to continue."}
              </p>
            </div>

            {isRegister && (
              <>
                <label className="field">
                  <span>{isPartner ? "Restaurant name" : "Full name"}</span>
                  <input
                    type="text"
                    name={isPartner ? "restaurantName" : "name"}
                    placeholder={isPartner ? "Your restaurant name" : "Your name"}
                    autoComplete="name"
                  />
                </label>
                {isPartner && (
                  <label className="field">
                    <span>Contact person</span>
                    <input type="text" name="contactName" placeholder="Your full name" autoComplete="name" />
                  </label>
                )}
              </>
            )}

            <label className="field">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>

            {isRegister && (
              <label className="field">
                <span>Phone number <span className="field-optional">(optional)</span></span>
                <input type="tel" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" />
              </label>
            )}

            <label className="field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder={isRegister ? "At least 8 characters" : "Enter your password"}
                autoComplete={isRegister ? "new-password" : "current-password"}
                minLength={isRegister ? 8 : undefined}
              />
            </label>

            {!isRegister && (
              <div className="form-utility">
                <label className="remember-option">
                  <input type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>
              </div>
            )}

            <button
              className="primary-button"
              type="button"
            >
              {isRegister
                ? isPartner ? "Create partner account" : "Create account"
                : "Sign in"}
              <span aria-hidden="true">→</span>
            </button>

            <p className="switch-prompt">
              {isRegister ? "Already have an account?" : "New to Zomato?"}{" "}
              <Link to={`${basePath}/${isRegister ? "login" : "register"}`}>
                {isRegister ? "Sign in" : "Create an account"}
              </Link>
            </p>
          </form>

          <p className="legal-note">
            By continuing, you agree to our <a href="#terms">Terms of Service</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>

      <footer className="auth-footer">
        <span>© {new Date().getFullYear()} Zomato</span>
        <span>Made for people who love good food.</span>
      </footer>
    </main>
  )
}

export default AuthPage
