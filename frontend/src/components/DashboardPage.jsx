import { Link } from "react-router-dom"
import "./DashboardPage.css"

const categories = [
  { icon: "🍕", name: "Pizza", color: "peach" },
  { icon: "🍔", name: "Burgers", color: "yellow" },
  { icon: "🍜", name: "Asian", color: "pink" },
  { icon: "🥗", name: "Healthy", color: "green" },
  { icon: "🍰", name: "Desserts", color: "lavender" },
  { icon: "☕", name: "Coffee", color: "blue" },
]

const restaurants = [
  { name: "The Saffron Table", cuisine: "Indian · North Indian", rating: "4.8", time: "25–30 min", price: "$$", emoji: "🍛", color: "restaurant-saffron", offer: "20% off" },
  { name: "Little Olive", cuisine: "Italian · Pizza", rating: "4.6", time: "20–25 min", price: "$$", emoji: "🍕", color: "restaurant-olive", offer: "Free delivery" },
  { name: "Bowl & Bloom", cuisine: "Healthy · Salads", rating: "4.7", time: "15–20 min", price: "$", emoji: "🥑", color: "restaurant-bloom", offer: "15% off" },
]

const orders = [
  { id: "#ZM-1048", customer: "Aarav Sharma", items: "2 items · Butter Chicken, Naan", amount: "$24.50", time: "2 min ago", status: "New" },
  { id: "#ZM-1047", customer: "Mia Patel", items: "1 item · Paneer Tikka Bowl", amount: "$16.00", time: "8 min ago", status: "Preparing" },
  { id: "#ZM-1046", customer: "Noah Williams", items: "3 items · Family Biryani", amount: "$38.75", time: "14 min ago", status: "On the way" },
]

const metrics = [
  { label: "Total orders", value: "1,284", change: "+12.8%", icon: "↗", tone: "coral" },
  { label: "Revenue", value: "$18,420", change: "+8.4%", icon: "$", tone: "mint" },
  { label: "Avg. rating", value: "4.8", change: "+0.2", icon: "★", tone: "amber" },
  { label: "Returning guests", value: "68%", change: "+5.1%", icon: "♡", tone: "violet" },
]

function Brand() {
  return (
    <Link className="dashboard-brand" to="/user/dashboard" aria-label="Zomato home">
      <span className="dashboard-brand-mark">z</span>
      <span>zomato</span>
    </Link>
  )
}

function UserDashboard() {
  return (
    <main className="dashboard-shell user-dashboard">
      <header className="user-topbar">
        <Brand />
        <button className="delivery-location" type="button">
          <span className="location-pin">⌖</span>
          <span><small>Delivering to</small><strong>Home · Brooklyn, NY</strong></span>
          <span className="chevron">⌄</span>
        </button>
        <label className="dashboard-search">
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="Search restaurants or dishes" aria-label="Search restaurants or dishes" />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-action" type="button" aria-label="Your favorites">♡</button>
        <Link className="user-avatar" to="/user/login" aria-label="Sign in">A</Link>
      </header>

      <div className="user-main">
        <section className="user-greeting">
          <div>
            <span className="dashboard-kicker">THURSDAY, NOVEMBER 13</span>
            <h1>Good morning, Alex <span>☀️</span></h1>
            <p>What sounds good today?</p>
          </div>
          <div className="greeting-decoration" aria-hidden="true"><span>🥡</span><i>✦</i><b>✳</b></div>
        </section>

        <section className="category-section">
          <div className="section-heading">
            <div><h2>Explore by category</h2><p>A little something for every craving</p></div>
            <button type="button" className="subtle-link">View all <span>→</span></button>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <button className="category-item" type="button" key={category.name}>
                <span className={`category-illustration ${category.color}`}>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="restaurant-section">
          <div className="section-heading">
            <div><h2>Popular near you</h2><p>Neighborhood favorites, delivered fresh</p></div>
            <button type="button" className="subtle-link">See all <span>→</span></button>
          </div>
          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <article className="restaurant-card" key={restaurant.name}>
                <div className={`restaurant-art ${restaurant.color}`}>
                  <span className="offer-tag">{restaurant.offer}</span>
                  <span className="restaurant-emoji">{restaurant.emoji}</span>
                  <button className="favorite-button" type="button" aria-label={`Add ${restaurant.name} to favorites`}>♡</button>
                </div>
                <div className="restaurant-details">
                  <div className="restaurant-title-row"><h3>{restaurant.name}</h3><span className="rating-badge">★ {restaurant.rating}</span></div>
                  <p>{restaurant.cuisine}</p>
                  <div className="restaurant-meta"><span>◷ {restaurant.time}</span><span>{restaurant.price}</span><span>·</span><span>Free delivery over $20</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="promo-banner">
          <div><span className="promo-kicker">A LITTLE TREAT FOR YOU</span><h2>Good food tastes even better<br />with 20% off.</h2><p>On your next order over $25</p><button type="button">Explore offers <span>→</span></button></div>
          <div className="promo-art" aria-hidden="true"><span>🍜</span><i>✦</i><b>✳</b></div>
        </section>
      </div>
      <footer className="dashboard-footer"><span>© {new Date().getFullYear()} Zomato</span><span>Made for people who love good food.</span></footer>
    </main>
  )
}

