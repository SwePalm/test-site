import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Careers from './pages/Careers';
import Support from './pages/Support';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <Navbar isDark={isDark} setIsDark={setIsDark} />
                <div className="flex-grow pt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/support" element={<Support />} />
                    </Routes>
                </div>
                <Footer />

                {/* Cookie Banner (Simulated) */}
                {!localStorage.getItem('cookies-accepted') && (
                    <div className="fixed bottom-0 inset-x-0 z-[100] p-4" id="cookie-banner">
                        <div className="max-w-5xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-6">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1">
                                    <h5 className="text-lg font-bold mb-1 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary dark:text-accent">cookie</span>
                                        Integritet &amp; Cookies
                                    </h5>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        Vi använder cookies för att optimera din upplevelse. Genom att fortsätta godkänner du vår policy.
                                    </p>
                                </div>
                                <div className="flex gap-3 shrink-0">
                                    <button
                                        className="px-6 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                        onClick={() => {
                                            localStorage.setItem('cookies-accepted', 'true');
                                            document.getElementById('cookie-banner').remove();
                                        }}
                                    >
                                        Inställningar
                                    </button>
                                    <button
                                        className="px-8 py-2.5 text-sm font-bold bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition-all"
                                        onClick={() => {
                                            localStorage.setItem('cookies-accepted', 'true');
                                            document.getElementById('cookie-banner').remove();
                                        }}
                                    >
                                        Godkänn
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
