import React from 'react';

const Home = () => {
    return (
        <>
            <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <img
                    alt="Vinterlandskap i Skandinavien"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqO3xXUvp7tjr7K5PIaGJ70hktKjivN54YTvyqnkehsQkf0vsZLcXn1iS_tnF2hhTvFCZVcf51eOM_Pwa6WdtadNwvttXdAPIpUbMJgj5oeAj1f9o-x5miyQNrask8E4k23_5FAotsJPU71lpPlhOlyNhGRrKPTBkBlPryai-xQ0jQXdOP9Rr5m0OfC3dTtOKcTqocgUF2eusreZLY6v7Li0UDt9zni-qGwVIyqsJX4wjzCQ-k-UUjaLEqIrwJH2yyPDtlWJNvCbU"
                />
                <div className="absolute inset-0 hero-gradient"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">
                        Finansiella lösningar som förenklar din vardag.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        Vi kombinerar trygghet med digital innovation för att ge dig full kontroll över din ekonomi.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:scale-105" href="#">
                            Upptäck våra tjänster
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-40 relative z-20">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-800">
                        <div className="h-48 relative overflow-hidden">
                            <img
                                alt="Person som signerar digitalt"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyVzHExAQWosXJacTyANxZoj4J4yOIm3_sWZmutBzSXAo8cyH9u03s-mTYIYWQtbNma79EFRCefvllw7GmjF0q5onaFunyIu-8DbggmrV1Vb7G8qt8rLrstUVhuvywXWH5quTMhzSENXEr5WfzKzQ5KieB5JIBaWstWR-UhvM9gmtWo7dcqAy9EE2rhHuDzT5wqbX8V45-LuA5kt4kRjSi3WJrOfmvdJZhnOqhVtl4m2_CShrGKoXLvc3MkWvsKZ02vNFAjZgPPjY"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full">
                                <span className="material-icons-round text-primary dark:text-accent">verified_user</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Kundkännedom</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Säkerhet är vår prioritet. Genom KYC säkerställer vi att dina tjänster används tryggt och i enlighet med gällande regler.
                            </p>
                            <a className="inline-flex items-center text-primary dark:text-accent font-semibold hover:underline group" href="#">
                                Läs mer om KYC
                                <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-800">
                        <div className="h-48 relative overflow-hidden">
                            <img
                                alt="Digitala betalningar"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhRHzSqJJPQtNO3pDkIYWLXOXh9DXLcU5PiizC4zHw0D2hQcnB73pdIra2YxoyXicaF-WokpbVWfHaAa0xmtJqy36iFg6OrSaU7GrLe6d5kRjyUEcselZu4ZaXq2lFAJVD8pn_zOlKdvoHo62xPPvTM_PahUYzzTbA_Sy_j4WhkxTUZHKhtnqGeAP10H7-Deu1cWHMLNZPHAuYSJZ_PvPjgBSaqobl-1WAkTVNWKUck69I41Mnp6EGrh70HCAvnbCoimmd_pFB-Hc"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full">
                                <span className="material-icons-round text-primary dark:text-accent">credit_card</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Våra Produkter</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Från re:member till skräddarsydda partnerskap. Vi erbjuder kreditkort och lån anpassade efter ditt liv.
                            </p>
                            <a className="inline-flex items-center text-primary dark:text-accent font-semibold hover:underline group" href="#">
                                Utforska sortimentet
                                <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-800">
                        <div className="h-48 relative overflow-hidden">
                            <img
                                alt="Teamarbete"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyF6GLmKY7ofBkdEJOIuEzbszdfcM_UFI2ir6XRzUhQgK9pewuGGDuxIVEdDZsrhU3yVkOGGXg4H5ZhAkcfSNOj9j7OhyUq-4W1dfW9sP2LehUmyA8HuZ8F941VL0MooRFwZjuQnq9NqhLGBXJ2HC9x0dVnTSKuR6UMoF6RR8ARlLj0OUXmYkcDLL_BBFUnqCenpgYVJt2mBpRd363rc1b48dQ_OE7_8slPD0_wdu-mvqTvcPeVojkN_fixOkPveWIwZA5KvJlgX8"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full">
                                <span className="material-icons-round text-primary dark:text-accent">work_outline</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Jobba hos oss</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Bli en del av ett team med över 450 kollegor från 40 olika länder. Vi bygger framtidens bank tillsammans.
                            </p>
                            <a className="inline-flex items-center text-primary dark:text-accent font-semibold hover:underline group" href="#">
                                Se lediga tjänster
                                <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl group-hover:bg-primary/15 transition-colors"></div>
                        <img
                            alt="Vindkraftverk i havet"
                            className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6i3Mgg0qpO8WtDoCvYk49ENZafGkP5ra3EH0tpxtmuarVweL8M7zpaPxibZvqAmUdOr0WcXqyypl7wr7dexf1KKgGQESjVToeIiKy7k5rNZX9SvTeYdh1tT90gfhTLfagf8St_97tIvHoejFdxT5TOoKB1-aJAtp-euG4GOkNkgAmyQbzjvAGjrmw4iU27ksC1nQIa6JkKWc1vLz0Josxiut69CaCVBKqQAhojFDUfB-tmOqcfdn3XW54p1gzeIjahPRhbbye-G8"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-display mb-6 dark:text-white">Hållbarhet och transparens</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Vi tar ansvar för vår påverkan på miljön och samhället. Här kan du ta del av våra finansiella rapporter, hållbarhetsarbete och senaste publikationer.
                        </p>
                        <button className="px-8 py-3 border-2 border-primary text-primary dark:border-accent dark:text-accent font-semibold rounded-full hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary transition-all">
                            Finansiell information
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
