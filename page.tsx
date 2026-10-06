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
            <div><strong>¿Ya elegiste un modelo?</strong><span>Escríbenos con el nombre del vanity para realizar tu pedido.</span></div>
            <a className="btn btnPrimary" href={whatsapp()} onClick={() => track('click_catalog_bottom')} target="_blank" rel="noreferrer">💗 Comprar por WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="delivery">
        <div className="container deliveryGrid">
          <div>
            <div className="kicker">ENVÍOS A TODO MÉXICO</div>
            <h2>Tu pedido, fácil desde el primer contacto.</h2>
            <p>Elige tu modelo, revisa precio y medidas y escríbenos para realizar tu pedido.</p>
          </div>
          <div className="deliveryCard">
            <span>🚚 Envíos nacionales</span>
            <strong> Envíos a todo México </strong>
            <small>Consulta las opciones de envío para tu ciudad.</small>
            <a className="btn btnPrimary" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'delivery' })} target="_blank" rel="noreferrer">💗 Comprar por WhatsApp</a>
          </div>
        </div>
      </section>

      <section id="como-comprar" className="howSection">
        <div className="container">
          <div className="sectionCenter"><div className="kicker">CÓMO COMPRAR</div><h2>Tan fácil como elegir su favorito.</h2></div>
          <div className="steps">
            <div><span>01</span><h3>Elige</h3><p>Revisa los modelos y elige el que más te guste.</p></div>
            <div><span>02</span><h3>Compra</h3><p>Envíanos el nombre del modelo por WhatsApp.</p></div>
            <div><span>03</span><h3>Confirma</h3><p>Completamos contigo los detalles de tu pedido y envío.</p></div>
          </div>
        </div>
      </section>

      <section id="preguntas" className="faqSection">
        <div className="container faqGrid">
          <div><div className="kicker">PREGUNTAS FRECUENTES</div><h2>Lo importante, antes de comprar.</h2><p>Si todavía tienes una duda, escríbenos y te ayudamos directamente.</p><a className="btn btnPrimary" href={whatsapp()} onClick={() => track('click_whatsapp', { location: 'faq' })} target="_blank" rel="noreferrer">💬 Preguntar por WhatsApp</a></div>
          <div className="faqList">
            {[
              ['¿Dónde realizan entregas?', 'Realizamos envíos a todo México. Escríbenos para conocer las opciones de envío disponibles para tu ciudad.'],
              ['¿Puedo consultar medidas antes de comprar?', 'Sí. Las medidas aparecen en cada modelo de la página para que puedas comparar antes de comprar.'],
              ['¿El precio mostrado es el precio del modelo?', 'Sí. El precio que aparece en cada tarjeta corresponde al modelo indicado.'],
              ['¿Cómo realizo mi pedido?', 'Elige tu modelo y escríbenos por WhatsApp para comenzar tu pedido y coordinar el envío.'],
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
          <p>Elige un modelo y escríbenos por WhatsApp para realizar tu pedido.</p>
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
              <p className="modalText">¿Te encantó este modelo? Escríbenos por WhatsApp para realizar tu pedido y coordinar el envío.</p>
              <a className="btn btnPrimary" href={whatsapp(PRODUCTS[selected].name)} onClick={() => track('click_product_whatsapp', { product: PRODUCTS[selected].name })} target="_blank" rel="noreferrer">💗 Comprar este modelo</a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
