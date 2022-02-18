import { useState, useEffect } from 'react'
import Icon from './components/Icon'

function formatNumber(num) {
  if (num > 999999) return `${(num / 1000000) | 0}M`
  else if (num > 999) return `${(num / 1000) | 0}k`
  else return num + ''
}

const Header = () => {
  return (
    <header
      id="header"
      className="flex flex-col items-center justify-center h-48 gap-3 my-5 font-semibold text-center md:my-10 "
    >
      <h1 className="text-xl md:text-3xl text-cblue-400">
        Simple, traffic-based pricing
      </h1>
      <p className="max-w-[230px] text-cblue-300">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </header>
  )
}

const Container = () => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
      <ContainerTop />
      <ContainerBottom />
    </div>
  )
}

const ContainerTop = () => {
  const [price, setPrice] = useState(16)
  const [view, setView] = useState(100000)
  const [plan, setPlan] = useState('month')

  useEffect(() => {
    if (plan === 'month') {
      setPrice((prev) => (prev / 18) * 2)
      setView((prev) => (prev / 18) * 2)
    } else {
      setPrice((prev) => (prev * 18) / 2)
      setView((prev) => (prev * 18) / 2)
    }
  }, [plan])

  useEffect(() => {
    setPrice(16)
    setView(100000)
  }, [])

  useEffect(() => {
    if (plan === 'month') {
      setView((price / 32) * 100 * 2000)
    } else {
      setView((price / 288) * 100 * 2000)
    }
  }, [price, plan])

  return (
    <div className="py-10 space-y-10 border-b px-7 md:p-14">
      <div className="flex flex-col items-center justify-between gap-8 font-semibold text-cblue-300 md:flex-row md:flex-wrap">
        <div className="text-lg tracking-wider uppercase">
          {formatNumber(view)} Pageviews
        </div>
        <div className="flex items-center order-3 text-lg tracking-wider md:order-1">
          <span className="text-4xl text-cblue-400">${price.toFixed(2)}</span>/
          {plan}
        </div>
        <ProgressBar progress={price} setProgress={setPrice} plan={plan} />
      </div>
      <Plan setPlan={setPlan} />
    </div>
  )
}

const ProgressBar = ({ plan, progress, setProgress }) => {
  return (
    <div className="order-2 w-full range">
      <input
        className="w-full"
        type="range"
        min={0}
        max={plan === 'month' ? 32 : 288}
        step={plan === 'month' ? 2 : 18}
        value={progress}
        style={{
          backgroundSize: `${
            plan === 'month' ? (progress / 32) * 100 : (progress / 288) * 100
          }%`,
        }}
        onChange={(e) => setProgress(e.target.valueAsNumber)}
      />
    </div>
  )
}

const Plan = ({ setPlan }) => {
  return (
    <div className="flex items-center justify-end w-full gap-4 mr-6 text-xs md:text-base text-cblue-300 whitespace-nowrap">
      <div>Monthly Billing</div>
      <PlanControl setPlan={setPlan} />
      <div className="flex items-center">
        Yearly Billing
        <div className="bg-[#faece8] px-2 rounded-lg text-orange-400 text-sm ml-2 flex items-center">
          <span className="block md:hidden">-</span>25%{' '}
          <span className="hidden md:block"> discount</span>
        </div>
      </div>
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
    <div className="flex flex-col items-center justify-between gap-8 py-8 md:py-10 px-14 md:flex-row">
      <ul className="space-y-2 text-cblue-300 ">
        <li className="flex items-center justify-center gap-4 md:justify-start">
          <Icon.Check />
          Unlimited websites
        </li>
        <li className="flex items-center justify-center gap-4 md:justify-start">
          <Icon.Check />
          100% data ownership
        </li>
        <li className="flex items-center justify-center gap-4 md:justify-start">
          <Icon.Check />
          Email reports
        </li>
      </ul>

      <button
        type="button"
        className="w-3/4 h-12 rounded-full shadow-sm md:w-56 bg-cblue-400 text-cblue-300 hover:text-cblue-100 hover:shadow-xl"
      >
        Start my trial
      </button>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="mt-auto attribution">
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
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App
