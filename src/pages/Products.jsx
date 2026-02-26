import React from 'react';

const Products = () => {
    return (
        <>
            <div className="pt-20 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-8 overflow-x-auto no-scrollbar">
                    <a className="text-sm font-semibold text-primary dark:text-accent whitespace-nowrap" href="#kreditkort">Kreditkort</a>
                    <a className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent whitespace-nowrap" href="#privatlan">Privatlån</a>
                    <a className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent whitespace-nowrap" href="#betallosningar">Betallösningar</a>
                    <a className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent whitespace-nowrap" href="#partnerskap">För samarbetspartners</a>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-display text-slate-900 dark:text-white mb-6">Våra finansiella lösningar</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        Vi erbjuder ett brett urval av produkter utformade för att ge dig flexibilitet och trygghet i din vardagsekonomi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-accent">
                            <span className="material-symbols-outlined text-3xl">credit_card</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">Kreditkort</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Välj bland marknadens mest förmånliga kreditkort med försäkringar, cashback och global acceptans.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Inga årsavgifter tillgängliga
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Omfattande reseförsäkring
                            </li>
                        </ul>
                        <a className="inline-flex items-center text-primary dark:text-accent font-bold group-hover:gap-3 transition-all" href="#">
                            Läs Mer <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                        </a>
                    </div>

                    <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-accent">
                            <span className="material-symbols-outlined text-3xl">payments</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">Privatlån</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Flexibla lån för livets alla skeden. Ansök digitalt och få besked direkt med konkurrenskraftiga räntor.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Låna upp till 500 000 kr
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Signera med BankID
                            </li>
                        </ul>
                        <a className="inline-flex items-center text-primary dark:text-accent font-bold group-hover:gap-3 transition-all" href="#">
                            Läs Mer <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                        </a>
                    </div>

                    <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-accent">
                            <span className="material-symbols-outlined text-3xl">terminal</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">Betallösningar</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Moderna betallösningar för e-handel och fysisk handel som optimerar kassaflödet och kundupplevelsen.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Sömlös integration
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Realtidsanalys
                            </li>
                        </ul>
                        <a className="inline-flex items-center text-primary dark:text-accent font-bold group-hover:gap-3 transition-all" href="#">
                            Läs Mer <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>

                <section className="bg-slate-50 dark:bg-slate-900/80 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800" id="compare">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display mb-4 dark:text-white">Jämför våra kreditkort</h2>
                        <p className="text-slate-600 dark:text-slate-400">Hitta det kort som passar din livsstil bäst.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-800">
                                    <th className="py-6 font-semibold dark:text-white">Egenskaper</th>
                                    <th className="py-6 font-semibold dark:text-white px-4">Gold Card</th>
                                    <th className="py-6 font-semibold dark:text-white px-4">Platinum Elite</th>
                                    <th className="py-6 font-semibold dark:text-white px-4">Flex Card</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                                <tr>
                                    <td className="py-6 text-slate-600 dark:text-slate-400">Årsavgift</td>
                                    <td className="py-6 px-4 dark:text-white">0 kr första året</td>
                                    <td className="py-6 px-4 dark:text-white">1 495 kr</td>
                                    <td className="py-6 px-4 dark:text-white">0 kr</td>
                                </tr>
                                <tr>
                                    <td className="py-6 text-slate-600 dark:text-slate-400">Kreditgräns</td>
                                    <td className="py-6 px-4 dark:text-white">Upp till 100 000 kr</td>
                                    <td className="py-6 px-4 dark:text-white">Upp till 500 000 kr</td>
                                    <td className="py-6 px-4 dark:text-white">Upp till 50 000 kr</td>
                                </tr>
                                <tr>
                                    <td className="py-6 text-slate-600 dark:text-slate-400">Reseförsäkring</td>
                                    <td className="py-6 px-4"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="py-6 px-4"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="py-6 px-4"><span className="material-symbols-outlined text-slate-300">close</span></td>
                                </tr>
                                <tr>
                                    <td className="py-6 text-slate-600 dark:text-slate-400">Lounge-tillgång</td>
                                    <td className="py-6 px-4"><span className="material-symbols-outlined text-slate-300">close</span></td>
                                    <td className="py-6 px-4"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="py-6 px-4"><span className="material-symbols-outlined text-slate-300">close</span></td>
                                </tr>
                                <tr>
                                    <td className="py-6"></td>
                                    <td className="py-6 px-4">
                                        <button className="text-xs font-bold uppercase tracking-wider bg-primary text-white px-4 py-2 rounded-full">Ansök nu</button>
                                    </td>
                                    <td className="py-6 px-4">
                                        <button className="text-xs font-bold uppercase tracking-wider bg-primary text-white px-4 py-2 rounded-full">Ansök nu</button>
                                    </td>
                                    <td className="py-6 px-4">
                                        <button className="text-xs font-bold uppercase tracking-wider border border-primary text-primary px-4 py-2 rounded-full">Läs mer</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Products;
