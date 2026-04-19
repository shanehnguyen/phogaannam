// Direction B — Ba Thế Hệ (Three Generations)
// Bolder, high-contrast. Cream-on-deep-green. Editorial slam cuts.
// Calligraphic brush motifs, circular seals, big Vietnamese display type.

const BTH_CREAM = '#f3e7cf';
const BTH_CREAM_DEEP = '#ead9b8';
const BTH_GREEN = '#1f3d2b';
const BTH_GREEN_DEEP = '#0b1710';
const BTH_GOLD = '#c89033';
const BTH_GOLD_SOFT = '#d9ad5f';
const BTH_CLAY = '#8a4f2f';
const BTH_INK = '#0b1710';

const B_DISPLAY = '"Playfair Display", Georgia, serif';
const B_SANS = '"Be Vietnam Pro", system-ui, sans-serif';
const B_SCRIPT = '"Caveat", cursive';
const B_MONO = '"JetBrains Mono", ui-monospace, monospace';

function BGrain({ opacity = 0.1, dark = false }) {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity, mixBlendMode: dark ? 'overlay' : 'multiply',
      backgroundImage:
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
    }}/>
  );
}

function BPlaceholder({ label, tone = 'cream' }) {
  const colors = tone === 'green'
    ? { a: '#22402d', b: '#16291d', fg: 'rgba(243,231,207,0.5)' }
    : tone === 'gold'
    ? { a: '#d9ad5f', b: '#c89033', fg: 'rgba(11,23,16,0.55)' }
    : tone === 'dark'
    ? { a: '#142319', b: '#0b1710', fg: 'rgba(217,173,95,0.55)' }
    : { a: BTH_CREAM_DEEP, b: '#ddc7a0', fg: 'rgba(11,23,16,0.45)' };
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `repeating-linear-gradient(135deg, ${colors.a} 0 14px, ${colors.b} 14px 28px)`,
      color: colors.fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: B_MONO, fontSize: 11,
      letterSpacing: '0.32em', textTransform: 'uppercase',
      textAlign: 'center', padding: '12px 18px',
    }}>{label}</div>
  );
}

// Circular seal — Chinese/Vietnamese chop-style
function Seal({ size = 120, text = 'AN NAM', color = BTH_GOLD }) {
  const r = size / 2 - 6;
  const circlePath = `M ${size/2},${size/2} m -${r},0 a ${r},${r} 0 1,1 ${r*2},0 a ${r},${r} 0 1,1 -${r*2},0`;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }} aria-hidden>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="2" />
      <circle cx={size/2} cy={size/2} r={r - 8} fill="none" stroke={color} strokeWidth="0.8" />
      <defs>
        <path id={`sealpath-${size}-${text}`} d={circlePath} />
      </defs>
      <text fontFamily={B_DISPLAY} fontSize={size * 0.11} fill={color} letterSpacing="8" fontWeight="600">
        <textPath href={`#sealpath-${size}-${text}`} startOffset="0%">
          {text} · PHỞ GÀ · EST 1968 · SAN JOSE ·
        </textPath>
      </text>
      <text x={size/2} y={size/2 + size*0.06} textAnchor="middle"
        fontFamily={B_DISPLAY} fontStyle="italic" fontWeight="500"
        fontSize={size * 0.26} fill={color}>
        an nam
      </text>
    </svg>
  );
}

// Calligraphy brush stroke — crude but evocative
function Brush({ width = 600, height = 80, color = BTH_GOLD, progress = 1 }) {
  const d = `M 8 ${height*0.7} C ${width*0.22} ${height*0.2}, ${width*0.42} ${height*0.95}, ${width*0.62} ${height*0.45} S ${width*0.88} ${height*0.85}, ${width - 12} ${height*0.4}`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: 'block' }} aria-hidden>
      <path d={d} fill="none" stroke={color} strokeWidth={height*0.12} strokeLinecap="round"
        strokeDasharray="2000" strokeDashoffset={2000 * (1 - progress)} style={{ opacity: 0.85 }}/>
    </svg>
  );
}

