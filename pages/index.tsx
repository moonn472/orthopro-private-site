
import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, intro, children }: any) => (
  <section id={id} className="scroll-mt-24 py-12 md:py-16">
    <div className="max-w-5xl mx-auto px-4">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </motion.h2>
      {intro && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 text-lg leading-relaxed text-gray-600">
          {intro}
        </motion.p>
      )}
      <div className="mt-6 space-y-6">{children}</div>
    </div>
  </section>
);

const Card = ({ title, children }: any) => (
  <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-white/70 backdrop-blur rounded-2xl shadow-sm border p-5">
    {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </motion.div>
);

const Pill = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{children}</span>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 text-neutral-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#accueil" className="font-semibold tracking-tight text-lg">Centre Orthopro</a>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#accueil" className="hover:underline">Accueil</a>
            <a href="#protheses" className="hover:underline">Prothèses</a>
            <a href="#prise-en-charge" className="hover:underline">Notre prise en charge</a>
            <a href="#technologies" className="hover:underline">Technologies</a>
            <a href="#esthetique" className="hover:underline">Esthétique</a>
            <a href="#essais" className="hover:underline">Essayer du matériel</a>
            <a href="#equipe" className="hover:underline">Qui sommes-nous</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#liens" className="hover:underline">Liens utiles</a>
          </nav>
          <a href="#rdv" className="hidden md:inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm">Prendre un RDV</a>
        </div>
      </header>

      <section id="accueil" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10" aria-hidden>
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-black/10" />
          <div className="absolute top-24 -left-24 h-96 w-96 rounded-full bg-black/5" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-semibold tracking-tight">
                La Technologie et l’expertise au service de l’humain
              </motion.h1>
              <p className="mt-4 text-lg text-gray-700">Prise en charge innovante, rapide et efficace.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#rdv" className="rounded-full bg-black text-white px-5 py-2 text-sm">Prendre un RDV</a>
                <a href="#questions" className="rounded-full border px-5 py-2 text-sm">Poser vos questions (ligne 18h–19h30)</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Adresse + itinéraire (carte)</Pill>
                <Pill>Horaires</Pill>
                <Pill>FR · EN · PT · AR · ES</Pill>
              </div>
            </div>
            <div className="md:pl-8">
              <div className="aspect-[4/3] w-full rounded-2xl border bg-white/50 grid place-content-center text-center p-6">
                <div>
                  <div className="text-sm uppercase tracking-widest">Visuel</div>
                  <div className="mt-1 text-sm text-gray-600">Photo de scan prothèse haute technologie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="protheses" title="Prothèses" intro="Nos emboîtures sur mesure, choix des technologies selon les besoins. Emboiture 3D (Vytruve, Ortho Access).">
        <div className="grid md:grid-cols-3 gap-5">
          <Card title="Nos emboîtures">
            <ul className="list-disc ml-5 space-y-1">
              <li>Souple / rigide</li>
              <li>Manchon, suspension</li>
              <li>Genou, pied</li>
              <li>Emboiture 3D Vytruve, Ortho Access</li>
            </ul>
          </Card>
          <Card title="Prothèse fémorale">
            <p>C-leg, Rheo, Orion, MPK</p>
          </Card>
          <Card title="Prothèse tibiale">
            <ul className="list-disc ml-5 space-y-1">
              <li>Systèmes : accr, harmony, dépressurisation</li>
              <li>DDH → Helix → MS → Enfant</li>
              <li>Prothèses particulières</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="prise-en-charge" title="Notre prise en charge" intro="Anamnèse, description des étapes, délais, livraison pluridisciplinaire.">
        <div className="grid md:grid-cols-3 gap-5">
          <Card title="Étapes">
            <ol className="list-decimal ml-5 space-y-1">
              <li>Évaluation & anamnèse</li>
              <li>Conception</li>
              <li>Fabrication</li>
              <li>Mise</li>
              <li>Suivi</li>
            </ol>
          </Card>
          <Card title="Rééducation">
            <p>Plateau technique adapté, kiné, ostéo, contact.</p>
          </Card>
          <Card title="Délais">
            <p>Délais communiqués et suivis, parcours coordonné.</p>
          </Card>
        </div>
      </Section>

      <Section id="technologies" title="Technologies et innovations" intro="Alignements personnalisés — Impression/Scan 3D : précision, réactivité, analyse, uniformisation. Prothèse de sport (partenariat LDJ).">
        <div className="grid md:grid-cols-3 gap-5">
          <Card title="Alignements personnalisés">
            <p>Optimisation biomécanique individualisée.</p>
          </Card>
          <Card title="Scan & impression 3D">
            <ul className="list-disc ml-5 space-y-1">
              <li>Précision</li>
              <li>Réactivité</li>
              <li>Analyse</li>
              <li>Uniformisation</li>
            </ul>
          </Card>
          <Card title="Prothèse de sport">
            <p>Partenariat LDJ — essais et réglages dédiés.</p>
          </Card>
        </div>
      </Section>

      <Section id="esthetique" title="Esthétique" intro="Solutions esthétiques et de vie quotidienne.">
        <div className="grid md:grid-cols-3 gap-5">
          <Card title="Prothèse de bain">
            <p>Aqua Leg, solutions pour nager.</p>
          </Card>
          <Card title="Impression hydrographique">
            <p>Finitions et textures personnalisées.</p>
          </Card>
          <Card title="Customisation & Cover">
            <p>Personnalisation — style & protection.</p>
          </Card>
        </div>
      </Section>

      <Section id="essais" title="Essayer du matériel prothétique" intro="Essayez genou / pied / autres. Remplissez le formulaire ci-dessous.">
        <Card>
          <form className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Nom</label>
              <input type="text" className="w-full rounded-xl border px-3 py-2" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm mb-1">Année d’amputation</label>
              <input type="text" className="w-full rounded-xl border px-3 py-2" placeholder="2021" />
            </div>
            <div>
              <label className="block text-sm mb-1">Type d’amputation</label>
              <input type="text" className="w-full rounded-xl border px-3 py-2" placeholder="Tibiale, fémorale…" />
            </div>
            <div>
              <label className="block text-sm mb-1">Matériel actuel</label>
              <input type="text" className="w-full rounded-xl border px-3 py-2" placeholder="Genou/pied, marque…" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Commentaires</label>
              <textarea className="w-full rounded-xl border px-3 py-2" rows={4} placeholder="Votre demande, contexte, objectifs" />
            </div>
            <div className="md:col-span-2">
              <button type="button" className="rounded-full bg-black text-white px-5 py-2 text-sm">Envoyer la demande d’essai</button>
            </div>
          </form>
        </Card>
      </Section>

      <Section id="equipe" title="Qui sommes-nous">
        <Card>
          <p>Présentation de l’équipe, valeurs et engagements.</p>
        </Card>
      </Section>

      <Section id="contact" title="Nous contacter" intro="Formulaire de contact — upload d’ordonnance (privé, à activer au lancement).">
        <Card>
          <form className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Nom</label>
              <input type="text" className="w-full rounded-xl border px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-xl border px-3 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Message</label>
              <textarea className="w-full rounded-xl border px-3 py-2" rows={4} />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="button" className="rounded-full bg-black text-white px-5 py-2 text-sm">Envoyer</button>
              <span className="text-sm text-gray-500">⛔ Upload sécurisé désactivé en version privée</span>
            </div>
          </form>
        </Card>
      </Section>

      <Section id="liens" title="Liens utiles">
        <div className="grid md:grid-cols-2 gap-5">
          <Card title="Associations & ressources">
            <ul className="list-disc ml-5 space-y-1">
              <li>ADEPA</li>
              <li>UFOP</li>
              <li>Aides démarches administratives (auto-école, MDPH, sport)</li>
              <li>Adaptation domicile</li>
            </ul>
          </Card>
          <Card title="Partenaires">
            <ul className="list-disc ml-5 space-y-1">
              <li>Rodin</li>
              <li>Vytruve</li>
              <li>UNYQ</li>
              <li>Ortho Access</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="rdv" title="Prendre un RDV">
        <Card>
          <p>Module de prise de rendez-vous (désactivé en version privée). Vous pouvez préciser l’outil souhaité (Doctolib, Calendly, ou formulaire interne).</p>
        </Card>
      </Section>

      <Section id="questions" title="Poser vos questions (ligne 18h–19h30)">
        <Card>
          <p>Bloc d’information : numéro dédié + disponibilité 18h–19h30.</p>
        </Card>
      </Section>

      <footer className="border-t mt-12 py-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div>© {new Date().getFullYear()} Centre Orthopro — Maquette privée</div>
            <div className="text-gray-500">Mentions légales · RGPD · Non indexé (noindex)</div>
          </div>
          <div className="flex gap-3">
            <Pill>FR</Pill>
            <Pill>EN</Pill>
            <Pill>PT</Pill>
            <Pill>AR</Pill>
            <Pill>ES</Pill>
          </div>
        </div>
      </footer>
    </div>
  );
}
