import React, {useState, useEffect} from "react";
import ProjectsSection from "./components/ProjectsSection";
import ResearchSection from "./components/ResearchSection";
import ContactSection from "./components/ContactSection";
import katex from 'katex';
import 'katex/dist/katex.min.css';
import './index.scss';

function MathCaption({ value }: { value: string }) {
  return <span dangerouslySetInnerHTML={{ __html: katex.renderToString(value, { throwOnError: true, output: 'htmlAndMathml' }) }} />;
}

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigation?.type === 'reload';
    if (isReload && window.location.hash) {
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }
    if (window.location.hash) return;
    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    resetScroll();
    const frame = requestAnimationFrame(resetScroll);
    window.addEventListener('load', resetScroll, { once: true });
    window.addEventListener('pageshow', resetScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', resetScroll);
      window.removeEventListener('pageshow', resetScroll);
    };
  }, []);
  const [mode, setMode] = useState<"dark" | "light">(() => localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
  useEffect(() => { localStorage.setItem('theme', mode); document.documentElement.style.colorScheme = mode; document.documentElement.dataset.theme = mode; }, [mode]);
  return <div className={`homepage ${mode}-mode font-castoro`}>
    <header className="masthead">
      <button className="theme-switch" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>{mode === 'light' ? '☾ Dark mode' : '☀ Light mode'}</button>
      <h1>Adi Jha</h1><p>Homepage</p>
    </header>
    <main className="home-layout">
      <figure className="lorenz-figure">
        <div className="lorenz" role="img" aria-label="Purple Lorenz attractor" />
        <figcaption>
          Lorenz attractor: <MathCaption value={String.raw`\sigma=10,\quad \rho=28,\quad \beta=\frac{8}{3}`} /><br />
          View: <MathCaption value={String.raw`(\mathrm{elev},\mathrm{azim},\mathrm{roll})=(${mode === 'light' ? '-34' : '-83'}^\circ,${mode === 'light' ? '-38' : '-90'}^\circ,${mode === 'light' ? '5' : '50'}^\circ)`} /><br />
          Center: <MathCaption value={String.raw`(0,0,0),\quad x,y,z\in[-45,45]`} /><br />
          12 trajectories, <MathCaption value={String.raw`t\in[0,60]`} />; initial states<br />
          <MathCaption value={String.raw`(1+0.02i,\;1-0.015i,\;1+0.01i)`} />, <MathCaption value={String.raw`i=0,\ldots,11`} />.
        </figcaption>
      </figure>
      <div className="home-copy">
        <div className="welcome"><p>Welcome to my personal page!</p><p>I am a second-year student studying Aerospace and Electrical Engineering at the University of Illinois Urbana-Champaign. I was previously dual-enrolled at Princeton University, where I studied Physics.</p><p>I currently work with the Padovan Group at the New Jersey Institute of Technology. My research interests include operator-theoretic analysis, reduced-order modeling, and scientific machine learning, with a focus on predicting and understanding the behavior of nonlinear systems using these techniques.</p><p>Thanks for visiting!</p><p>-- Adi</p></div>
        <nav className="home-links" aria-label="Homepage links"><h2>Links</h2><ul>
          <li><a href="#research">Research</a><span>Overview of my research interests and current work.</span></li>
          <li><a href="#publications">Publications and Preprints</a><span>List of publications, preprints, and manuscripts.</span></li>
          <li><a href="/documents/adi-jha-cv.pdf">Curriculum Vitae</a><span>My CV (PDF) with academic background and experience. Last updated: November 3, 2026.</span></li>
          <li><a href="#projects">Projects</a><span>Will be updated.</span></li>
          <li><a href="#contact">Contact</a><span>How to reach me (email, office, etc.).</span></li>
        </ul></nav>
      </div>
    </main>
    <div className="details"><ResearchSection mode={mode}/><ProjectsSection mode={mode}/><ContactSection mode={mode}/></div>
  </div>;
}
export default App;