// Typed text (reuse style)
function BTyped({ text, delay = 0, speed = 0.03, style }) {
  const { localTime } = window.useSprite();
  const t = Math.max(0, localTime - delay);
  const count = Math.min(text.length, Math.floor(t / speed));
  return <span style={style}>{text.slice(0, count)}</span>;
}

// Scene 1 — Chop-slam opener: green field, seal stamps, title crashes in
function BthScene1() {
  const { localTime, duration } = window.useSprite();
  const op = (s, e, ease) => window.animate({ from: 0, to: 1, start: s, end: e, ease: ease || window.Easing.easeOutCubic })(localTime);

  // Title slam: overshoots then settles
  const slamScale = window.interpolate(
    [0, 0.35, 0.55, 0.85, 1],
    [1.8, 1.25, 1.05, 0.98, 1],
    window.Easing.easeOutCubic
  )(Math.min(1, localTime / 1.4));
  const slamOp = Math.min(1, localTime / 0.25);

  const brushP = op(0.5, 1.4);
  const sealR = op(1.0, 1.7);
  const vnOp = op(1.6, 2.2);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, ${BTH_GREEN_DEEP} 0%, ${BTH_GREEN} 100%)`,
      color: BTH_CREAM, overflow: 'hidden',
    }}>
      <BGrain opacity={0.14} dark />

      {/* Horizontal ornament rail, top */}
      <div style={{
        position: 'absolute', top: 80, left: 120, right: 120,
        display: 'flex', alignItems: 'center', gap: 14,
        fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.38em',
        color: `${BTH_GOLD_SOFT}`,
        opacity: op(0.2, 0.8),
        textTransform: 'uppercase',
      }}>
        <span>◆</span>
        <span>Phở Gà An Nam</span>
        <span style={{ flex: 1, height: 1, background: `${BTH_GOLD_SOFT}50` }}/>
        <span>Tập 01 — Episode 01</span>
        <span style={{ flex: 1, height: 1, background: `${BTH_GOLD_SOFT}50` }}/>
        <span>San Jose, CA</span>
        <span>◆</span>
      </div>

      {/* Main slam title */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: `translate(-50%, -50%) scale(${slamScale})`,
        transformOrigin: 'center',
        textAlign: 'center',
        opacity: slamOp,
      }}>
        <div style={{
          fontFamily: B_DISPLAY, fontWeight: 700,
          fontSize: 260, lineHeight: 0.85,
          color: BTH_CREAM, letterSpacing: '-0.035em',
        }}>
          Ba Thế
        </div>
        <div style={{
          fontFamily: B_DISPLAY, fontWeight: 400, fontStyle: 'italic',
          fontSize: 260, lineHeight: 0.85,
          color: BTH_GOLD_SOFT, letterSpacing: '-0.03em',
        }}>
          Hệ.
        </div>
      </div>

      {/* Brush stroke under title */}
      <div style={{
        position: 'absolute', left: '50%', bottom: 260,
        transform: 'translateX(-50%)',
      }}>
        <Brush width={740} height={70} color={BTH_GOLD} progress={brushP} />
      </div>

      {/* English subtitle */}
      <div style={{
        position: 'absolute', left: '50%', bottom: 180,
        transform: 'translateX(-50%)',
        fontFamily: B_SANS, fontSize: 20, fontWeight: 400,
        letterSpacing: '0.48em', textTransform: 'uppercase',
        color: `${BTH_CREAM}cc`,
        opacity: vnOp,
      }}>
        Three Generations
      </div>

      {/* Chop seal */}
      <div style={{
        position: 'absolute', right: 140, top: 220,
        opacity: sealR,
        transform: `rotate(${-8 + (1 - sealR) * 18}deg) scale(${0.8 + sealR * 0.2})`,
      }}>
        <Seal size={160} color={BTH_GOLD_SOFT} />
      </div>

      {/* BL credit */}
      <div style={{
        position: 'absolute', left: 120, bottom: 80,
        fontFamily: B_MONO, fontSize: 10, letterSpacing: '0.3em',
        color: `${BTH_CREAM}80`,
        opacity: op(1.8, 2.4),
      }}>
        [ AN·NAM / 1968 — 2026 ]
      </div>
    </div>
  );
}

// Scene 2 — Full-bleed image with typographic overlay (documentary feel)
function BthScene2() {
  const { localTime, duration } = window.useSprite();
  const op = (s, e) => window.animate({ from: 0, to: 1, start: s, end: e })(localTime);
  const zoom = 1.15 - window.interpolate([0, 1], [0, 0.15], window.Easing.easeOutCubic)(localTime / duration);

  return (
    <div style={{ position: 'absolute', inset: 0, background: BTH_GREEN_DEEP, overflow: 'hidden' }}>
      {/* backdrop image */}
      <div style={{
        position: 'absolute', inset: -40,
        transform: `scale(${zoom})`,
        opacity: op(0, 0.9),
      }}>
        <BPlaceholder label="overhead — simmering broth pot" tone="dark" />
      </div>
      {/* dark gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(90deg, ${BTH_GREEN_DEEP}f0 0%, ${BTH_GREEN_DEEP}60 50%, ${BTH_GREEN_DEEP}e0 100%)`,
      }}/>
      <BGrain opacity={0.12} dark />

      {/* Side label */}
      <div style={{
        position: 'absolute', left: 70, top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'center',
        fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.5em',
        color: BTH_GOLD_SOFT,
        opacity: op(0.4, 1.0),
      }}>
        01 / NƯỚC DÙNG — THE BROTH
      </div>

      {/* Big quote type, left-aligned */}
      <div style={{
        position: 'absolute', left: 180, top: 180, right: 900,
      }}>
        <div style={{
          fontFamily: B_DISPLAY, fontStyle: 'italic', fontSize: 48,
          color: BTH_GOLD_SOFT, lineHeight: 1, marginBottom: 24,
          opacity: op(0.2, 0.8),
        }}>
          &ldquo;
        </div>
        <div style={{
          fontFamily: B_DISPLAY, fontWeight: 500, fontSize: 92,
          lineHeight: 1.0, color: BTH_CREAM, letterSpacing: '-0.02em',
        }}>
          <div style={{ opacity: op(0.3, 1.0), transform: `translateY(${(1-op(0.3,1.0))*14}px)` }}>
            Fourteen
          </div>
          <div style={{ opacity: op(0.7, 1.4), transform: `translateY(${(1-op(0.7,1.4))*14}px)`, fontStyle: 'italic', color: BTH_GOLD_SOFT }}>
            hours.
          </div>
          <div style={{ opacity: op(1.2, 1.9), transform: `translateY(${(1-op(1.2,1.9))*14}px)` }}>
            A quiet
          </div>
          <div style={{ opacity: op(1.6, 2.3), transform: `translateY(${(1-op(1.6,2.3))*14}px)` }}>
            stove.
          </div>
        </div>
      </div>

      {/* Right — ingredient terminal */}
      <div style={{
        position: 'absolute', right: 140, top: 200, width: 480,
        border: `1px solid ${BTH_GOLD_SOFT}55`,
        borderRadius: 4,
        padding: '28px 32px',
        background: `${BTH_GREEN_DEEP}80`,
        backdropFilter: 'blur(6px)',
        fontFamily: B_MONO, fontSize: 15,
        color: `${BTH_CREAM}dd`,
        opacity: op(0.8, 1.6),
      }}>
        <div style={{
          fontSize: 10, letterSpacing: '0.36em', color: BTH_GOLD_SOFT,
          marginBottom: 20, textTransform: 'uppercase',
        }}>
          recipe.log — 04:00
        </div>
        {[
          { at: 1.0, t: '04:00  free-range chicken, whole' },
          { at: 1.4, t: '04:15  ginger, charred over flame' },
          { at: 1.8, t: '04:30  star anise, cloves, cassia' },
          { at: 2.2, t: '05:00  yellow onion, bruised' },
          { at: 2.6, t: '07:00  skim by hand. do not rush.' },
          { at: 3.0, t: '18:00  the broth is ready.' },
        ].map((row, i) => (
          <div key={i} style={{
            padding: '8px 0',
            opacity: op(row.at, row.at + 0.5),
            color: i === 5 ? BTH_GOLD_SOFT : `${BTH_CREAM}cc`,
            fontWeight: i === 5 ? 700 : 400,
          }}>
            <BTyped text={row.t} delay={row.at} speed={0.022} />
          </div>
        ))}
      </div>

      {/* BR meta */}
      <div style={{
        position: 'absolute', left: 180, bottom: 120,
        fontFamily: B_SCRIPT, fontSize: 40, color: BTH_GOLD_SOFT,
        opacity: op(2.8, 3.4),
      }}>
        — skim by hand, never rushed.
      </div>
    </div>
  );
}

