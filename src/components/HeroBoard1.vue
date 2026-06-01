<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { heroContent, infoCardItems } = storeToRefs(store)

const leftInfoItems = computed(() => {
  const order = ['about', 'contact', 'phone']
  return order
    .map((id) => infoCardItems.value.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
})

const rightInfoItems = computed(() => {
  const order = ['social', 'work', 'CV']
  return order
    .map((id) => infoCardItems.value.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
})
</script>

<template>
<div class="framer-container">
    <!-- header: random sketches line -->
    <div class="header-section">
        <div class="tagline">
            random sketches, lettering explorations and design experiments
        </div>
    </div>

    <!-- three info cards: about, contact, phone (original left side) -->
    <div class="info-row">
        <!-- About card -->
        <div class="info-card">
            <div class="info-title">About:</div>
            <div class="inline-links">
                <a href="#" class="contact-link" style="font-weight: 600;">more info →</a>
            </div>
        </div>
        <!-- Contact card -->
        <div class="info-card">
            <div class="info-title">Contact:</div>
            <div class="inline-links">
                <a href="mailto:r.barbaro@proton.me" class="contact-link">r.barbaro@proton.me</a>
            </div>
        </div>
        <!-- Phone card -->
        <div class="info-card">
            <div class="info-title">Phone:</div>
            <div class="inline-links">
                <a href="https://wa.me/393338934839" class="contact-link" target="_blank">+39 333 893 4839 (WhatsApp)</a>
            </div>
        </div>
    </div>

    <!-- central box: SVG / big lettering area (simplified) -->
    <div class="central-hero">
        <div class="hero-icon">⚡🖌️</div>
        <div class="hero-text">Sign painting · lettering · typography design</div>
        <div class="decor-line"></div>
    </div>

    <!-- right-side card group: Social, Work, Website -->
    <div class="info-row">
        <!-- Social card -->
        <div class="info-card">
            <div class="info-title">Social:</div>
            <div class="inline-links">
                <a href="https://www.instagram.com/barbariantypos/" class="contact-link" target="_blank">instagram ↗</a>
            </div>
        </div>
        <!-- Work / Linkedin card -->
        <div class="info-card">
            <div class="info-title">work:</div>
            <div class="inline-links">
                <a href="https://www.linkedin.com/in/roccobarbaro/" class="contact-link" target="_blank">linkedin ↗</a>
            </div>
        </div>
        <!-- Website card -->
        <div class="info-card">
            <div class="info-title">Website:</div>
            <div class="inline-links">
                <a href="https://illetterista.it/" class="contact-link" target="_blank">illetterista.it ↗</a>
            </div>
        </div>
    </div>

    <!-- subtle note: original framer SVG paths were embedded curves, replaced with semantic text to keep readability -->
    <div class="footer-note">
        ✦ barbarian typos — lettering & design experiments ✦
    </div>
</div>
</template>

<style lang="css" scoped>

        /* RESET & BASE STYLES */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #fefaf5;   /* Soft off-white background */
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.4;
            color: #111;
            padding: 2rem 1rem;
        }

        /* MAIN CONTAINER — simulates Framer layout */
        .framer-container {
            max-width: 1300px;
            margin: 0 auto;
            background: transparent;
        }

        /* HEADER SECTION */
        .header-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;
        }

        .tagline {
            text-align: center;
            font-family: 'TUBO 3.4 Variable', 'TUBO 3.4 Placeholder', sans-serif;
            font-variation-settings: "wdth" 25, "wght" 10, "medi" 61;
            font-size: clamp(24px, 5vw, 34px);
            letter-spacing: 0.07em;
            text-transform: uppercase;
            color: #b0c6b3;    /* pale sage green */
            background: transparent;
            margin-bottom: 1rem;
        }

        /* INFO BARS (horizontal columns) */
        .info-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .info-card {
            background-color: #b0c6b3;   /* sage green */
            border-radius: 12px;
            padding: 1rem 1.2rem;
            flex: 1;
            min-width: 180px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }

        .info-card.dark-bg {
            background-color: #b0c6b3;
        }

        .info-title {
            font-family: 'TUBO 3.4 Variable', sans-serif;
            font-variation-settings: "wdth" 18, "wght" 20, "medi" 66;
            font-size: 14px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #000;
            margin-bottom: 0.25rem;
        }

        /* custom link / svg text style — we replace SVG paths with readable text */
        .contact-link {
            display: inline-block;
            font-family: 'TUBO 3.4 Variable', monospace;
            font-size: 1rem;
            font-weight: 500;
            text-decoration: none;
            color: #000;
            border-bottom: 1px solid transparent;
            transition: border 0.2s;
        }

        .contact-link:hover {
            border-bottom-color: #000;
        }

        .divider-dot {
            width: 4px;
            height: 4px;
            background: #000;
            border-radius: 50%;
            margin: 0 0.5rem;
        }

        .inline-links {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.25rem 0.75rem;
            margin-top: 0.2rem;
        }

        /* central hero box */
        .central-hero {
            background-color: #b0c6b3;   /* sage background */
            border-radius: 24px;
            padding: 2rem 1.5rem;
            text-align: center;
            margin: 2rem 0 2rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.02);
        }

        .hero-icon {
            font-size: 3rem;
            font-weight: 400;
            letter-spacing: 2px;
            margin-bottom: 1rem;
        }

        .hero-text {
            font-family: 'Veltro Pro Regular', 'Georgia', serif;
            font-size: clamp(28px, 6vw, 42px);
            text-transform: capitalize;
            color: #ffffff;
            background: transparent;
            letter-spacing: 0.01em;
        }

        .decor-line {
            width: 80px;
            height: 2px;
            background: #fff;
            margin: 1rem auto 0;
            opacity: 0.4;
        }

        /* right side box (social, work, website) */
        .social-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;
        }

        /* responsive behaviour */
        @media (max-width: 780px) {
            .info-row {
                flex-direction: column;
            }
            .info-card {
                width: 100%;
            }
            body {
                padding: 1rem;
            }
        }

        /* custom SVG data replacement — since raw SVG paths are long, I replace with clean text links */
        .text-link {
            font-family: monospace;
            font-size: 0.9rem;
            font-weight: 500;
            background: none;
            padding: 0;
        }

        .footer-note {
            text-align: center;
            font-size: 11px;
            opacity: 0.5;
            margin-top: 4rem;
            letter-spacing: 0.5px;
        }

</style>


