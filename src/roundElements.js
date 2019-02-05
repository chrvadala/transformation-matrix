export function roundElements (m) {
  const precision = 10000000000
  return {
    a: Math.round(m.a * precision) / precision,
    b: Math.round(m.b * precision) / precision,
    c: Math.round(m.c * precision) / precision,
    d: Math.round(m.d * precision) / precision,
    e: Math.round(m.e * precision) / precision,
    f: Math.round(m.f * precision) / precision
  }
}