// Scene 3 — Diptych: specialty dish + big number
function BthScene3() {
  const { localTime, duration } = window.useSprite();
  const op = (s, e) => window.animate({ from: 0, to: 1, start: s, end: e })(localTime);

  // Camera slowly drifts left to right
  const shift = window.interpolate([0, 1], [-30, 0], window.Easing.easeOutCubic)(localTime / duration);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: BTH_CREAM,
      display: 'grid', gridTemplateColumns: '1fr 1fr',
    }}>
      <BGrain opacity={0.08} />

      {/* Left — type */}
      <div style={{
        position: 'relative', padding: '140px 80px 120px 140px',
        background: BTH_CREAM,
        transform: `translateX(${shift}px)`,
      }}>
        <div style={{
          fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.38em',
          textTransform: 'uppercase', color: BTH_CLAY,
          opacity: op(0, 0.6), marginBottom: 32,
        }}>
          02 / Đặc sản — Specialty
        </div>

        <div style={{
          fontFamily: B_DISPLAY, fontSize: 220, fontWeight: 500,
          color: BTH_GREEN_DEEP, lineHeight: 0.85, letterSpacing: '-0.04em',
          opacity: op(0.2, 1.0),
          transform: `translateY(${(1 - op(0.2,1.0))*20}px)`,
        }}>
          Huế
        </div>
        <div style={{
          fontFamily: B_DISPLAY, fontStyle: 'italic', fontWeight: 400,
          fontSize: 72, color: BTH_CLAY, letterSpacing: '-0.02em',
          marginTop: 8,
          opacity: op(0.6, 1.3),
        }}>
          Bún Bò, the imperial soup
        </div>

        <div style={{ marginTop: 40, opacity: op(1.0, 1.6) }}>
          <Brush width={420} height={50} color={BTH_CLAY} progress={op(1.0, 1.7)} />
        </div>

        <div style={{
          marginTop: 38, maxWidth: 520,
          fontFamily: B_SANS, fontSize: 20, lineHeight: 1.55,
          color: `${BTH_GREEN_DEEP}c0`,
          opacity: op(1.4, 2.0),
        }}>
          Lemongrass. Fermented shrimp. A ribbon of chili oil. Thick rice noodles, pork knuckle, beef shank. Bolder on the tongue, heavier on memory.
        </div>

        <div style={{
          marginTop: 44, display: 'flex', alignItems: 'baseline', gap: 22,
          opacity: op(2.0, 2.6),
        }}>
          <span style={{
            fontFamily: B_DISPLAY, fontSize: 84, fontStyle: 'italic', color: BTH_GOLD,
          }}>$18</span>
          <span style={{
            fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: BTH_CLAY,
          }}>— Signature</span>
        </div>
      </div>

      {/* Right — image */}
      <div style={{
        position: 'relative',
        transform: `translateX(${shift}px) scale(1.02)`,
      }}>
        <BPlaceholder label="bowl of bún bò huế — close" tone="dark" />
        {/* seal overlay */}
        <div style={{
          position: 'absolute', right: 80, bottom: 100,
          opacity: op(1.4, 2.2),
          transform: `rotate(${-4 + (1 - op(1.4,2.2))*12}deg)`,
        }}>
          <Seal size={170} color={BTH_GOLD} text="SPECIAL" />
        </div>
        <div style={{
          position: 'absolute', left: 60, top: 80,
          fontFamily: B_SCRIPT, fontSize: 58, color: BTH_GOLD_SOFT,
          opacity: op(0.8, 1.5),
          textShadow: '0 4px 16px rgba(0,0,0,0.4)',
        }}>
          Bún Bò Huế
        </div>
      </div>
    </div>
  );
}

