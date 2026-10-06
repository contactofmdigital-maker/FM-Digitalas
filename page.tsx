'use client';

import Image from 'next/image';
import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../lib/site';

// EDIT ONLY THESE VALUES WHEN THE CLIENT CONFIRMS PRICES AND MEASURES.
const PRODUCTS = [
  { name: 'Vanity Butterfly Duo', slug: 'butterfly-duo', image: '/images/butterfly-duo.webp', detail: 'Diseño mariposa · 2 cajones', price: '$1,890 MXN', dimensions: '1.30Mt Altura x 60Cm Largo x 30Cm Fondo' },
  { name: 'Vanity Mimi', slug: 'mimi', image: '/images/mimi.webp', detail: 'Diseño compacto · 1 cajón', price: '$1,690 MXN', dimensions: '1.30Mt Altura x 60Cm Largo x 30Cm Fondo' },
  { name: 'Vanity Princess', slug: 'princess', image: '/images/princess.webp', detail: 'Diseño princesa · 1 cajón', price: '$1,690 MXN', dimensions: '1.20Mt Altura x 60Cm Largo x 30Cm Fondo' },
  { name: 'Vanity Coquet', slug: 'coquet', image: '/images/coquet.webp', detail: 'Diseño mariposa · cajón amplio', price: '$1,690 MXN', dimensions: '1.30Mt Altura x 60Cm Largo x 30Cm Fondo' },
  { name: 'Vanity Hello', slug: 'hello', image: '/images/hello.webp', detail: 'Tocador + 1 Cajón · silla incluida', price: '$1,690 MXN', dimensions: '1.10Mt Altura x 60Cm Largo x 30Cm Fondo' },
  { name: 'Vanity Butterfly', slug: 'butterfly', image: '/images/butterfly.webp', detail: 'Colección mariposa · compartimentos', price: '$1,890 MXN', dimensions: '1.30Mt Altura x 60Cm Largo x 30Cm Fondo' },
  { name: 'Tocador Escritorio', slug: 'escritorio', image: '/images/escritorio.webp', detail: 'Diseño escritorio · espacio amplio', price: '$790 MXN', dimensions: '1Mt Altura x 60Cm Largo x 30Cm Fondo' },
  { name: 'Vanity Encanto', slug: 'encanto', image: '/images/encanto.webp', detail: 'Diseño completo · 5 cajones', price: '$2,390 MXN', dimensions: '1.40Mt Altura x 80Cm Largo x 30Cm Fondo' },
  { name: 'Vanity Barbie', slug: 'barbie', image: '/images/barbie.webp', detail: 'Diseño clásico · 5 cajones', price: '$2,690 MXN', dimensions: '1.40Mt Altura x 80Cm Largo x 30Cm Fondo' },
];

const WA = WHATSAPP_NUMBER;

function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void };
  w.gtag?.('event', event, params);
  w.fbq?.('trackCustom', event, params);
}

