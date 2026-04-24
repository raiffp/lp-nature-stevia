// ─── WhatsApp ────────────────────────────────────────────────────────────────
// SUBSTITUA pelo número real (formato: código do país + DDD + número)
export const WA_NUMBER = '5568992435350'

export const WA_MSGS = {
  default:  'Olá! Tenho interesse em distribuir a Stevia Dul-C.',
  parceiro: 'Quero saber mais sobre distribuir Stevia Dul-C.',
  proposta: 'Olá! Tenho interesse em distribuir Stevia Dul-C. Pode me enviar uma proposta?',
  inicio:   'Quero começar a distribuir Stevia Dul-C.',
  float:    'Olá! Tenho interesse em ser distribuidor da Stevia Dul-C.',
}

export const waUrl = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

// ─── Imagens placeholder ──────────────────────────────────────────────────────
// SUBSTITUA pelas imagens reais do produto
export const IMG_PRODUCT =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDxXN-V0JeQ76MEdBcN4A1G4opPwJJVddcJj9XbicedNyyE19z7JWlH_WmGpe63Vvm9eQ1r4cIb6ih35WE-1cjtC0ZshytOf9TWwEjCw9UlDVjJ-l2HQi1TPJEJYxwdg7-VJZxhBcpqTGa78lSUtKTbtRC0lIWDjX81A2de0b8zGenrmxYyEq6txSniZr7j3Nplef4iBzLAIYnujD-bRVrWhFCaGXPvSFIKyy4bADTRY1fM8sg6dcsbapXZyLCgRZJT60Ui3fFdlEoV'

export const IMG_FIELD =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBH13L4uUfMO3rLTIg1U_GqejiiaUj_ASDUT-xuGf-qAd1B_wpHb0mD5OUZoiWHevPfNbdthrrpWnnTZJSyAeMUpcxTKme8WDJ5jj8WmDPNv7w0W9mKr2Ebibot98z4VDR-qZuxJv18M_b0c2EaiNTFZyBA7SU8_K8Ksbs2am2-pVFmfpjjwWTyyFhXIvl4uyQevIohFvKqk1TZtQ_ZYLvysZGrQQt01Mc0KaJzPu2AFaI0SJRYwiiM_0-wNSTY8P6-9vSIAZ6HGhYT'

export const IMG_LAB = '/embalagem.jpeg'

// ─── Vídeo ────────────────────────────────────────────────────────────────────
// SUBSTITUA pelo ID real do vídeo no YouTube
// Exemplo: 'dQw4w9WgXcQ'
export const YOUTUBE_ID = null