// Scene 4 — Three-generation timeline with layered portraits
function BthScene4() {
  const { localTime, duration } = window.useSprite();
  const op = (s, e) => window.animate({ from: 0, to: 1, start: s, end: e })(localTime);

  const gens = [
    { year: '1968', label: 'Bà Nội', sub: 'Huế, Vietnam', at: 0.3 },
    { year: '1992', label: 'Mẹ', sub: 'San Jose, CA', at: 0.7 },
    { year: '2026', label: 'Chúng Ta', sub: 'Story Rd.', at: 1.1 },
  ];

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: BTH_GREEN_DEEP, color: BTH_CREAM,
    }}>
      <BGrain opacity={0.14} dark />

      {/* eyebrow */}
      <div style={{
        position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)',
        fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.5em',
        color: BTH_GOLD_SOFT, textTransform: 'uppercase',
        opacity: op(0, 0.5),
      }}>
        03 · Ba Thế Hệ · Three Generations
      </div>

      {/* Timeline line */}
      <div style={{
        position: 'absolute', top: 450, left: 120, right: 120,
        height: 1, background: `${BTH_GOLD_SOFT}40`,
        opacity: op(0.2, 0.9),
      }}/>

      {/* generations row */}
      <div style={{
        position: 'absolute', top: 240, left: 120, right: 120,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 60,
      }}>
        {gens.map((g, i) => {
          const gop = op(g.at, g.at + 0.8);
          return (
            <div key={i} style={{
              opacity: gop,
              transform: `translateY(${(1 - gop) * 30}px)`,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              <div style={{
                width: 340, height: 420,
                borderRadius: 4,
                border: `2px solid ${BTH_GOLD_SOFT}`,
                padding: 8,
                background: BTH_GREEN_DEEP,
                boxShadow: '0 30px 60px -30px rgba(0,0,0,0.7)',
              }}>
                <BPlaceholder label={`${g.label}`} tone="green" />
              </div>
              {/* tick on timeline */}
              <div style={{
                width: 12, height: 12, borderRadius: '50%',
                background: BTH_GOLD, marginTop: 18,
                boxShadow: `0 0 0 6px ${BTH_GREEN_DEEP}`,
              }}/>
              <div style={{
                fontFamily: B_DISPLAY, fontSize: 64, fontWeight: 500,
                color: BTH_CREAM, marginTop: 34, letterSpacing: '-0.02em',
              }}>
                {g.year}
              </div>
              <div style={{
                fontFamily: B_DISPLAY, fontSize: 34, fontStyle: 'italic',
                color: BTH_GOLD_SOFT, marginTop: 4,
              }}>
                {g.label}
              </div>
              <div style={{
                fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.3em',
                textTransform: 'uppercase', color: `${BTH_CREAM}80`,
                marginTop: 10,
              }}>
                {g.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom verse */}
      <div style={{
        position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: B_DISPLAY, fontSize: 38, fontStyle: 'italic',
          color: BTH_CREAM, letterSpacing: '-0.01em',
          opacity: op(1.6, 2.4),
        }}>
          one bowl, passed hand to hand.
        </div>
      </div>
    </div>
  );
}

// Scene 5 — Menu as editorial layout, big numbers
function BthScene5() {
  const { localTime, duration } = window.useSprite();
  const op = (s, e) => window.animate({ from: 0, to: 1, start: s, end: e })(localTime);

  const dishes = [
    { n: '01', vi: 'Bún Bò Huế', en: 'Spicy Beef Noodle Soup', price: '18', sig: true },
    { n: '02', vi: 'Nem Nướng & Gỏi Cuốn', en: 'Grilled Pork & Spring Rolls', price: '14' },
    { n: '03', vi: 'Bánh Bèo Chén', en: 'Steamed Rice Cakes', price: '12' },
    { n: '04', vi: 'Bún Măng Gỏi Vịt', en: 'Duck & Bamboo Soup', price: '17' },
    { n: '05', vi: 'Cơm Gà Xíu Xíu', en: 'An Nam Chicken Rice', price: '16' },
    { n: '06', vi: 'Xôi Chiên Gà Rôti', en: 'Sticky Rice, Rotisserie', price: '17' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, background: BTH_CREAM }}>
      <BGrain opacity={0.08} />

      <div style={{
        position: 'absolute', left: 120, top: 90,
        fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.5em',
        textTransform: 'uppercase', color: BTH_CLAY,
        opacity: op(0, 0.5),
      }}>
        04 · Thực Đơn — The Menu
      </div>
      <div style={{
        position: 'absolute', left: 120, top: 130, right: 120,
        fontFamily: B_DISPLAY, fontWeight: 500, fontSize: 108,
        color: BTH_GREEN_DEEP, letterSpacing: '-0.03em', lineHeight: 0.95,
        opacity: op(0.1, 0.9),
        transform: `translateY(${(1 - op(0.1,0.9))*16}px)`,
      }}>
        Sáu món — <span style={{ fontStyle: 'italic', color: BTH_CLAY }}>six dishes.</span>
      </div>

      {/* columnar list + pull image */}
      <div style={{
        position: 'absolute', left: 120, top: 320, right: 120, bottom: 90,
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60,
      }}>
        {/* left — the list */}
        <div style={{ borderTop: `1px solid ${BTH_GREEN_DEEP}30` }}>
          {dishes.map((d, i) => {
            const start = 0.5 + i * 0.13;
            const dop = op(start, start + 0.5);
            return (
              <div key={d.n} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr auto', alignItems: 'baseline',
                padding: '20px 0',
                borderBottom: `1px solid ${BTH_GREEN_DEEP}22`,
                opacity: dop,
                transform: `translateX(${(1 - dop) * -20}px)`,
              }}>
                <span style={{
                  fontFamily: B_MONO, fontSize: 12, letterSpacing: '0.3em',
                  color: BTH_CLAY,
                }}>
                  {d.n}
                </span>
                <div>
                  <div style={{
                    fontFamily: B_DISPLAY, fontSize: 38, fontWeight: 600,
                    color: BTH_GREEN_DEEP, letterSpacing: '-0.015em',
                    display: 'flex', alignItems: 'center', gap: 14,
                  }}>
                    {d.vi}
                    {d.sig && (
                      <span style={{
                        fontFamily: B_MONO, fontSize: 10, fontWeight: 700,
                        letterSpacing: '0.3em', textTransform: 'uppercase',
                        color: BTH_GOLD, border: `1px solid ${BTH_GOLD}`,
                        padding: '3px 8px', borderRadius: 2,
                      }}>
                        Signature
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontFamily: B_DISPLAY, fontStyle: 'italic', fontSize: 17,
                    color: `${BTH_GREEN_DEEP}80`, marginTop: 2,
                  }}>
                    {d.en}
                  </div>
                </div>
                <span style={{
                  fontFamily: B_DISPLAY, fontSize: 30, fontWeight: 500,
                  color: BTH_CLAY, letterSpacing: '-0.01em',
                }}>
                  ${d.price}
                </span>
              </div>
            );
          })}
        </div>

        {/* right — featured image block */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 20,
          opacity: op(0.4, 1.2),
        }}>
          <div style={{
            position: 'relative', flex: 1, borderRadius: 4, overflow: 'hidden',
            border: `2px solid ${BTH_GREEN_DEEP}`,
          }}>
            <BPlaceholder label="signature — bún bò huế" tone="dark" />
            <div style={{
              position: 'absolute', left: 20, bottom: 20,
              background: BTH_GOLD, color: BTH_GREEN_DEEP,
              padding: '10px 16px', borderRadius: 2,
              fontFamily: B_MONO, fontSize: 10, fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase',
            }}>
              THE BOWL
            </div>
          </div>
          <div style={{
            padding: '20px 22px',
            background: BTH_GREEN_DEEP, color: BTH_CREAM,
            borderRadius: 4,
            fontFamily: B_DISPLAY, fontStyle: 'italic', fontSize: 22,
            letterSpacing: '-0.01em',
          }}>
            &ldquo;served with a side of broth, hand-torn herbs, and a story you&rsquo;ll finish before the bowl.&rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}

// Scene 6 — Closing: gold field, CTA, address, seal
function BthScene6() {
  const { localTime, duration } = window.useSprite();
  const op = (s, e) => window.animate({ from: 0, to: 1, start: s, end: e })(localTime);
  const slowZoom = 1 + window.interpolate([0, 1], [0, 0.04])(localTime / duration);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: BTH_GOLD, color: BTH_GREEN_DEEP,
      transform: `scale(${slowZoom})`, transformOrigin: 'center',
    }}>
      <BGrain opacity={0.14} />

      {/* decorative border */}
      <div style={{
        position: 'absolute', inset: 40,
        border: `1px solid ${BTH_GREEN_DEEP}35`,
        opacity: op(0, 0.6),
      }}/>
      <div style={{
        position: 'absolute', inset: 60,
        border: `1px solid ${BTH_GREEN_DEEP}20`,
        opacity: op(0.1, 0.7),
      }}/>

      {/* Eyebrow */}
      <div style={{
        position: 'absolute', top: 110, left: '50%', transform: 'translateX(-50%)',
        fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.5em',
        color: BTH_GREEN_DEEP, textTransform: 'uppercase',
        opacity: op(0.1, 0.6),
      }}>
        Ghé Thăm · Visit · 740 Story Rd · San Jose, CA
      </div>

      {/* Center stack */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -55%)',
        textAlign: 'center', width: 1400,
      }}>
        <div style={{
          fontFamily: B_DISPLAY, fontWeight: 500, fontSize: 220,
          lineHeight: 0.9, letterSpacing: '-0.04em',
          opacity: op(0.2, 1.0),
          transform: `translateY(${(1 - op(0.2,1.0))*18}px)`,
        }}>
          Pull up
        </div>
        <div style={{
          fontFamily: B_DISPLAY, fontStyle: 'italic', fontWeight: 400,
          fontSize: 220, lineHeight: 0.9, letterSpacing: '-0.035em',
          color: BTH_GREEN_DEEP,
          opacity: op(0.7, 1.5),
          transform: `translateY(${(1 - op(0.7,1.5))*18}px)`,
        }}>
          a stool.
        </div>
        <div style={{
          marginTop: 24,
          fontFamily: B_SCRIPT, fontSize: 64,
          color: BTH_CLAY,
          opacity: op(1.6, 2.3),
        }}>
          stay a while.
        </div>
      </div>

      {/* Seal */}
      <div style={{
        position: 'absolute', left: 140, bottom: 140,
        opacity: op(2.0, 2.7),
        transform: `rotate(${-6 + (1 - op(2.0,2.7))*14}deg)`,
      }}>
        <Seal size={170} color={BTH_GREEN_DEEP} />
      </div>

      {/* CTA */}
      <div style={{
        position: 'absolute', right: 140, bottom: 160,
        display: 'flex', flexDirection: 'column', gap: 14,
        opacity: op(2.4, 3.0),
        alignItems: 'flex-end',
      }}>
        <div style={{
          background: BTH_GREEN_DEEP, color: BTH_GOLD_SOFT,
          padding: '22px 44px',
          fontFamily: B_SANS, fontSize: 15, fontWeight: 700,
          letterSpacing: '0.32em', textTransform: 'uppercase',
        }}>
          Reserve a Table
        </div>
        <div style={{
          fontFamily: B_MONO, fontSize: 11, letterSpacing: '0.3em',
          color: `${BTH_GREEN_DEEP}cc`, textTransform: 'uppercase',
        }}>
          phogaannam.com · (123) 456-7890
        </div>
      </div>
    </div>
  );
}

function BaTheHeDirection() {
  return (
    <>
      <window.Sprite start={0} end={4.0}><BthScene1 /></window.Sprite>
      <window.Sprite start={4.0} end={9.0}><BthScene2 /></window.Sprite>
      <window.Sprite start={9.0} end={13.0}><BthScene3 /></window.Sprite>
      <window.Sprite start={13.0} end={17.5}><BthScene4 /></window.Sprite>
      <window.Sprite start={17.5} end={22.5}><BthScene5 /></window.Sprite>
      <window.Sprite start={22.5} end={28}><BthScene6 /></window.Sprite>
    </>
  );
}

Object.assign(window, { BaTheHeDirection });
