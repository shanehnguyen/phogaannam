// Direction A — Bếp Nhà (Family Kitchen)
// Editorial, warm cream / deep green / gold. Documentary camera drift,
// quiet typography, ingredients typed in as the broth builds.

const BEP_CREAM = '#f3e7cf';
const BEP_CREAM_DEEP = '#ead9b8';
const BEP_GREEN = '#1f3d2b';
const BEP_GREEN_DEEP = '#122318';
const BEP_GREEN_SOFT = '#2d5239';
const BEP_GOLD = '#c89033';
const BEP_GOLD_SOFT = '#d9ad5f';
const BEP_CLAY = '#8a4f2f';
const BEP_INK = '#0e1a13';

const FONT_DISPLAY = '"Playfair Display", "Cormorant Garamond", Georgia, serif';
const FONT_SANS = '"Be Vietnam Pro", system-ui, sans-serif';
const FONT_SCRIPT = '"Caveat", cursive';
const FONT_MONO = '"JetBrains Mono", ui-monospace, monospace';

// ── shared small components ─────────────────────────────────────────────────

function FilmGrain({ opacity = 0.06 }) {
  // SVG noise overlay — adds filmic warmth
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none',
        opacity,
        mixBlendMode: 'multiply',
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}

function Placeholder({ label, tone = 'cream' }) {
  const colors =
    tone === 'green'
      ? { bg1: '#2d5239', bg2: '#1f3d2b', fg: 'rgba(243,231,207,0.55)' }
      : tone === 'dark'
      ? { bg1: '#1a2a1f', bg2: '#122318', fg: 'rgba(217,173,95,0.6)' }
      : { bg1: BEP_CREAM_DEEP, bg2: '#ddc7a0', fg: 'rgba(18,35,24,0.45)' };

  return (
    <div
      style={{
        width: '100%', height: '100%',
        background: `repeating-linear-gradient(135deg, ${colors.bg1} 0 14px, ${colors.bg2} 14px 28px)`,
        color: colors.fg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT_MONO, fontSize: 11,
        textTransform: 'uppercase', letterSpacing: '0.32em',
        textAlign: 'center', padding: '12px 18px',
      }}
    >
      {label}
    </div>
  );
}

// Vietnamese-tile-inspired corner ornament (diamond + dot)
function Ornament({ size = 18, color = BEP_GOLD, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden>
      <rect x="10" y="3" width="4" height="4" transform="rotate(45 12 5)" fill={color} />
      <rect x="10" y="17" width="4" height="4" transform="rotate(45 12 19)" fill={color} />
      <circle cx="12" cy="12" r="1.2" fill={color} />
    </svg>
  );
}

// Thin horizontal rule with center ornament
function Rule({ width = 200, color = BEP_GOLD }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      width, color,
    }}>
      <div style={{ flex: 1, height: 1, background: color, opacity: 0.5 }} />
      <Ornament size={10} color={color} />
      <div style={{ flex: 1, height: 1, background: color, opacity: 0.5 }} />
    </div>
  );
}

// Steam particle that rises and fades
function Steam({ x, y, delay = 0, scale = 1 }) {
  const { localTime, duration } = window.useSprite();
  const period = 3.2;
  const t = ((localTime + delay) % period) / period;
  const opacity = t < 0.15 ? t / 0.15 * 0.55 : (1 - t) * 0.55;
  const ty = -t * 120 * scale;
  const tx = Math.sin(t * Math.PI * 1.2) * 14 * scale;
  const sx = 0.8 + t * 0.9;

  return (
    <div
      style={{
        position: 'absolute', left: x, top: y,
        width: 120 * scale, height: 2,
        opacity,
        transform: `translate(${tx}px, ${ty}px) scaleX(${sx})`,
        pointerEvents: 'none',
      }}
    >
      <div style={{
        width: '100%', height: '100%',
        background: `radial-gradient(ellipse, rgba(243,231,207,0.9) 0%, rgba(243,231,207,0) 70%)`,
        filter: 'blur(8px)',
      }}/>
    </div>
  );
}

