import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-900/50 pt-20 pb-32 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                                <span className="material-icons-round text-sm">account_balance</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">ENTERCARD</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Ledande leverantör av betal- och kreditkortslösningar på den skandinaviska marknaden.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 dark:text-white uppercase text-xs tracking-widest">Produkter</h4>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Kreditkort</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Privatlån</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Betallösningar</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 dark:text-white uppercase text-xs tracking-widest">Om Entercard</h4>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Hållbarhet</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
                            <li><a className="hover:text-primary transition-colors font-semibold" href="#">Karriär</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 dark:text-white uppercase text-xs tracking-widest">Följ oss</h4>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm hover:text-primary transition-all" href="#">
                                <img alt="LinkedIn" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5t20tTVd2wo9ihSmGLTCKQUY_ai75IkqP4HBWD8oTW4OiWADw9Fi5c58VABnm58Sa6FUOgUUhsm7wxLxim8N5pAZNRnzEo2fVUX1Dz_zi9qqTUWM8qTHijxLvk9mBQFrvI9P9qtOYsuNXqg6ODfgRQqFPQUA5YnY2T08Gn1vDtUBbNHq3Mc4PHAVHIqAMuZkeLzA4ZvwIBSkBzYKPVBof1zSClOeVmNV6kgO4cYoxGvsRJ0mXjhmQl5m0kR9Oks8OEo6TgTUSF5U" />
                            </a>
                            <a className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm hover:text-primary transition-all" href="#">
                                <img alt="Facebook" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEds6ZV7xLN3E8EzLi14W91WjA8O7hhwtEgdlqbHE9gipR7M9RMBpcAHCigFIB9_VCWYlTIUAUTxB_yv4S1k5Ivjib81GzUIjgvmnP49NRMu1dsBbL6pgdAho3Q_fzbf8Lk-ui-NmceHllX_5wCMrYalIqSVnHtOgVe5EqaUV12NOCGRisAQe-r5reM7j9kJ5wioBwTfmiiqqHaiTAXf0anCx786KGIzQzhpt9vBTX53Vr2B2gzcZlG0mkMnrlUuCKDzvdfHUWIMo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <p>© 2024 Entercard Group AB. Org nr: 556673-0585</p>
                    <div className="flex gap-6">
                        <a className="hover:text-primary transition-colors" href="#">Cookies</a>
                        <a className="hover:text-primary transition-colors" href="#">Integritetspolicy</a>
                        <a className="hover:text-primary transition-colors" href="#">Tillgänglighetsredogörelse</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
