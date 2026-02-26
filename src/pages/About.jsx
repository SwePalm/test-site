import React from 'react';

const About = () => {
    return (
        <>
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    alt="Skandinaviskt landskap"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqO3xXUvp7tjr7K5PIaGJ70hktKjivN54YTvyqnkehsQkf0vsZLcXn1iS_tnF2hhTvFCZVcf51eOM_Pwa6WdtadNwvttXdAPIpUbMJgj5oeAj1f9o-x5miyQNrask8E4k23_5FAotsJPU71lpPlhOlyNhGRrKPTBkBlPryai-xQ0jQXdOP9Rr5m0OfC3dTtOKcTqocgUF2eusreZLY6v7Li0UDt9zni-qGwVIyqsJX4wjzCQ-k-UUjaLEqIrwJH2yyPDtlWJNvCbU"
                />
                <div className="absolute inset-0 hero-gradient opacity-60"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-display text-white mb-6 leading-tight">
                        Vi skapar finansiell trygghet och en hållbar framtid
                    </h1>
                    <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                        Vår resa handlar om mer än siffror. Det handlar om människor, innovation och ett gemensamt ansvar för vår planet.
                    </p>
                </div>
            </header>

            <main>
                <section className="py-24 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display mb-4">Vår historia</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Sedan starten har vi arbetat för att utmana och förbättra den skandinaviska kreditmarknaden.
                        </p>
                    </div>
                    <div className="relative py-10">
                        {/* Timeline logic simplified for React */}
                        <div className="absolute left-1/2 transform -translateX-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

                        <div className="relative mb-20 flex flex-col md:flex-row justify-between items-center w-full">
                            <div className="hidden md:block w-5/12"></div>
                            <div className="z-20 flex items-center bg-primary shadow-xl w-10 h-10 rounded-full mb-4 md:mb-0">
                                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg w-full md:w-5/12 px-8 py-6 border border-slate-100 dark:border-slate-800">
                                <span className="text-primary dark:text-accent font-bold text-xl">2005</span>
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">Grundandet</h3>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    Entercard grundas som ett joint venture för att skapa innovativa betallösningar på den nordiska marknaden.
                                </p>
                            </div>
                        </div>

                        <div className="relative mb-20 flex flex-col md:flex-row justify-between items-center w-full">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg w-full md:w-5/12 px-8 py-6 border border-slate-100 dark:border-slate-800 order-2 md:order-1">
                                <span className="text-primary dark:text-accent font-bold text-xl">2010</span>
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">Expansion</h3>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    Vi lanserar våra egna varumärken och utökar verksamheten till hela Skandinavien med fokus på digital användarvänlighet.
                                </p>
                            </div>
                            <div className="z-20 flex items-center bg-primary shadow-xl w-10 h-10 rounded-full mb-4 md:mb-0 order-1 md:order-2">
                                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                            </div>
                            <div className="hidden md:block w-5/12 order-3"></div>
                        </div>

                        <div className="relative mb-20 flex flex-col md:flex-row justify-between items-center w-full">
                            <div className="hidden md:block w-5/12"></div>
                            <div className="z-20 flex items-center bg-primary shadow-xl w-10 h-10 rounded-full mb-4 md:mb-0">
                                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                            </div>
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg w-full md:w-5/12 px-8 py-6 border border-slate-100 dark:border-slate-800">
                                <span className="text-primary dark:text-accent font-bold text-xl">Idag</span>
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">Marknadsledande</h3>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    Med över 2 miljoner kunder är vi en av de ledande aktörerna inom kreditkort och konsumentkrediter i Norden.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/40 py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl font-display mb-6">Vårt ansvar (CSR)</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    Hållbarhet är integrerat i allt vi gör. Vi fokuserar på ansvarsfull kreditgivning, ekonomisk inkludering och att minska vårt miljöavtryck. Genom att investera i förnybar energi och digitalisera våra processer skapar vi långsiktigt värde.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                                        <div className="text-3xl font-bold text-primary dark:text-accent mb-2">100%</div>
                                        <p className="text-sm text-slate-500">Förnybar energi i våra lokaler</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                                        <div className="text-3xl font-bold text-primary dark:text-accent mb-2">-40%</div>
                                        <p className="text-sm text-slate-500">Minskat koldioxidavtryck sedan 2019</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                                        <div className="text-3xl font-bold text-primary dark:text-accent mb-2">95%</div>
                                        <p className="text-sm text-slate-500">Digitala fakturor</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                                        <div className="text-3xl font-bold text-primary dark:text-accent mb-2">40+</div>
                                        <p className="text-sm text-slate-500">Nationaliteter bland anställda</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    alt="Hållbar energi"
                                    className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6i3Mgg0qpO8WtDoCvYk49ENZafGkP5ra3EH0tpxtmuarVweL8M7zpaPxibZvqAmUdOr0WcXqyypl7wr7dexf1KKgGQESjVToeIiKy7k5rNZX9SvTeYdh1tT90gfhTLfagf8St_97tIvHoejFdxT5TOoKB1-aJAtp-euG4GOkNkgAmyQbzjvAGjrmw4iU27ksC1nQIa6JkKWc1vLz0Josxiut69CaCVBKqQAhojFDUfB-tmOqcfdn3XW54p1gzeIjahPRhbbye-G8"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-xs">
                                    <span className="material-symbols-outlined text-4xl text-green-500 mb-4">eco</span>
                                    <p className="text-sm font-medium italic">"Vi mäter vår framgång inte bara i vinst, utan i den positiva inverkan vi har på samhället."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display mb-4">Ledarskap</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Vårt ledarteam kombinerar internationell expertis med lokal marknadskännedom.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="group">
                            <div className="relative overflow-hidden rounded-2xl mb-6">
                                <img
                                    alt="Leadership member"
                                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyF6GLmKY7ofBkdEJOIuEzbszdfcM_UFI2ir6XRzUhQgK9pewuGGDuxIVEdDZsrhU3yVkOGGXg4H5ZhAkcfSNOj9j7OhyUq-4W1dfW9sP2LehUmyA8HuZ8F941VL0MooRFwZjuQnq9NqhLGBXJ2HC9x0dVnTSKuR6UMoF6RR8ARlLj0OUXmYkcDLL_BBFUnqCenpgYVJt2mBpRd363rc1b48dQ_OE7_8slPD0_wdu-mvqTvcPeVojkN_fixOkPveWIwZA5KvJlgX8"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-bold text-xl">Erik Bergström</p>
                                    <p className="text-white/80 text-sm">Verkställande direktör</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Erik har över 20 års erfarenhet från banksektorn och brinner för att driva digital transformation med kunden i fokus.
                            </p>
                        </div>
                        {/* Additional leadership members can be added here or kept simple */}
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;
