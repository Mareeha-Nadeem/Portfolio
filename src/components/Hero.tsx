import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="font-sans bg-[var(--color-bg)]">
      {/* ===================== HERO GRID ===================== */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-3 lg:gap-8 lg:px-12">

        {/* ================= COLUMN 1: INTRO ================= */}
        <div className="order-2 flex flex-col items-center gap-8 lg:gap-32 text-center lg:order-1 lg:items-start lg:text-left">

          {/* ROW 1 : INTRO */}
          <div>
            <h2 className="text-[22px] font-bold leading-[0.95] tracking-[-0.02em] text-[var(--color-text)] sm:text-[26px]">
              Hi! I am
            </h2>
            <h1 className="mt-2 text-[28px] font-extrabold leading-[0.95] tracking-[-0.02em] text-[var(--color-accent)] sm:text-[34px]">
              Mareeha Nadeem.
            </h1>
          </div>

          {/* ROW 2 : EXPERIENCE */}
          <div className="flex items-center gap-4">
            <h2 className="text-[32px] font-extrabold leading-none text-[var(--color-text)]">
              3+
            </h2>
            <p className="text-[10px] uppercase leading-5 tracking-[0.25em] text-[var(--color-muted)] text-left">
              YEARS<br />BUILDING
            </p>
          </div>

          {/* ROW 3 : SOCIALS */}
          <div className="flex gap-4 mt-10">
            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white cursor-pointer">
              <FaFacebookF />
            </a>
            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white cursor-pointer">
              <FaInstagram />
            </a>
            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white cursor-pointer">
              <FaTwitter />
            </a>
            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white cursor-pointer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ================= COLUMN 2: PICTURE ================= */}
        <div className="order-1 flex justify-center lg:order-2 relative">
          <div className="absolute left-[270px] top-[240px] hidden lg:block -rotate-[349deg]">
            <svg
              width="260"
              height="140"
              viewBox="0 0 260 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curved Dashed Path */}
              <path
                d="M22 45 C22 75, 45 105, 78 110 C120 116, 165 60, 205 28 C225 12, 245 12, 250 28"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeDasharray="8 10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Arrow Head */}
              <path d="M22 45 L16 53" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M22 45 L28 53" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="relative flex items-center justify-center w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px] aspect-[4/5] bg-theme-alt/30 rounded-[40px] overflow-hidden">
            <span className="text-theme-muted font-medium">/thepfp.png Placeholder</span>
            {/* Fallback image if users provide it, otherwise it stays a box */}
            <img
              src="/thepfp.png"
              alt="Mareeha Nadeem"
              width={430}
              height={520}
              className="absolute inset-0 w-full h-full object-contain"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
        </div>

        {/* ================= COLUMN 3: DETAILS ================= */}
        <div className="order-3 flex flex-col items-center gap-8 lg:gap-22 text-center lg:items-end lg:text-right">

          {/* ROW 1 : DESCRIPTION */}
          <p className="max-w-xs text-[13px] font-medium leading-[1.8] text-[var(--color-muted)]">
            I turn raw data into<br />
            clear decisions through<br />
            machine learning.
          </p>

          {/* ROW 2 : CARD */}
          <div className="w-full max-w-[280px] rounded-[20px] border border-[var(--color-border)] bg-white px-6 py-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-[14px] font-semibold tracking-wide text-[var(--color-text)]">
              EDA · ML · Predictive Analytics
            </p>
            <p className="mt-2 text-[13px] font-semibold text-[var(--color-accent)]">
              mareehanadeem@gmail.com
            </p>
          </div>

          {/* ROW 3 : TITLE */}
          <div>
            <h2 className="font-serif text-[26px] leading-none text-[var(--color-text)] sm:text-[30px]">
              <span className="font-medium">Data</span><br />
              <span className="font-bold italic text-[30px] text-[var(--color-accent)] sm:text-[34px]">
                Scientist.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