function PartnerDashboard() {
  return (
    <main className="partner-dashboard">
      <aside className="partner-sidebar">
        <Brand />
        <div className="partner-label">RESTAURANT CONSOLE</div>
        <nav className="partner-navigation" aria-label="Restaurant dashboard">
          <a className="partner-nav-item is-current" href="#overview"><span>▦</span> Overview</a>
          <a className="partner-nav-item" href="#orders"><span>▤</span> Orders <b className="nav-count">3</b></a>
          <a className="partner-nav-item" href="#menu"><span>☷</span> Menu</a>
          <a className="partner-nav-item" href="#analytics"><span>▥</span> Analytics</a>
          <a className="partner-nav-item" href="#reviews"><span>☆</span> Reviews</a>
        </nav>
        <div className="sidebar-bottom">
          <a className="partner-nav-item" href="#settings"><span>⚙</span> Settings</a>
          <div className="restaurant-profile"><span className="profile-monogram">ST</span><span><strong>Saffron Table</strong><small>Restaurant owner</small></span><span className="profile-more">···</span></div>
        </div>
      </aside>

      <section className="partner-workspace">
        <header className="partner-topbar">
          <div className="breadcrumb"><span>Workspace</span><b>/</b><strong>Overview</strong></div>
          <div className="partner-top-actions">
            <span className="restaurant-open"><i /> Open</span>
            <button className="icon-action" type="button" aria-label="Notifications">♧<i className="notification-dot" /></button>
            <span className="partner-avatar">ST</span>
          </div>
        </header>

        <div className="partner-content" id="overview">
          <section className="partner-welcome">
            <div><span className="dashboard-kicker">THURSDAY, NOVEMBER 13, 2026</span><h1>Good morning, Sam <span>👋</span></h1><p>Here’s what’s happening with your restaurant today.</p></div>
            <button className="outline-button" type="button"><span>⇩</span> Download report</button>
          </section>

          <section className="metric-grid" aria-label="Restaurant performance">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <div className="metric-heading"><span>{metric.label}</span><span className={`metric-icon ${metric.tone}`}>{metric.icon}</span></div>
                <strong className="metric-value">{metric.value}</strong>
                <div className="metric-trend"><span>↗ {metric.change}</span> <small>vs. last month</small></div>
              </article>
            ))}
          </section>

          <section className="partner-panel orders-panel" id="orders">
            <div className="panel-heading">
              <div><h2>Recent orders <span className="orders-total">3</span></h2><p>Keep an eye on your latest activity</p></div>
              <a href="#orders">View all orders <span>→</span></a>
            </div>
            <div className="orders-table-wrap">
              <table className="orders-table">
                <thead><tr><th>ORDER</th><th>CUSTOMER</th><th>AMOUNT</th><th>PLACED</th><th>STATUS</th><th /></tr></thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td><strong className="order-id">{order.id}</strong></td>
                      <td><strong>{order.customer}</strong><small>{order.items}</small></td>
                      <td className="order-amount">{order.amount}</td>
                      <td className="order-time">{order.time}</td>
                      <td><span className={`order-status ${order.status.toLowerCase().replaceAll(" ", "-")}`}><i />{order.status}</span></td>
                      <td><button className="row-more" type="button" aria-label={`More options for order ${order.id}`}>···</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="partner-lower-grid">
            <article className="partner-panel revenue-panel" id="analytics">
              <div className="panel-heading"><div><h2>Revenue overview</h2><p>Your earnings over the last 7 days</p></div><button className="period-select" type="button">This week <span>⌄</span></button></div>
              <div className="revenue-summary"><strong>$4,825.60</strong><span>↗ 8.4%</span></div>
              <div className="chart-area" aria-label="Revenue chart for the last seven days">
                <div className="chart-y-labels"><span>$1k</span><span>$750</span><span>$500</span><span>$250</span><span>$0</span></div>
                <div className="chart">
                  <div className="chart-grid-lines"><i /><i /><i /><i /><i /></div>
                  <svg viewBox="0 0 600 180" preserveAspectRatio="none" role="img" aria-label="Revenue trending upward through the week">
                    <defs><linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--color-accent)" stopOpacity=".22" /><stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" /></linearGradient></defs>
                    <path d="M0 133 C35 128 45 100 85 108 S140 131 170 99 S225 95 255 83 S305 107 340 72 S395 81 425 57 S480 74 510 46 S565 52 600 24 L600 180 L0 180Z" fill="url(#revenue-fill)" />
                    <path d="M0 133 C35 128 45 100 85 108 S140 131 170 99 S225 95 255 83 S305 107 340 72 S395 81 425 57 S480 74 510 46 S565 52 600 24" fill="none" stroke="var(--color-accent)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="chart-x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                </div>
              </div>
            </article>

            <article className="partner-panel menu-panel" id="menu">
              <div className="panel-heading"><div><h2>Top menu items</h2><p>Most ordered this week</p></div><a href="#menu">View menu <span>→</span></a></div>
              <div className="top-item"><span className="menu-item-art menu-art-one">🍛</span><span className="menu-item-info"><strong>Butter Chicken</strong><small>Indian · Main course</small></span><span className="item-sales"><strong>84</strong><small>sold</small></span></div>
              <div className="top-item"><span className="menu-item-art menu-art-two">🥘</span><span className="menu-item-info"><strong>Paneer Tikka Bowl</strong><small>Indian · Vegetarian</small></span><span className="item-sales"><strong>67</strong><small>sold</small></span></div>
              <div className="top-item"><span className="menu-item-art menu-art-three">🍚</span><span className="menu-item-info"><strong>Chicken Biryani</strong><small>Indian · Rice</small></span><span className="item-sales"><strong>51</strong><small>sold</small></span></div>
            </article>
          </section>
        </div>
      </section>
    </main>
  )
}

const DashboardPage = ({ role }) => role === "partner" ? <PartnerDashboard /> : <UserDashboard />

export default DashboardPage
