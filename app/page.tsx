import "./brand.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phở Gà An Nam — Authentic Vietnamese Cuisine",
  description:
    "A family-run Vietnamese kitchen in San Jose specializing in phở gà — chicken pho slow-simmered overnight. Third restaurant from the same family, same pot.",
};

const PAGE_HTML = `
<!-- Reusable SVG brush stroke as a symbol -->
<svg style="position:absolute;width:0;height:0" aria-hidden="true">
  <defs>
    <symbol id="brush" viewBox="0 0 600 70">
      <path d="M 8 49 C 132 14, 252 66, 372 31 S 528 59, 588 28"
        fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" />
    </symbol>
  </defs>
</svg>

<nav class="site" aria-label="Primary">
  <div class="bar">
    <a href="#top" class="logo" aria-label="Phở Gà An Nam — home">
      An Nam <span class="script">phở gà</span>
    </a>
    <ul class="links">
      <li><a href="#menu">Menu</a></li>
      <li><a href="#story">Our Story</a></li>
      <li><a href="#visit">Visit</a></li>
      <li><a href="#catering">Catering</a></li>
    </ul>
    <div class="right">
      <a href="#visit" class="chip">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
        San Jose, CA
      </a>
      <a href="#visit" class="reserve">Reserve</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero grain dark" id="top">
  <div class="wrap" style="position:relative;z-index:2;">
    <div class="rail">
      <span>◆</span>
      <span>Phở Gà An Nam</span>
      <span class="line"></span>
      <span>Est. in the family kitchen</span>
      <span class="line"></span>
      <span>San Jose, CA</span>
      <span>◆</span>
    </div>

    <div class="split">
      <div>
        <h1>
          Phở Gà<br/>
          <span class="italic">An Nam.</span>
        </h1>

        <svg class="brush" viewBox="0 0 600 70" style="color: var(--gold);"><use href="#brush"/></svg>

        <div class="kicker">
          <span class="stars">★★★★★</span>
          <span class="kicker-sep">·</span>
          <span>244 reviews</span>
          <span class="kicker-sep">·</span>
          <span>Google &amp; Yelp</span>
        </div>

        <p class="lede">
          We simmer free-range chicken bones for fourteen hours with charred ginger, toasted spices, and a quiet stove. Pull up a stool. Stay a while.
        </p>

        <div class="ctas">
          <a href="#menu" class="btn primary">See the Menu →</a>
          <a href="#visit" class="btn ghost">Reserve a Table</a>
        </div>
      </div>

      <div class="hero-image">
        <div class="ph dark">hero — bowl of phở gà, overhead</div>
        <div class="seal-in">
          <svg width="140" height="140" viewBox="0 0 160 160" aria-hidden>
            <circle cx="80" cy="80" r="74" fill="none" stroke="var(--gold-soft)" stroke-width="2"/>
            <circle cx="80" cy="80" r="66" fill="none" stroke="var(--gold-soft)" stroke-width="0.8"/>
            <defs>
              <path id="sealpath-hero" d="M 80,80 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
            </defs>
            <text font-family="Playfair Display, serif" font-size="11" fill="var(--gold-soft)" letter-spacing="6" font-weight="600">
              <textPath href="#sealpath-hero" startOffset="0%">
                AN NAM · PHỞ GÀ · EST 1968 · SAN JOSE ·
              </textPath>
            </text>
            <text x="80" y="88" text-anchor="middle" font-family="Playfair Display, serif" font-style="italic" font-weight="500" font-size="34" fill="var(--gold-soft)">an nam</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MARQUEE BAND -->
<section class="marquee-band" aria-label="What we stand for">
  <div class="mq">
    <span>Phở Gà Đặc Biệt<span class="orn">❋</span></span>
    <span>Slow-Simmered<span class="orn">❋</span></span>
    <span>Family Recipe<span class="orn">❋</span></span>
    <span>Bếp Nhà — Family Kitchen<span class="orn">❋</span></span>
    <span>Fresh Herbs Daily<span class="orn">❋</span></span>
    <span>Hand-Pulled Noodles<span class="orn">❋</span></span>
    <!-- duplicate for seamless loop -->
    <span>Phở Gà Đặc Biệt<span class="orn">❋</span></span>
    <span>Slow-Simmered<span class="orn">❋</span></span>
    <span>Family Recipe<span class="orn">❋</span></span>
    <span>Bếp Nhà — Family Kitchen<span class="orn">❋</span></span>
    <span>Fresh Herbs Daily<span class="orn">❋</span></span>
    <span>Hand-Pulled Noodles<span class="orn">❋</span></span>
  </div>
</section>

<!-- STORY / Pho Ga An Nam -->
<section class="story grain dark" id="story">
  <div class="wrap" style="position:relative;z-index:2;">
    <div class="sec-eyebrow">
      <span class="num">03 · Câu Chuyện · Our Story</span>
    </div>

    <div class="header">
      <h2>
        Phở Gà <span class="italic">An Nam.</span>
      </h2>
      <p class="note" style="color: rgba(243,231,207,0.75); font-size: 16px; line-height: 1.65;">
        A family of San Jose restaurateurs on their third dining room — each one a little louder, a little busier, the broth just the same. An Nam is the quiet one. The pot we keep going for ourselves.
      </p>
    </div>

    <div class="timeline">
      <div class="gen">
        <div class="frame"><div class="ph green">first dining room, 2011</div></div>
        <div class="tick"></div>
        <div class="year">2011</div>
        <div class="who">Nhà Hàng Số Một</div>
        <div class="place">First restaurant · San Jose</div>
      </div>
      <div class="gen">
        <div class="frame"><div class="ph green">second opening, 2017</div></div>
        <div class="tick"></div>
        <div class="year">2017</div>
        <div class="who">Phở Huế Xưa</div>
        <div class="place">Second restaurant · San Jose</div>
      </div>
      <div class="gen">
        <div class="frame"><div class="ph green">an nam, today</div></div>
        <div class="tick"></div>
        <div class="year">2026</div>
        <div class="who">Phở Gà An Nam</div>
        <div class="place">Story Rd. · San Jose</div>
      </div>
    </div>

    <p class="verse">three kitchens, one city, the same pot.</p>
  </div>
</section>

<!-- SPECIALTY -->
<section class="spec grain">
  <div class="wrap" style="position:relative;z-index:2;">
    <div class="sec-eyebrow">
      <span class="num">02 · Đặc sản — Specialty</span>
    </div>

    <div class="layout">
      <div class="image-wrap">
        <div class="ph dark">bowl of bún bò huế — close</div>
        <div class="script">Bún Bò Huế</div>
        <div class="seal-wrap">
          <svg width="170" height="170" viewBox="0 0 170 170" aria-hidden>
            <circle cx="85" cy="85" r="79" fill="none" stroke="var(--gold)" stroke-width="2"/>
            <circle cx="85" cy="85" r="71" fill="none" stroke="var(--gold)" stroke-width="0.8"/>
            <defs><path id="sealpath-spec" d="M 85,85 m -79,0 a 79,79 0 1,1 158,0 a 79,79 0 1,1 -158,0"/></defs>
            <text font-family="Playfair Display" font-size="12" fill="var(--gold)" letter-spacing="7" font-weight="600">
              <textPath href="#sealpath-spec" startOffset="0%">SPECIAL · PHỞ GÀ · EST 1968 · SAN JOSE ·</textPath>
            </text>
            <text x="85" y="93" text-anchor="middle" font-family="Playfair Display" font-style="italic" font-weight="500" font-size="36" fill="var(--gold)">an nam</text>
          </svg>
        </div>
      </div>

      <div>
        <div class="mega">Huế</div>
        <div class="sub">Bún Bò, the imperial soup</div>
        <svg class="brush" viewBox="0 0 600 70" style="color: var(--clay);"><use href="#brush"/></svg>
        <p class="body">
          Lemongrass. Fermented shrimp. A ribbon of chili oil. Thick rice noodles, pork knuckle, beef shank. Bolder on the tongue, heavier on memory.
        </p>
        <div class="price-row">
          <span class="price">$18</span>
          <span class="tag">— Signature</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MENU -->
<section class="menu" id="menu">
  <div class="wrap">
    <div class="sec-eyebrow">
      <span class="num">04 · Thực Đơn — The Menu</span>
    </div>
    <h2>Most ordered<br/><span class="italic">house favorites.</span></h2>
    <p class="menu-sub">A few of the bowls and plates our regulars keep coming back for. The full menu has more.</p>

    <div class="layout">
      <div class="list">
        <div class="row">
          <span class="num">01</span>
          <div>
            <div class="name">Bún Bò Huế <span class="sig">Signature</span></div>
            <div class="en">Spicy Beef Noodle Soup</div>
          </div>
          <span class="price">$18</span>
        </div>
        <div class="row">
          <span class="num">02</span>
          <div>
            <div class="name">Nem Nướng &amp; Gỏi Cuốn</div>
            <div class="en">Grilled Pork Patties &amp; Spring Rolls</div>
          </div>
          <span class="price">$14</span>
        </div>
        <div class="row">
          <span class="num">03</span>
          <div>
            <div class="name">Bánh Bèo Chén</div>
            <div class="en">Steamed Rice Cakes</div>
          </div>
          <span class="price">$12</span>
        </div>
        <div class="row">
          <span class="num">04</span>
          <div>
            <div class="name">Bún Măng Gỏi Vịt</div>
            <div class="en">Duck &amp; Bamboo Noodle Soup</div>
          </div>
          <span class="price">$17</span>
        </div>
        <div class="row">
          <span class="num">05</span>
          <div>
            <div class="name">Cơm Gà Xíu Xíu</div>
            <div class="en">An Nam Chicken Rice</div>
          </div>
          <span class="price">$16</span>
        </div>
        <div class="row">
          <span class="num">06</span>
          <div>
            <div class="name">Xôi Chiên Gà Rôti</div>
            <div class="en">Crispy Sticky Rice &amp; Rotisserie Chicken</div>
          </div>
          <span class="price">$17</span>
        </div>
      </div>

      <div class="featured">
        <div class="frame">
          <div class="ph dark">signature — bún bò huế</div>
          <div class="badge">THE BOWL</div>
        </div>
        <div class="pullquote">
          &ldquo;served with a side of broth, hand-torn herbs, and a story you&rsquo;ll finish before the bowl.&rdquo;
        </div>
      </div>
    </div>

    <div class="menu-cta">
      <a href="#" class="btn menu-full-btn">See the Full Menu →</a>
      <span class="menu-cta-note">over twenty bowls, rice plates &amp; sides</span>
    </div>
  </div>
</section>

<!-- GALLERY / THE ROOM -->
<section class="gallery grain">
  <div class="wrap" style="position:relative;z-index:2;">
    <div class="header">
      <div>
        <div class="sec-eyebrow"><span class="num">05 · Căn Phòng — The Room</span></div>
        <h2>A small dining room. <span class="italic">Loud bowls.</span> Quiet care.</h2>
      </div>
      <p class="note">
        Thirty seats, an open pass, and a stove that has been on since six in the morning. We hope it feels like someone&rsquo;s home — because it is.
      </p>
    </div>
    <div class="grid">
      <div><div class="ph">pass — noodles going out</div></div>
      <div><div class="ph">hands tearing herbs</div></div>
      <div><div class="ph">steam over bowl</div></div>
      <div><div class="ph">broth being ladled</div></div>
      <div><div class="ph">dining room, afternoon light</div></div>
    </div>
  </div>
</section>

<!-- VISIT -->
<section class="visit grain" id="visit">
  <div class="wrap inner">
    <div class="header">
      <span class="eyebrow">Ghé Thăm · Visit · 740 Story Rd · San Jose, CA</span>
      <h2>Pull up<br/><span class="italic">a stool.</span></h2>
      <div class="script">stay a while.</div>
    </div>

    <div class="layout">
      <div class="info">
        <div class="info-row">
          <span class="dot">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          <div>
            <div class="label">Address</div>
            <div class="value">740 Story Rd<small>San Jose, CA 95122</small></div>
          </div>
        </div>
        <div class="info-row">
          <span class="dot">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z"/></svg>
          </span>
          <div>
            <div class="label">Reservations</div>
            <div class="value">(123) 456-7890<small>hello@phogaannam.com</small></div>
          </div>
        </div>

        <div class="ctas">
          <a href="#book" class="btn primary">Reserve a Table →</a>
          <a href="#order" class="btn ghost">Order Pickup</a>
        </div>
      </div>

      <div class="hours">
        <h3>◷ Kitchen Hours</h3>
        <ul>
          <li class="closed"><span class="day">Monday</span><span class="time">Closed</span></li>
          <li><span class="day">Tuesday — Thursday</span><span class="time">11:00 — 21:00</span></li>
          <li><span class="day">Friday</span><span class="time">11:00 — 22:00</span></li>
          <li><span class="day">Saturday</span><span class="time">10:00 — 22:00</span></li>
          <li><span class="day">Sunday</span><span class="time">10:00 — 21:00</span></li>
        </ul>
        <p class="fine">Last seating 30 minutes before close. The broth waits for no one — we run out a few nights a month. Come early.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="cols">
      <div class="brand">
        <a href="#top" class="logo-box">An Nam <span class="script">phở gà</span></a>
        <p>A family-run Vietnamese kitchen in San Jose, California. Slow broth, fresh herbs, an open door.</p>
      </div>
      <div>
        <h4>Visit</h4>
        <ul class="links">
          <li><a href="#visit">Hours &amp; Location</a></li>
          <li><a href="#book">Reserve a Table</a></li>
          <li><a href="#order">Order Pickup</a></li>
          <li><a href="#parking">Parking</a></li>
        </ul>
      </div>
      <div>
        <h4>Menu</h4>
        <ul class="links">
          <li><a href="#menu">Full Menu</a></li>
          <li><a href="#menu">Chicken Pho</a></li>
          <li><a href="#allergens">Allergens</a></li>
          <li><a href="#drinks">Drinks</a></li>
        </ul>
      </div>
      <div>
        <h4>Family</h4>
        <ul class="links">
          <li><a href="#catering">Catering</a></li>
          <li><a href="#events">Private Events</a></li>
          <li><a href="#press">Press</a></li>
          <li><a href="#gifts">Gift Cards</a></li>
        </ul>
      </div>
      <div class="news">
        <h4>Letters from the kitchen</h4>
        <p class="big">Specials, recipes, the occasional photo of the broth at 4 a.m.</p>
        <form onsubmit="event.preventDefault();">
          <input type="email" placeholder="you@example.com" aria-label="email"/>
          <button type="submit" aria-label="Subscribe">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </form>
        <small>No spam. Unsubscribe with one click.</small>
      </div>
    </div>

    <div class="bottom">
      <ul class="socials">
        <li><a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg></a></li>
        <li><a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.3l.35-2.7H13.5V9.6c0-.78.22-1.32 1.34-1.32h1.43V5.85c-.25-.03-1.1-.1-2.08-.1-2.06 0-3.47 1.25-3.47 3.56v1.99H8.4v2.7h2.32V21h2.78Z"/></svg></a></li>
        <li><a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.2a2.5 2.5 0 0 0-1.76-1.77C18.24 5 12 5 12 5s-6.24 0-7.82.43A2.5 2.5 0 0 0 2.42 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .42 4.8 2.5 2.5 0 0 0 1.76 1.77C5.76 19 12 19 12 19s6.24 0 7.82-.43a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.42-4.8ZM10 15V9l5.2 3-5.2 3Z"/></svg></a></li>
      </ul>
      <ul class="legal">
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Accessibility</a></li>
      </ul>
      <div class="copyright">© Phở Gà An Nam · 2026</div>
    </div>
  </div>
</footer>

<a href="/pho-ga-an-nam.html" class="film-link">▶ View the Brand Film</a>
`;

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}