// Typed text — reveals character by character
function TypedText({ text, speed = 0.035, delay = 0, style, cursor = true }) {
  const { localTime } = window.useSprite();
  const t = Math.max(0, localTime - delay);
  const count = Math.min(text.length, Math.floor(t / speed));
  const done = count >= text.length;
  const showCursor = cursor && !done && t > 0;
  return (
    <span style={style}>
      {text.slice(0, count)}
      {showCursor && (
        <span style={{ opacity: Math.floor(t * 2) % 2 ? 0.2 : 1 }}>▍</span>
      )}
    </span>
  );
}

// ── scenes ──────────────────────────────────────────────────────────────────

// Scene 1: Cold-open logotype on cream field, slow zoom
function BepScene1() {
  const { localTime, duration } = window.useSprite();
  const scale = 1 + window.interpolate([0, 1], [0, 0.04], window.Easing.easeOutCubic)(localTime / duration);
  const tagOpacity = window.animate({ from: 0, to: 1, start: 0.2, end: 0.9, ease: window.Easing.easeOutCubic })(localTime);
  const bigOpacity = window.animate({ from: 0, to: 1, start: 0.6, end: 1.6, ease: window.Easing.easeOutCubic })(localTime);
  const bigY = window.animate({ from: 18, to: 0, start: 0.6, end: 1.6, ease: window.Easing.easeOutCubic })(localTime);
  const scriptOpacity = window.animate({ from: 0, to: 1, start: 1.4, end: 2.2, ease: window.Easing.easeOutCubic })(localTime);
  const ruleOpacity = window.animate({ from: 0, to: 1, start: 2.0, end: 2.8 })(localTime);
  const vignetteOpacity = window.animate({ from: 0, to: 1, start: 2.6, end: 3.3 })(localTime);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at 50% 60%, ${BEP_CREAM} 0%, ${BEP_CREAM_DEEP} 100%)`,
      transform: `scale(${scale})`, transformOrigin: 'center',
    }}>
      <FilmGrain opacity={0.08} />
      {/* Vignette background placeholder — implied bowl/table */}
      <div style={{
        position: 'absolute', left: '50%', top: '62%',
        width: 900, height: 900,
        marginLeft: -450, marginTop: -450,
        borderRadius: '50%',
        opacity: vignetteOpacity * 0.25,
        background: `radial-gradient(circle, ${BEP_GREEN_DEEP} 0%, transparent 55%)`,
      }}/>

      {/* Top eyebrow */}
      <div style={{
        position: 'absolute', top: 110, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
        opacity: tagOpacity,
      }}>
        <div style={{
          fontFamily: FONT_SANS, fontSize: 13,
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: BEP_CLAY, fontWeight: 500,
        }}>
          Est. in the family kitchen
        </div>
      </div>

      {/* Main title */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: `translate(-50%, calc(-50% + ${bigY}px))`,
        textAlign: 'center',
        opacity: bigOpacity,
      }}>
        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 500,
          fontSize: 172, lineHeight: 0.92,
          color: BEP_GREEN_DEEP, letterSpacing: '-0.02em',
        }}>
          Phở Gà
        </div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontWeight: 400,
          fontSize: 172, lineHeight: 0.92,
          color: BEP_CLAY, letterSpacing: '-0.02em',
          marginTop: 4,
        }}>
          An Nam
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 150, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
        opacity: scriptOpacity,
      }}>
        <div style={{ opacity: ruleOpacity }}>
          <Rule width={220} color={BEP_GOLD} />
        </div>
        <div style={{
          fontFamily: FONT_SCRIPT, fontSize: 40,
          color: BEP_CLAY,
        }}>
          a family kitchen, three generations long
        </div>
      </div>

      {/* Corner ornaments */}
      {[[60,60],[1860,60,'tr'],[60,1020,'bl'],[1860,1020,'br']].map(([x,y,c],i) => (
        <div key={i} style={{
          position: 'absolute',
          left: x === 1860 ? undefined : x, right: x === 1860 ? 60 : undefined,
          top: y === 1020 ? undefined : y, bottom: y === 1020 ? 60 : undefined,
          opacity: ruleOpacity * 0.7,
        }}>
          <Ornament size={22} color={BEP_GOLD} />
        </div>
      ))}
    </div>
  );
}

// Scene 2: the broth is built — split layout, ingredient typing
function BepScene2() {
  const { localTime, duration } = window.useSprite();
  const panY = window.animate({ from: 30, to: 0, start: 0, end: 1.0, ease: window.Easing.easeOutCubic })(localTime);
  const rightOp = window.animate({ from: 0, to: 1, start: 0.2, end: 1.0 })(localTime);
  const leftOp = window.animate({ from: 0, to: 1, start: 0.0, end: 0.8 })(localTime);

  const ingredients = [
    { t: 'free-range chicken', at: 0.7 },
    { t: 'charred ginger', at: 1.4 },
    { t: 'star anise + cloves', at: 2.0 },
    { t: 'yellow onion, bruised', at: 2.6 },
    { t: 'coriander seed, toasted', at: 3.2 },
    { t: 'fish sauce, rock sugar', at: 3.8 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, background: BEP_CREAM }}>
      <FilmGrain opacity={0.07} />

      {/* Left — recipe card */}
      <div style={{
        position: 'absolute',
        left: 120, top: 140, width: 860,
        transform: `translateY(${panY}px)`,
        opacity: leftOp,
      }}>
        <div style={{
          fontFamily: FONT_SANS, fontSize: 12,
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: BEP_CLAY, fontWeight: 500, marginBottom: 28,
        }}>
          Nước Dùng — The Broth
        </div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 108,
          lineHeight: 0.95, color: BEP_GREEN_DEEP, letterSpacing: '-0.025em',
        }}>
          Fourteen
          <br/>
          <span style={{ fontStyle: 'italic', color: BEP_CLAY }}>hours</span>, a
          <br/>
          quiet stove.
        </div>

        <div style={{ marginTop: 40, width: 180 }}>
          <Rule width={180} color={BEP_GOLD} />
        </div>

        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ingredients.map((ing, i) => {
            const op = window.animate({ from: 0, to: 1, start: ing.at, end: ing.at + 0.4 })(localTime);
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'baseline', gap: 20,
                opacity: op, whiteSpace: 'nowrap',
              }}>
                <span style={{
                  fontFamily: FONT_MONO, fontSize: 12, color: BEP_CLAY,
                  letterSpacing: '0.18em', width: 30,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: FONT_DISPLAY, fontSize: 26, fontStyle: 'italic',
                  color: BEP_GREEN_DEEP, fontWeight: 400, whiteSpace: 'nowrap',
                }}>
                  <TypedText text={ing.t} delay={ing.at} speed={0.028} cursor={false} />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right — still life of the bowl (placeholder) with steam */}
      <div style={{
        position: 'absolute',
        right: 120, top: 140,
        width: 640, height: 800,
        opacity: rightOp,
        transform: `translateY(${panY * 0.5}px)`,
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 40px 80px -40px rgba(14,26,19,0.35)',
      }}>
        <Placeholder label="still life — broth pot on stove" tone="green" />

        {/* Steam particles */}
        <div style={{ position: 'absolute', left: 0, right: 0, top: 160, height: 400 }}>
          <Steam x={200} y={400} delay={0} scale={1} />
          <Steam x={320} y={400} delay={0.8} scale={0.85} />
          <Steam x={420} y={400} delay={1.6} scale={1.1} />
          <Steam x={260} y={400} delay={2.4} scale={0.9} />
          <Steam x={380} y={400} delay={0.4} scale={1.05} />
        </div>
      </div>

      {/* Caption beneath right image */}
      <div style={{
        position: 'absolute', right: 120, bottom: 90, width: 640,
        textAlign: 'right',
        fontFamily: FONT_SCRIPT, fontSize: 36, color: BEP_CLAY,
        opacity: window.animate({ from: 0, to: 1, start: 2.5, end: 3.2 })(localTime),
      }}>
        skim by hand, never rushed.
      </div>
    </div>
  );
}

// Scene 3: The specialty — Bún Bò Huế
function BepScene3() {
  const { localTime, duration } = window.useSprite();
  const bigY = window.animate({ from: 40, to: 0, start: 0, end: 1.0, ease: window.Easing.easeOutCubic })(localTime);
  const bigOp = window.animate({ from: 0, to: 1, start: 0, end: 0.8 })(localTime);
  const imgOp = window.animate({ from: 0, to: 1, start: 0.3, end: 1.3 })(localTime);
  const subOp = window.animate({ from: 0, to: 1, start: 1.0, end: 1.7 })(localTime);
  const pillarOp1 = window.animate({ from: 0, to: 1, start: 1.7, end: 2.2 })(localTime);
  const pillarOp2 = window.animate({ from: 0, to: 1, start: 2.0, end: 2.5 })(localTime);
  const pillarOp3 = window.animate({ from: 0, to: 1, start: 2.3, end: 2.8 })(localTime);

  return (
    <div style={{ position: 'absolute', inset: 0, background: BEP_CREAM }}>
      <FilmGrain opacity={0.07} />

      {/* left image */}
      <div style={{
        position: 'absolute',
        left: 100, top: 120, width: 640, height: 840,
        opacity: imgOp,
        borderRadius: 20, overflow: 'hidden',
      }}>
        <Placeholder label="bowl of bún bò huế, overhead" tone="dark" />
        <div style={{
          position: 'absolute', left: 24, bottom: 24,
          background: BEP_GREEN_DEEP, color: BEP_CREAM,
          padding: '12px 18px', borderRadius: 999,
          fontFamily: FONT_SCRIPT, fontSize: 28,
          color: BEP_GOLD_SOFT,
        }}>
          Bún Bò Huế
        </div>
      </div>

      <div style={{
        position: 'absolute', right: 100, top: 140, width: 880,
        transform: `translateY(${bigY}px)`,
        opacity: bigOp,
      }}>
        <div style={{
          fontFamily: FONT_SANS, fontSize: 12,
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: BEP_CLAY, fontWeight: 500, marginBottom: 24,
        }}>
          The Specialty
        </div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 102,
          lineHeight: 0.98, color: BEP_GREEN_DEEP, letterSpacing: '-0.025em',
        }}>
          Not a side<br/>dish. <span style={{ fontStyle: 'italic', color: BEP_CLAY }}>The</span>
          <br/>
          <span style={{ fontStyle: 'italic', color: BEP_CLAY }}>dish.</span>
        </div>

        <div style={{
          marginTop: 32, maxWidth: 540,
          fontFamily: FONT_SANS, fontSize: 19, lineHeight: 1.55,
          color: `${BEP_GREEN_DEEP}CC`,
          opacity: subOp,
        }}>
          A spicy, lemongrass-driven beef noodle soup from the imperial city of Huế — thick rice noodles, pork knuckle, a ribbon of chili oil.
        </div>

        {/* Pillars */}
        <div style={{ marginTop: 52, display: 'flex', flexDirection: 'column', gap: 22 }}>
          {[
            { n: '01', t: 'Slow-simmered broth', op: pillarOp1 },
            { n: '02', t: 'Herbs from the garden', op: pillarOp2 },
            { n: '03', t: 'A spirited kick', op: pillarOp3 },
          ].map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 22,
              opacity: p.op,
            }}>
              <span style={{
                fontFamily: FONT_MONO, fontSize: 12, color: BEP_CLAY,
                letterSpacing: '0.18em', width: 36,
              }}>
                {p.n}
              </span>
              <span style={{ flex: '0 0 1px', height: 1, width: 36, background: BEP_GOLD }}/>
              <span style={{
                fontFamily: FONT_DISPLAY, fontSize: 32, fontStyle: 'italic',
                color: BEP_GREEN_DEEP, fontWeight: 400,
              }}>
                {p.t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Scene 4: Three generations — poetic statement
function BepScene4() {
  const { localTime, duration } = window.useSprite();
  const eyOp = window.animate({ from: 0, to: 1, start: 0, end: 0.6 })(localTime);
  const l1 = window.animate({ from: 0, to: 1, start: 0.3, end: 1.1, ease: window.Easing.easeOutCubic })(localTime);
  const l2 = window.animate({ from: 0, to: 1, start: 0.8, end: 1.6, ease: window.Easing.easeOutCubic })(localTime);
  const l3 = window.animate({ from: 0, to: 1, start: 1.4, end: 2.2, ease: window.Easing.easeOutCubic })(localTime);
  const scriptOp = window.animate({ from: 0, to: 1, start: 2.0, end: 2.7 })(localTime);
  const portOp = window.animate({ from: 0, to: 1, start: 0.4, end: 1.4 })(localTime);

  const slowScale = 1 + window.interpolate([0, 1], [0, 0.05])(localTime / duration);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: BEP_GREEN_DEEP, color: BEP_CREAM,
    }}>
      <FilmGrain opacity={0.12} />

      {/* Three portrait frames */}
      <div style={{
        position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,
        transform: `scale(${slowScale})`, transformOrigin: 'center',
      }}>
        <div style={{
          position: 'absolute', left: 120, top: 180,
          width: 280, height: 360,
          opacity: portOp,
          borderRadius: 12, overflow: 'hidden',
          transform: 'rotate(-3deg)',
          boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6)',
        }}>
          <Placeholder label="bà nội — grandmother, 1968" tone="cream" />
        </div>
        <div style={{
          position: 'absolute', right: 480, top: 420,
          width: 260, height: 340,
          opacity: portOp,
          borderRadius: 12, overflow: 'hidden',
          transform: 'rotate(2deg)',
          boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6)',
        }}>
          <Placeholder label="mẹ — mother, 1992" tone="cream" />
        </div>
        <div style={{
          position: 'absolute', right: 120, bottom: 140,
          width: 280, height: 360,
          opacity: portOp,
          borderRadius: 12, overflow: 'hidden',
          transform: 'rotate(-2deg)',
          boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6)',
        }}>
          <Placeholder label="us — today" tone="cream" />
        </div>
      </div>

      {/* Center headline */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: FONT_SANS, fontSize: 12,
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: BEP_GOLD_SOFT, fontWeight: 500, marginBottom: 32,
          opacity: eyOp,
        }}>
          Ba thế hệ — Three Generations
        </div>

        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 400,
          fontSize: 112, lineHeight: 1.12,
          color: BEP_CREAM, letterSpacing: '-0.025em',
        }}>
          <div style={{ opacity: l1, transform: `translateY(${(1-l1)*14}px)`, lineHeight: 1.12 }}>A bowl of broth.</div>
          <div style={{
            opacity: l2, transform: `translateY(${(1-l2)*14}px)`,
            fontStyle: 'italic', color: BEP_GOLD_SOFT, lineHeight: 1.12,
          }}>Three generations</div>
          <div style={{ opacity: l3, transform: `translateY(${(1-l3)*14}px)`, lineHeight: 1.12 }}>of patience.</div>
        </div>

        <div style={{
          marginTop: 44,
          fontFamily: FONT_SCRIPT, fontSize: 40, color: BEP_GOLD_SOFT,
          opacity: scriptOp,
        }}>
          the way grandmother made it.
        </div>
      </div>
    </div>
  );
}

// Scene 5: Menu grid — staggered dish cards
function BepScene5() {
  const { localTime, duration } = window.useSprite();
  const eyOp = window.animate({ from: 0, to: 1, start: 0, end: 0.6 })(localTime);
  const titleOp = window.animate({ from: 0, to: 1, start: 0.1, end: 0.9 })(localTime);
  const titleY = window.animate({ from: 20, to: 0, start: 0.1, end: 0.9, ease: window.Easing.easeOutCubic })(localTime);

  const dishes = [
    { vi: 'Bún Bò Huế', en: 'Spicy Beef Noodle Soup', price: '$18', tag: 'Signature' },
    { vi: 'Nem Nướng', en: 'Grilled Pork Patties', price: '$14', tag: null },
    { vi: 'Bánh Bèo Chén', en: 'Steamed Rice Cakes', price: '$12', tag: null },
    { vi: 'Bún Măng Gỏi Vịt', en: 'Duck & Bamboo', price: '$17', tag: null },
    { vi: 'Cơm Gà Xíu Xíu', en: 'An Nam Chicken Rice', price: '$16', tag: null },
    { vi: 'Xôi Chiên Gà Rôti', en: 'Crispy Sticky Rice', price: '$17', tag: null },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, background: BEP_CREAM }}>
      <FilmGrain opacity={0.07} />

      <div style={{
        position: 'absolute', left: 120, top: 90,
        opacity: eyOp,
        fontFamily: FONT_SANS, fontSize: 12,
        letterSpacing: '0.42em', textTransform: 'uppercase',
        color: BEP_CLAY, fontWeight: 500,
      }}>
        Thực Đơn — The Menu
      </div>
      <div style={{
        position: 'absolute', left: 120, top: 130, right: 120,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        opacity: titleOp,
        transform: `translateY(${titleY}px)`,
      }}>
        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 82,
          lineHeight: 0.98, color: BEP_GREEN_DEEP, letterSpacing: '-0.02em',
        }}>
          Six dishes <span style={{ fontStyle: 'italic', color: BEP_CLAY }}>we&rsquo;d serve our family.</span>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 120, right: 120, top: 330, bottom: 80,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 28,
      }}>
        {dishes.map((d, i) => {
          const start = 0.5 + i * 0.18;
          const op = window.animate({ from: 0, to: 1, start, end: start + 0.5 })(localTime);
          const y = window.animate({ from: 30, to: 0, start, end: start + 0.6, ease: window.Easing.easeOutCubic })(localTime);
          return (
            <div key={i} style={{
              background: BEP_CREAM_DEEP,
              borderRadius: 22, overflow: 'hidden',
              boxShadow: '0 18px 40px -28px rgba(18,35,24,0.45)',
              opacity: op,
              transform: `translateY(${y}px)`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ flex: '0 0 58%', position: 'relative' }}>
                <Placeholder label={d.vi} tone="cream" />
                {d.tag && (
                  <div style={{
                    position: 'absolute', left: 14, top: 14,
                    background: BEP_GOLD, color: BEP_GREEN_DEEP,
                    padding: '5px 12px', borderRadius: 999,
                    fontFamily: FONT_SANS, fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                  }}>
                    {d.tag}
                  </div>
                )}
              </div>
              <div style={{ padding: '18px 22px', color: BEP_GREEN_DEEP }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                }}>
                  <div style={{
                    fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}>
                    {d.vi}
                  </div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, opacity: 0.7 }}>
                    {d.price}
                  </div>
                </div>
                <div style={{
                  fontFamily: FONT_SANS, fontSize: 14, fontStyle: 'italic',
                  color: `${BEP_GREEN_DEEP}99`, marginTop: 4,
                }}>
                  {d.en}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Scene 6: Visit / CTA — final resting beat
function BepScene6() {
  const { localTime, duration } = window.useSprite();
  const op = (s, e) => window.animate({ from: 0, to: 1, start: s, end: e })(localTime);
  const slowZoom = 1 + window.interpolate([0, 1], [0, 0.04])(localTime / duration);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: BEP_GREEN_DEEP, color: BEP_CREAM,
      transform: `scale(${slowZoom})`, transformOrigin: 'center',
    }}>
      <FilmGrain opacity={0.1} />
      {/* gold ambient glow */}
      <div style={{
        position: 'absolute', right: -200, top: -200,
        width: 700, height: 700, borderRadius: '50%',
        background: `radial-gradient(circle, ${BEP_GOLD}30 0%, transparent 60%)`,
        opacity: op(0, 0.8),
        filter: 'blur(40px)',
      }}/>

      <div style={{
        position: 'absolute', left: 120, top: 160, width: 1000,
      }}>
        <div style={{
          fontFamily: FONT_SANS, fontSize: 12,
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: BEP_GOLD_SOFT, fontWeight: 500, marginBottom: 28,
          opacity: op(0, 0.5),
        }}>
          Ghé Thăm — Visit
        </div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 132,
          lineHeight: 0.98, color: BEP_CREAM, letterSpacing: '-0.025em',
        }}>
          <div style={{ opacity: op(0.1, 0.9), transform: `translateY(${(1 - op(0.1, 0.9)) * 18}px)` }}>Pull up</div>
          <div style={{ opacity: op(0.4, 1.2), transform: `translateY(${(1 - op(0.4, 1.2)) * 18}px)` }}>a stool.</div>
          <div style={{
            opacity: op(0.9, 1.7), transform: `translateY(${(1 - op(0.9, 1.7)) * 18}px)`,
            fontStyle: 'italic', color: BEP_GOLD_SOFT,
          }}>Stay a while.</div>
        </div>
      </div>

      {/* address block */}
      <div style={{
        position: 'absolute', left: 120, bottom: 150, width: 400,
        opacity: op(1.8, 2.5),
        fontFamily: FONT_SANS,
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: `${BEP_CREAM}99`, marginBottom: 10 }}>
          740 Story Rd · San Jose, CA
        </div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontSize: 26, color: BEP_GOLD_SOFT,
          fontStyle: 'italic',
        }}>
          Tue–Sun, 11:00 — late.
        </div>
      </div>

      {/* hours card */}
      <div style={{
        position: 'absolute', right: 120, top: 200, width: 500,
        background: `${BEP_GREEN_SOFT}60`,
        border: `1px solid ${BEP_CREAM}20`,
        borderRadius: 24, padding: '40px 44px',
        opacity: op(0.5, 1.4),
        transform: `translateY(${(1 - op(0.5, 1.4)) * 30}px)`,
      }}>
        <div style={{
          fontFamily: FONT_SANS, fontSize: 11, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: `${BEP_CREAM}99`, marginBottom: 28,
        }}>
          Kitchen Hours
        </div>
        {[
          { d: 'Monday', t: 'Closed' },
          { d: 'Tue — Thu', t: '11:00 — 21:00' },
          { d: 'Friday', t: '11:00 — 22:00' },
          { d: 'Saturday', t: '10:00 — 22:00' },
          { d: 'Sunday', t: '10:00 — 21:00' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '14px 0',
            borderBottom: i < 4 ? `1px solid ${BEP_CREAM}12` : 'none',
            fontFamily: FONT_SANS, fontSize: 18,
            opacity: op(1.0 + i * 0.08, 1.5 + i * 0.08),
          }}>
            <span style={{ color: `${BEP_CREAM}d9` }}>{row.d}</span>
            <span style={{
              fontFamily: FONT_DISPLAY,
              color: row.t === 'Closed' ? `${BEP_CREAM}66` : BEP_GOLD_SOFT,
              fontStyle: row.t === 'Closed' ? 'italic' : 'normal',
            }}>
              {row.t}
            </span>
          </div>
        ))}
      </div>

      {/* reserve CTA */}
      <div style={{
        position: 'absolute', right: 120, bottom: 150,
        display: 'flex', gap: 14,
        opacity: op(2.2, 2.9),
        transform: `translateY(${(1 - op(2.2, 2.9)) * 20}px)`,
      }}>
        <div style={{
          background: BEP_GOLD, color: BEP_GREEN_DEEP,
          padding: '18px 36px', borderRadius: 999,
          fontFamily: FONT_SANS, fontSize: 14, fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>
          Reserve a Table
        </div>
        <div style={{
          border: `1px solid ${BEP_CREAM}40`, color: BEP_CREAM,
          padding: '18px 36px', borderRadius: 999,
          fontFamily: FONT_SANS, fontSize: 14, fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>
          Order Pickup
        </div>
      </div>
    </div>
  );
}

// ── main composition ────────────────────────────────────────────────────────

function BepNhaDirection() {
  return (
    <>
      <window.Sprite start={0} end={4.0}>
        <BepScene1 />
      </window.Sprite>
      <window.Sprite start={4.0} end={9.0}>
        <BepScene2 />
      </window.Sprite>
      <window.Sprite start={9.0} end={13.0}>
        <BepScene3 />
      </window.Sprite>
      <window.Sprite start={13.0} end={17.5}>
        <BepScene4 />
      </window.Sprite>
      <window.Sprite start={17.5} end={22.5}>
        <BepScene5 />
      </window.Sprite>
      <window.Sprite start={22.5} end={28}>
        <BepScene6 />
      </window.Sprite>
    </>
  );
}

Object.assign(window, { BepNhaDirection });
