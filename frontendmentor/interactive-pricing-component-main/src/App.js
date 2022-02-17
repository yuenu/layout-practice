import { useState, useEffect } from 'react'
import Icon from './components/Icon'

const Header = () => {
  return (
    <header
      id="header"
      className="text-center gap-3 h-48 flex justify-center items-center flex-col font-semibold"
    >
      <h1 className="text-3xl text-cblue-400">Simple, traffic-based pricing</h1>
      <p className="text-cblue-300">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </header>
  )
}

const Container = () => {
  return (
    <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg">
      <ContainerTop />
      <ContainerBottom />
    </div>
  )
}

const ContainerTop = () => {
  const [price, setPrice] = useState(16)
  const [plan, setPlan] = useState('month')

  useEffect(() => {
    if (plan === 'month') setPrice(16)
    else setPrice(190)
  }, [plan])

  return (
    <div className="p-14 space-y-10 border-b">
      <div className="flex justify-between items-center text-cblue-300 font-semibold">
        <div>100K Pageviews</div>
        <div>
          <span className="text-cblue-400 text-4xl">${price.toFixed(2)}</span>/
          {plan}
        </div>
      </div>
      <ProgressBar progress={price} setProgress={setPrice} plan={plan} />
      <Plan setPlan={setPlan} />
    </div>
  )
}

const ProgressBar = ({ plan, progress, setProgress }) => {
  // const [count, setCount] = useState(6)
  return (
    <div className="range">
      <input
        className="w-full"
        type="range"
        min="0"
        max={plan === 'month' ? 32 : 380}
        step={plan === 'month' ? 2 : 23.75}
        value={progress}
        style={{
          backgroundSize: `${
            plan === 'month' ? (progress / 32) * 100 : (progress / 380) * 100
          }%`,
        }}
        onChange={(e) => setProgress(e.target.valueAsNumber)}
      />
    </div>
  )
}

const Plan = ({ setPlan }) => {
  return (
    <div className="flex gap-4 mr-6 items-center text-cblue-300 justify-end">
      <div>Monthly Billing</div>
      <PlanControl setPlan={setPlan} />
      <div>Yearly Billing</div>
      <span className="bg-[#faece8] px-2 rounded-lg text-orange-400 text-sm">
        25% discount
      </span>
    </div>
  )
}

const PlanControl = ({ setPlan }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checked) setPlan('year')
    else setPlan('month')
  }, [checked, setPlan])

  return (
    <label className="toggle-control">
      <input
        id="plan-control"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <span className="control"></span>
    </label>
  )
}

const ContainerBottom = () => {
  return (
    <div className="px-14 py-10 flex items-center justify-between">
      <ul className="space-y-2 text-cblue-300">
        <li className="flex items-center gap-4">
          <Icon.Check />
          Unlimited websites
        </li>
        <li className="flex items-center gap-4">
          <Icon.Check />
          100% data ownership
        </li>
        <li className="flex items-center gap-4">
          <Icon.Check />
          Email reports
        </li>
      </ul>
      <button
        type="button"
        className="bg-cblue-400 text-cblue-300 hover:text-cblue-100 px-16 py-4 rounded-full shadow-sm hover:shadow-xl"
      >
        Start my trial
      </button>
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
    <div className="min-h-screen flex justify-center items-center flex-col">
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App
