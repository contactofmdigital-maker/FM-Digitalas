# Baby's Maken — Build Partner Demo / LPP MAX Conversion

Demo B2B de una landing de conversión para campañas Meta Ads.

## Objetivo
Convertir tráfico frío de Meta Ads en conversaciones calificadas por WhatsApp, reduciendo fricción con catálogo visible, precio, medidas, zonas de entrega, proceso de compra y preguntas frecuentes.

## Brief de conversión
- Público: personas que buscan vanitys infantiles.
- Mercado: Guadalajara, Tonalá y Zapopan, México.
- Acción primaria: consultar disponibilidad por WhatsApp.
- Acción secundaria: explorar modelos.
- Estructura: anuncio → landing → modelo/precio/medidas → WhatsApp.
- No se inventan testimonios, descuentos, urgencia, stock ni promesas no confirmadas.
- Precios y medidas son editables en `app/page.tsx` dentro de `PRODUCTS`.

## Estándar LPP MAX aplicado
- Hero orientado a beneficio + catálogo + CTA.
- Catálogo completo visible sin interacción obligatoria.
- Precio y medidas por producto.
- Modal de detalle por producto.
- CTA de WhatsApp contextual por modelo.
- Zonas de entrega visibles.
- Proceso de compra en 3 pasos.
- FAQ para reducción de fricción.
- CTA final y botón flotante.
- Responsive mobile/tablet/desktop.
- Accesibilidad básica: focus states, labels, aria, touch targets.
- Imágenes optimizadas con `next/image`.
- Metadata, canonical, Open Graph, robots, sitemap, manifest y favicon.
- Eventos preparados para GA4/Meta: `view_catalog`, `view_product`, `click_whatsapp`, `click_product_whatsapp`.

## Datos de producción
Crear `.env.local`:
NEXT_PUBLIC_SITE_URL=https://TU-DOMINIO-REAL
NEXT_PUBLIC_WHATSAPP_NUMBER=521XXXXXXXXXX

No publicar con el número de prueba incluido en `lib/site.ts`.

## Validación
npm install
npm run build
npm start

## Antes de entregar a VOWA
- [ ] Confirmar precios reales.
- [ ] Confirmar medidas reales.
- [ ] Confirmar materiales/características que se quieran comunicar.
- [ ] Confirmar cobertura de entrega.
- [ ] Configurar WhatsApp real.
- [ ] Configurar URL final de demo.
- [ ] Verificar GA4/Meta Pixel si se utilizarán.
- [ ] Probar todos los CTAs en móvil y desktop.
- [ ] QA final LPP MAX.
- [ ] Generar Certificado de Calidad LPP MAX de Build Partner.
