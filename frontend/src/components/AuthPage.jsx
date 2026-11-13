import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import "./AuthPage.css"

const AuthPage = ({ role, mode }) => {
  const isPartner = role === "partner"
  const isRegister = mode === "register"
  const isForgotPassword = mode === "forgot-password"
  const isResetPassword = mode === "reset-password"
  const basePath = isPartner ? "/food-partener" : "/user"
  const [searchParams] = useSearchParams()
  const [requestState, setRequestState] = useState({ loading: false, message: "", isError: false })

  const handlePasswordRecovery = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (isResetPassword && formData.get("password") !== formData.get("confirmPassword")) {
      setRequestState({ loading: false, message: "Passwords do not match.", isError: true })
      return
    }

    setRequestState({ loading: true, message: "", isError: false })
    const payload = isForgotPassword
      ? { email: formData.get("email") }
      : { token: searchParams.get("token"), password: formData.get("password") }
    const endpoint = isForgotPassword ? "forgot-password" : "reset-password"
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8080/api/auth"

    try {
      const response = await fetch(`${apiBase}/${isPartner ? "partener" : "user"}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.")
      }

      setRequestState({ loading: false, message: result.message, isError: false })
      form.reset()
    } catch (error) {
      setRequestState({
        loading: false,
        message: error.message || "Unable to connect. Please try again later.",
        isError: true,
      })
    }
  }

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
            {isForgotPassword || isResetPassword
              ? "ACCOUNT RECOVERY"
              : isPartner ? "GROW WITH ZOMATO" : "WELCOME TO ZOMATO"}
          </span>
          <h1 id="auth-title">
            {isForgotPassword || isResetPassword
              ? "Let’s get you back in"
              : isRegister
                ? isPartner ? "Bring your restaurant online" : "Discover something delicious"
                : isPartner ? "Welcome back, partner" : "Welcome back"}
          </h1>
          <p>
            {isForgotPassword || isResetPassword
              ? isForgotPassword
                ? "Enter the email address linked to your account and we’ll help you reset your password."
                : "Choose a new password for your account."
              : isRegister
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

          <form
            className="auth-form"
            onSubmit={isForgotPassword || isResetPassword ? handlePasswordRecovery : undefined}
          >
            <div className="form-heading">
              <h2>
                {isForgotPassword || isResetPassword
                  ? isForgotPassword ? "Reset your password" : "Choose a new password"
                  : isRegister ? "Create your account" : "Sign in"}
              </h2>
              <p>
                {isForgotPassword || isResetPassword
                  ? isForgotPassword
                    ? "We’ll send a reset link if there’s an account for this email."
                    : "Use at least 8 characters."
                  : isRegister
                    ? "It only takes a minute."
                    : "Enter your details to continue."}
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

            {!isResetPassword && (
              <label className="field">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required={isForgotPassword}
                />
              </label>
            )}

            {isRegister && (
              <label className="field">
                <span>Phone number <span className="field-optional">(optional)</span></span>
                <input type="tel" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" />
              </label>
            )}

            {!isForgotPassword && (
              <label className="field">
                <span>{isResetPassword ? "New password" : "Password"}</span>
                <input
                  type="password"
                  name="password"
                  placeholder={isRegister || isResetPassword ? "At least 8 characters" : "Enter your password"}
                  autoComplete={isRegister || isResetPassword ? "new-password" : "current-password"}
                  minLength={isRegister || isResetPassword ? 8 : undefined}
                  required={isResetPassword}
                />
              </label>
            )}

            {isResetPassword && (
              <label className="field">
                <span>Confirm new password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your new password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </label>
            )}

            {!isRegister && !isForgotPassword && !isResetPassword && (
              <div className="form-utility">
                <label className="remember-option">
                  <input type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>
                <Link className="text-button" to={`${basePath}/forgot-password`}>Forgot password?</Link>
              </div>
            )}

            <button
              className="primary-button"
              type={isForgotPassword || isResetPassword ? "submit" : "button"}
              disabled={requestState.loading}
            >
              {requestState.loading
                ? "Please wait..."
                : isForgotPassword
                  ? "Send reset link"
                  : isResetPassword
                    ? "Update password"
                    : isRegister
                      ? isPartner ? "Create partner account" : "Create account"
                      : "Sign in"}
              <span aria-hidden="true">→</span>
            </button>

            {requestState.message && (
              <p className={`form-feedback${requestState.isError ? " is-error" : ""}`} role="status">
                {requestState.message}
              </p>
            )}

            <p className="switch-prompt">
              {isForgotPassword || isResetPassword ? (
                <Link to={`${basePath}/login`}>← Back to sign in</Link>
              ) : (
                <>
                  {isRegister ? "Already have an account?" : "New to Zomato?"}{" "}
                  <Link to={`${basePath}/${isRegister ? "login" : "register"}`}>
                    {isRegister ? "Sign in" : "Create an account"}
                  </Link>
                </>
              )}
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
