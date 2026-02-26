import React from 'react';

const Careers = () => {
    const jobs = [
        { title: 'Senior Data Scientist', department: 'Analytics', location: 'Stockholm' },
        { title: 'UX Designer', department: 'Digital Products', location: 'Oslo' },
        { title: 'Customer Service Agent', department: 'Customer Operations', location: 'Köpenhamn' },
        { title: 'Compliance Officer', department: 'Legal & Compliance', location: 'Stockholm' },
    ];

    return (
        <>
            <header className="relative h-[70vh] flex items-center overflow-hidden pt-20">
                <img
                    alt="Collaborative office environment"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyF6GLmKY7ofBkdEJOIuEzbszdfcM_UFI2ir6XRzUhQgK9pewuGGDuxIVEdDZsrhU3yVkOGGXg4H5ZhAkcfSNOj9j7OhyUq-4W1dfW9sP2LehUmyA8HuZ8F941VL0MooRFwZjuQnq9NqhLGBXJ2HC9x0dVnTSKuR6UMoF6RR8ARlLj0OUXmYkcDLL_BBFUnqCenpgYVJt2mBpRd363rc1b48dQ_OE7_8slPD0_wdu-mvqTvcPeVojkN_fixOkPveWIwZA5KvJlgX8"
                />
                <div className="absolute inset-0 bg-primary/60"></div>
                <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight">
                            Var med och forma framtidens bankupplevelse.
                        </h1>
                        <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
                            Vi är över 450 kollegor från 40 olika länder som arbetar tillsammans för att skapa smartare finansiella lösningar i Skandinavien.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl" href="#openings">
                                Se lediga tjänster
                            </a>
                            <a className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all" href="#culture">
                                Vår kultur
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="py-24 bg-white dark:bg-slate-900" id="culture">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Vår Kultur</span>
                                <h2 className="text-4xl font-display mb-6 dark:text-white">En arbetsplats där vi växer tillsammans</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    På Entercard tror vi på kraften i mångfald och samarbete. Vi strävar efter en miljö där varje röst räknas och där innovation föds ur olika perspektiv.
                                </p>
                                <div className="space-y-4">
                                    <CultureBenefit icon="diversity_3" title="Inkluderande miljö" text="Vi firar våra olikheter och främjar en kultur av tillhörighet." />
                                    <CultureBenefit icon="rocket_launch" title="Kontinuerligt lärande" text="Vi investerar i din personliga och professionella utveckling." />
                                    <CultureBenefit icon="balance" title="Work-life balance" text="Flexibilitet som låter dig prestera på topp både hemma och på jobbet." />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        alt="Team meeting"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyVzHExAQWosXJacTyANxZoj4J4yOIm3_sWZmutBzSXAo8cyH9u03s-mTYIYWQtbNma79EFRCefvllw7GmjF0q5onaFunyIu-8DbggmrV1Vb7G8qt8rLrstUVhuvywXWH5quTMhzSENXEr5WfzKzQ5KieB5JIBaWstWR-UhvM9gmtWo7dcqAy9EE2rhHuDzT5wqbX8V45-LuA5kt4kRjSi3WJrOfmvdJZhnOqhVtl4m2_CShrGKoXLvc3MkWvsKZ02vNFAjZgPPjY"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                                    <p className="text-4xl font-display text-white mb-1">40+</p>
                                    <p className="text-white/80 text-sm uppercase tracking-wider">Nationaliteter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50 dark:bg-slate-800/50" id="openings">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="text-4xl font-display mb-4 dark:text-white">Lediga tjänster</h2>
                                <p className="text-slate-600 dark:text-slate-400">Hitta din nästa utmaning hos oss.</p>
                            </div>
                            <div className="relative w-full md:w-96">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    className="w-full pl-12 pr-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Sök avdelning eller roll..."
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {jobs.map((job) => (
                                <div key={job.title} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between transition-all hover:shadow-lg cursor-pointer group">
                                    <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                                        <div>
                                            <h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                                            <div className="flex gap-4 mt-2 text-sm text-slate-500">
                                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">domain</span> {job.department}</span>
                                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {job.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                                        Ansök nu
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

const CultureBenefit = ({ icon, title, text }) => (
    <div className="flex gap-4">
        <div className="w-12 h-12 shrink-0 bg-accent/20 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
            <h4 className="font-bold dark:text-white">{title}</h4>
            <p className="text-slate-500 text-sm">{text}</p>
        </div>
    </div>
)

export default Careers;
