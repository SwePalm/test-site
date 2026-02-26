import React from 'react';

const Support = () => {
    const topics = [
        { icon: 'person', title: 'Mitt konto', text: 'Hantera dina inställningar, se saldo och ändra personuppgifter.', color: 'blue' },
        { icon: 'shield', title: 'Säkerhet', text: 'Spärra kort, bedrägerier och hur vi skyddar din data.', color: 'red' },
        { icon: 'payments', title: 'Betalningar', text: 'Frågor om fakturor, delbetalning och överföringar.', color: 'green' },
        { icon: 'credit_card', title: 'Kort', text: 'Beställ nytt kort, PIN-kod och användning utomlands.', color: 'indigo' },
    ];

    return (
        <>
            <header className="pt-40 pb-20 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-display text-slate-900 dark:text-white mb-6">Hur kan vi hjälpa dig?</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">Sök i våra vanligaste frågor eller välj en kategori nedan.</p>
                    <div className="relative max-w-2xl mx-auto">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-2xl">search</span>
                        <input
                            className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-800 border-none rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-2 focus:ring-primary text-lg"
                            placeholder="Sök efter svar (t.ex. 'spärra kort', 'faktura', 'PIN-kod')"
                            type="text"
                        />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-8 dark:text-white">Bläddra efter ämne</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {topics.map((topic) => (
                                <a key={topic.title} className="group p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition-all" href="#">
                                    <div className={`w-12 h-12 bg-${topic.color}-50 dark:bg-${topic.color}-900/20 rounded-xl flex items-center justify-center text-${topic.color}-600 dark:text-${topic.color}-400 mb-6`}>
                                        <span className="material-symbols-outlined">{topic.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{topic.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{topic.text}</p>
                                </a>
                            ))}
                        </div>

                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-8 dark:text-white">Populära frågor</h2>
                            <div className="space-y-4">
                                <FaqItem question="Hur aktiverar jag mitt nya kort?" answer="Du kan enkelt aktivera ditt kort genom att logga in i appen eller via våra onlinetjänster. När du gör ditt första köp med PIN-kod i en fysisk terminal aktiveras även funktionen för kontaktlösa betalningar." />
                                <FaqItem question="När kommer min faktura?" answer="Fakturan skickas normalt ut i mitten av varje månad med förfallodag sista vardagen i månaden. Du hittar alltid dina fakturor digitalt genom att logga in." />
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-6">
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-xl shadow-primary/20">
                            <h3 className="text-xl font-bold mb-4">Behöver du mer hjälp?</h3>
                            <p className="text-blue-100 mb-8 text-sm leading-relaxed">Våra rådgivare finns tillgängliga för att hjälpa dig med mer specifika ärenden.</p>
                            <button className="w-full bg-white text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-accent transition-colors mb-4">
                                <span className="material-symbols-outlined">chat_bubble</span>
                                Starta livechatt
                            </button>
                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                <span className="material-symbols-outlined">call</span>
                                <div>
                                    <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Ring oss</div>
                                    <div className="font-bold">08-123 456 00</div>
                                    <div className="text-xs text-blue-100">Vardagar 08:00 - 18:00</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold mb-6 dark:text-white">Skicka ett meddelande</h4>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Ämne</label>
                                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-primary">
                                        <option>Välj ärende</option>
                                        <option>Fakturafrågor</option>
                                        <option>Kortbeställning</option>
                                        <option>Övrigt</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">E-post</label>
                                    <input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-primary" placeholder="namn@exempel.se" type="email" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Meddelande</label>
                                    <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-primary" placeholder="Beskriv ditt ärende..." rows="4"></textarea>
                                </div>
                                <button className="w-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white font-bold py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                    Skicka e-post
                                </button>
                            </form>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
};

const FaqItem = ({ question, answer }) => (
    <details className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
            <span className="font-medium dark:text-white">{question}</span>
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
        </summary>
        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            {answer}
        </div>
    </details>
)

export default Support;