function whatsapp(model?: string) {
  const message = model
    ? `Hola Baby's Maken 💗 Me encantó el ${model} y quiero comprarlo. ¿Me ayudan a realizar mi pedido?`
    : `Hola Baby's Maken 💗 Vi sus vanitys y quiero realizar mi pedido. ¿Me ayudan con la compra?`;
  return `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openProduct = (index: number) => {
    track('view_product', { product: PRODUCTS[index].name });
    setSelected(index);
  };

  return (
    <main>
      <div className="topbar">
        <div className="container topbarInner">
          <span>✨ Colección de vanitys infantiles</span>
          <span>Envíos a Todo México </span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="Baby's Maken inicio">
            <Image src="/images/logo.webp" alt="Baby's Maken" width={68} height={68} priority />
          </a>
          <nav className="desktopNav" aria-label="Navegación principal">
            <a href="#catalogo">Modelos</a>
            <a href="#como-comprar">Cómo comprar</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a className="navCta" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'header' })} target="_blank" rel="noreferrer">💬 WhatsApp</a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="heroEyebrow"><span>COLECCIÓN 2026</span><b>9 MODELOS</b></div>
            <h1>Un espacio hecho para <em>ella.</em></h1>
            <p className="heroLead">
              Descubre vanitys infantiles que combinan diseño, funcionalidad y personalidad para crear un rincón especial en casa.
            </p>

            <div className="heroOffer">
              <div><strong>Precios visibles</strong><span>Elige tu modelo y revisa medidas antes de escribirnos.</span></div>
              <div><strong>Entrega local</strong><span>Guadalajara · Tonalá · Zapopan</span></div>
            </div>

            <div className="heroActions">
              <a className="btn btnPrimary" href="#catalogo" onClick={() => track('view_catalog', { location: 'hero' })}>✨ Ver modelos y precios</a>
              <a className="btn btnSecondary" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'hero' })} target="_blank" rel="noreferrer">💬 Hablar por WhatsApp</a>
            </div>

            <div className="heroTrust">
              <span>✓ 9 diseños</span><span>✓ Medidas por modelo</span><span>✓ Atención directa</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroGlow" />
            <div className="catalogFrame">
              <Image src="/images/catalogo.webp" alt="Colección de 9 vanitys infantiles Baby's Maken" fill priority sizes="(max-width: 900px) 94vw, 53vw" />
            </div>
            <div className="floatingBadge badgeOne">💗 9 diseños</div>
          </div>
        </div>
      </section>

      <section className="quickProof" aria-label="Beneficios de compra">
        <div className="container quickProofGrid">
          <div><b>01</b><strong>Elige tu diseño</strong><span>Compara los 9 modelos.</span></div>
          <div><b>02</b><strong>Revisa precio y medidas</strong><span>Información clara antes de consultar.</span></div>
          <div><b>03</b><strong>Confirma por WhatsApp</strong><span>Disponibilidad y entrega directa.</span></div>
        </div>
      </section>

      <section id="catalogo" className="catalogSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="kicker">CATÁLOGO</div>
              <h2>Encuentra su favorito.</h2>
              <p>Precio y medidas visibles para que puedas comparar antes de escribir.</p>
            </div>
            <a className="catalogHeadCta" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'catalog' })} target="_blank" rel="noreferrer">💬 Consultar disponibilidad</a>
          </div>

          <div className="productGrid">
            {PRODUCTS.map((p, i) => (
              <article className="productCard" key={p.slug}>
                <button className="imageButton" onClick={() => openProduct(i)} aria-label={`Ver detalles de ${p.name}`}>
                  <Image src={p.image} alt={`${p.name} Baby's Maken`} fill sizes="(max-width: 600px) 46vw, (max-width: 1000px) 30vw, 31vw" />
                  <span className="viewPill">Ver detalles</span>
                </button>
                <div className="productInfo">
                  <div className="productTitle"><span className="number">0{i + 1}</span><h3>{p.name}</h3></div>
                  <p>{p.detail}</p>
                  <div className="productMeta">
                    <strong>{p.price}</strong>
                    <span>📏 {p.dimensions}</span>
                  </div>
                  <button onClick={() => openProduct(i)} className="detailLink">Ver modelo <span>→</span></button>
                </div>
              </article>
            ))}
          </div>

          <div className="catalogBottomCta">
            <div><strong>¿Ya elegiste un modelo?</strong><span>Escríbenos con el nombre del vanity para consultar disponibilidad.</span></div>
            <a className="btn btnPrimary" href={whatsapp()} onClick={() => track('click_catalog_bottom')} target="_blank" rel="noreferrer">💬 Consultar ahora</a>
          </div>
        </div>
      </section>

      <section className="delivery">
        <div className="container deliveryGrid">
          <div>
            <div className="kicker">COMPRA LOCAL</div>
            <h2>Tu pedido, claro desde el primer contacto.</h2>
            <p>Antes de confirmar te ayudamos a revisar el modelo, medidas, precio y disponibilidad para tu zona.</p>
          </div>
          <div className="deliveryCard">
            <span>📍 Zonas de entrega</span>
            <strong> Entregamos a todo México </strong>
            <small>Consulta disponibilidad de entrega para tu ubicación.</small>
            <a className="btn btnPrimary" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'delivery' })} target="_blank" rel="noreferrer">Consultar entrega</a>
          </div>
        </div>
      </section>

      <section id="como-comprar" className="howSection">
        <div className="container">
          <div className="sectionCenter"><div className="kicker">CÓMO COMPRAR</div><h2>Tan fácil como elegir su favorito.</h2></div>
          <div className="steps">
            <div><span>01</span><h3>Elige</h3><p>Revisa los modelos y elige el que más te guste.</p></div>
            <div><span>02</span><h3>Consulta</h3><p>Envíanos el nombre del modelo por WhatsApp.</p></div>
            <div><span>03</span><h3>Confirma</h3><p>Revisamos disponibilidad y detalles de entrega contigo.</p></div>
          </div>
        </div>
      </section>

      <section id="preguntas" className="faqSection">
        <div className="container faqGrid">
          <div><div className="kicker">PREGUNTAS FRECUENTES</div><h2>Lo importante, antes de comprar.</h2><p>Si todavía tienes una duda, escríbenos y te ayudamos directamente.</p><a className="btn btnPrimary" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'faq' })} target="_blank" rel="noreferrer">💬 Preguntar por WhatsApp</a></div>
          <div className="faqList">
            {[
              ['¿Dónde realizan entregas?', 'Actualmente puedes consultar disponibilidad para Guadalajara, Tonalá y Zapopan.'],
              ['¿Puedo consultar medidas antes de comprar?', 'Sí. Puedes consultar las medidas de cada modelo directamente por WhatsApp antes de realizar tu compra.'],
              ['¿El precio mostrado es el precio del modelo?', 'Sí. El precio que aparece en cada tarjeta corresponde al modelo indicado.'],
              ['¿Cómo confirmo disponibilidad?', 'Escríbenos indicando el nombre del vanity que te interesa y te ayudaremos a confirmar disponibilidad y entrega.'],
            ].map(([q, a], i) => (
              <div className={`faqItem ${openFaq === i ? 'open' : ''}`} key={q}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><b>{openFaq === i ? '−' : '+'}</b></button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container finalBox">
          <div className="sparkles">✦　♡　✦</div>
          <div className="kicker">BABY'S MAKEN</div>
          <h2>¿Cuál será su favorito?</h2>
          <p>Elige un modelo y escríbenos para confirmar disponibilidad y entrega.</p>
          <div className="finalActions"><a className="btn btnPrimary" href="#catalogo">✨ Ver modelos</a><a className="btn btnSecondary" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'final' })} target="_blank" rel="noreferrer">💬 WhatsApp</a></div>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <Image src="/images/logo.webp" alt="Baby's Maken" width={58} height={58} />
          <div><strong>Baby's Maken</strong><span>Vanitys infantiles · Entregas a todo México </span></div>
          <a href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'footer' })} target="_blank" rel="noreferrer">WhatsApp →</a>
        </div>
      </footer>

      <a className="floatingWhatsApp" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'floating' })} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">💬 <span>WhatsApp</span></a>

      {selected !== null && (
        <div className="modal" onClick={() => setSelected(null)} role="dialog" aria-modal="true" aria-label={`Detalles de ${PRODUCTS[selected].name}`}>
          <div className="modalBox" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)} aria-label="Cerrar">×</button>
            <div className="modalVisual"><Image src={PRODUCTS[selected].image} alt={PRODUCTS[selected].name} fill sizes="(max-width: 650px) 100vw, 55vw" /></div>
            <div className="modalCopy">
              <div className="kicker">MODELO 0{selected + 1}</div>
              <h3>{PRODUCTS[selected].name}</h3>
              <p>{PRODUCTS[selected].detail}</p>
              <div className="modalMeta"><strong>{PRODUCTS[selected].price}</strong><span>📏 {PRODUCTS[selected].dimensions}</span></div>
              <p className="modalText">¿Te interesa este modelo? Escríbenos para confirmar disponibilidad y entrega.</p>
              <a className="btn btnPrimary" href={whatsapp(PRODUCTS[selected].name)} onClick={() => track('click_product_whatsapp', { product: PRODUCTS[selected].name })} target="_blank" rel="noreferrer">💬 Consultar este modelo</a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
