const Header = () => {
  return (
    <header>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
    </header>
  )
}

const Container = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>100K Pageviews</div>
        <div>
          <span>$16.00</span>/month
        </div>
      </div>
      <ProgressBar />
      <Setting />
    </div>
  )
}

const ProgressBar = () => {}

const Setting = () => {
  return (
    <div>
      <div>Monthly Billing</div>
      <input type="checkbox" />
      <div>Yearly Billing</div>
      <span>25% discount</span>
    </div>
  )
}

const ContainerFooter = () => {
  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="attribution mt-auto">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/yuenu">yuenu</a>.
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App
