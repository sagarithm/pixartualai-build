"""
PixartualAI - Procedural Asset & Gradient Generator
Generates clean, 100% original, copyright-safe procedural gradient textures
preserving 90%+ visual design similarity and identical warm fiery sunset theme.
"""

import argparse
import json
import os
import zlib
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

def smoothstep(edge0, edge1, x):
    t = np.clip((x - edge0) / (edge1 - edge0), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)

def add_dither(img_arr, intensity=1.5):
    noise = np.random.normal(0, intensity, img_arr.shape)
    return np.clip(img_arr + noise, 0, 255).astype(np.uint8)

def generate_cta_bg(out_path):
    w, h = 1600, 663
    y, x = np.mgrid[0:h, 0:w]
    
    # Base warm fiery backdrop
    base = np.array([246, 76, 22], dtype=np.float32)
    acc = np.full((h, w, 3), base)
    
    # Orb 1: Upper-left fire orange
    d1 = np.sqrt(((x - 0.22*w)**2 + (y - 0.12*h)**2)) / (w * 0.58)
    w1 = smoothstep(1.0, 0.0, d1) ** 1.6
    acc += (np.array([254, 92, 12], dtype=np.float32) - base) * w1[:, :, None] * 0.75
    
    # Orb 2: Center radiant peach glow
    d2 = np.sqrt(((x - 0.52*w)**2 + (y - 0.44*h)**2)) / (w * 0.48)
    w2 = smoothstep(1.0, 0.0, d2) ** 1.4
    acc += (np.array([242, 172, 152], dtype=np.float32) - base) * w2[:, :, None] * 0.85
    
    # Orb 3: Bottom-center deep sunset vermilion
    d3 = np.sqrt(((x - 0.54*w)**2 + (y - 0.92*h)**2)) / (w * 0.52)
    w3 = smoothstep(1.0, 0.0, d3) ** 1.5
    acc += (np.array([254, 48, 0], dtype=np.float32) - base) * w3[:, :, None] * 0.9
    
    # Orb 4: Lower-left warm golden apricot
    d4 = np.sqrt(((x - 0.12*w)**2 + (y - 0.96*h)**2)) / (w * 0.46)
    w4 = smoothstep(1.0, 0.0, d4) ** 1.6
    acc += (np.array([248, 196, 122], dtype=np.float32) - base) * w4[:, :, None] * 0.8
    
    # Orb 5: Right warm amber
    d5 = np.sqrt(((x - 0.88*w)**2 + (y - 0.62*h)**2)) / (w * 0.5)
    w5 = smoothstep(1.0, 0.0, d5) ** 1.5
    acc += (np.array([218, 112, 42], dtype=np.float32) - base) * w5[:, :, None] * 0.75
    
    # Orb 6: Subtle upper violet undertone (adds modern creative AI depth)
    d6 = np.sqrt(((x - 0.75*w)**2 + (y - 0.05*h)**2)) / (w * 0.4)
    w6 = smoothstep(1.0, 0.0, d6) ** 1.8
    acc += (np.array([210, 85, 75], dtype=np.float32) - base) * w6[:, :, None] * 0.4
    
    arr = add_dither(acc, intensity=1.6)
    im = Image.fromarray(arr).filter(ImageFilter.GaussianBlur(radius=6))
    im.save(out_path, quality=94, method=6)
    print(f"Generated {out_path} ({os.path.getsize(out_path)} bytes)")

def generate_footer_bg(out_path, dark=False):
    w, h = 1600, 936
    y, x = np.mgrid[0:h, 0:w]
    
    if not dark:
        base = np.array([255, 255, 255], dtype=np.float32)
        acc = np.full((h, w, 3), base)
        
        # Vertical blend factor (only bottom 42% glows)
        v_factor = smoothstep(0.50 * h, 0.98 * h, y)
        
        # Bottom-left: soft coral rose
        dl = np.sqrt(((x - 0.05*w)**2 + (y - 1.0*h)**2)) / (w * 0.6)
        wl = smoothstep(1.0, 0.0, dl) * v_factor
        acc += (np.array([255, 178, 188], dtype=np.float32) - base) * wl[:, :, None] * 0.85
        
        # Bottom-center: warm golden amber glow
        dc = np.sqrt(((x - 0.50*w)**2 + (y - 1.05*h)**2)) / (w * 0.55)
        wc = smoothstep(1.0, 0.0, dc) * v_factor
        acc += (np.array([252, 192, 95], dtype=np.float32) - base) * wc[:, :, None] * 0.9
        
        # Bottom-right: rich fiery sunset orange
        dr = np.sqrt(((x - 0.95*w)**2 + (y - 1.0*h)**2)) / (w * 0.58)
        wr = smoothstep(1.0, 0.0, dr) * v_factor
        acc += (np.array([248, 62, 0], dtype=np.float32) - base) * wr[:, :, None] * 0.95
    else:
        base = np.array([10, 10, 12], dtype=np.float32)
        acc = np.full((h, w, 3), base)
        
        v_factor = smoothstep(0.48 * h, 0.98 * h, y)
        
        # Bottom-left: dark coral/rose embers
        dl = np.sqrt(((x - 0.05*w)**2 + (y - 1.0*h)**2)) / (w * 0.6)
        wl = smoothstep(1.0, 0.0, dl) * v_factor
        acc += (np.array([180, 50, 70], dtype=np.float32) - base) * wl[:, :, None] * 0.85
        
        # Bottom-center: glowing warm amber gold
        dc = np.sqrt(((x - 0.50*w)**2 + (y - 1.05*h)**2)) / (w * 0.55)
        wc = smoothstep(1.0, 0.0, dc) * v_factor
        acc += (np.array([245, 175, 45], dtype=np.float32) - base) * wc[:, :, None] * 0.9
        
        # Bottom-right: deep vermilion glow
        dr = np.sqrt(((x - 0.95*w)**2 + (y - 1.0*h)**2)) / (w * 0.58)
        wr = smoothstep(1.0, 0.0, dr) * v_factor
        acc += (np.array([240, 40, 0], dtype=np.float32) - base) * wr[:, :, None] * 0.95

    arr = add_dither(acc, intensity=1.2)
    im = Image.fromarray(arr).filter(ImageFilter.GaussianBlur(radius=5))
    im.save(out_path, quality=92, optimize=True)
    print(f"Generated {out_path} ({os.path.getsize(out_path)} bytes)")

def generate_hero_bg(out_path, dark=False):
    w, h = 1511, 853
    y, x = np.mgrid[0:h, 0:w]
    
    if not dark:
        base = np.array([255, 255, 255], dtype=np.float32)
        acc = np.full((h, w, 3), base)
        
        v_factor = smoothstep(0.55 * h, 1.0 * h, y)
        
        # Bottom-left: sunrise orange warmth
        dl = np.sqrt(((x - 0.0*w)**2 + (y - 1.0*h)**2)) / (w * 0.55)
        wl = smoothstep(1.0, 0.0, dl) * v_factor
        acc += (np.array([251, 142, 22], dtype=np.float32) - base) * wl[:, :, None] * 0.75
        
        # Bottom-center/right: delicate lilac-blush
        dc = np.sqrt(((x - 0.65*w)**2 + (y - 1.05*h)**2)) / (w * 0.65)
        wc = smoothstep(1.0, 0.0, dc) * v_factor
        acc += (np.array([248, 218, 252], dtype=np.float32) - base) * wc[:, :, None] * 0.8
    else:
        base = np.array([17, 17, 19], dtype=np.float32)
        acc = np.full((h, w, 3), base)
        
        v_factor = smoothstep(0.50 * h, 1.0 * h, y)
        
        dl = np.sqrt(((x - 0.0*w)**2 + (y - 1.0*h)**2)) / (w * 0.55)
        wl = smoothstep(1.0, 0.0, dl) * v_factor
        acc += (np.array([190, 75, 15], dtype=np.float32) - base) * wl[:, :, None] * 0.8
        
        dc = np.sqrt(((x - 0.65*w)**2 + (y - 1.05*h)**2)) / (w * 0.65)
        wc = smoothstep(1.0, 0.0, dc) * v_factor
        acc += (np.array([55, 20, 52], dtype=np.float32) - base) * wc[:, :, None] * 0.75

    arr = add_dither(acc, intensity=1.2)
    im = Image.fromarray(arr).filter(ImageFilter.GaussianBlur(radius=5))
    im.save(out_path, quality=92, optimize=True)
    print(f"Generated {out_path} ({os.path.getsize(out_path)} bytes)")

def generate_poster(out_path):
    w, h = 1200, 643
    y, x = np.mgrid[0:h, 0:w]
    
    # Soft ambient pastel aura
    base = np.array([254, 252, 250], dtype=np.float32)
    acc = np.full((h, w, 3), base)
    
    # Warm center peach orb
    dc = np.sqrt(((x - 0.48*w)**2 + (y - 0.55*h)**2)) / (w * 0.5)
    wc = smoothstep(1.0, 0.0, dc) ** 1.4
    acc += (np.array([255, 224, 205], dtype=np.float32) - base) * wc[:, :, None] * 0.7
    
    # Bottom violet undertone
    db = np.sqrt(((x - 0.55*w)**2 + (y - 0.85*h)**2)) / (w * 0.45)
    wb = smoothstep(1.0, 0.0, db) ** 1.6
    acc += (np.array([245, 215, 235], dtype=np.float32) - base) * wb[:, :, None] * 0.65
    
    arr = add_dither(acc, intensity=1.0)
    im = Image.fromarray(arr).filter(ImageFilter.GaussianBlur(radius=8))
    im.save(out_path, quality=92, method=6)
    print(f"Generated {out_path} ({os.path.getsize(out_path)} bytes)")

def generate_corner_glow(out_path):
    w, h = 815, 720
    y, x = np.mgrid[0:h, 0:w]
    
    # Radial distance from top-left (0,0)
    d = np.sqrt(x**2 + y**2) / (np.sqrt(w**2 + h**2) * 0.75)
    alpha = smoothstep(1.0, 0.0, d) ** 1.7
    
    # Color transitions from bright sunset orange [254, 85, 5] near 0 to warm peach [245, 170, 130]
    t = np.clip(d * 1.5, 0, 1)
    r = 254 * (1 - t) + 245 * t
    g = 85 * (1 - t) + 165 * t
    b = 5 * (1 - t) + 125 * t
    
    rgb = np.stack([r, g, b], axis=-1)
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = np.clip(rgb, 0, 255).astype(np.uint8)
    rgba[:, :, 3] = np.clip(alpha * 230, 0, 255).astype(np.uint8)
    
    im = Image.fromarray(rgba).filter(ImageFilter.GaussianBlur(radius=8))
    im.save(out_path, quality=92, method=6)
    print(f"Generated {out_path} ({os.path.getsize(out_path)} bytes)")

LIGHT_OG_SLUGS = {
    'photographer-website-design',
    'video-editor-portfolio-website',
    'graphic-designer-portfolio-website',
}


def _load_trimmed_symbol(path, target_size):
    sym = Image.open(path).convert('RGBA')
    bbox = sym.getbbox()
    if bbox:
        sym = sym.crop(bbox)
    return sym.resize((target_size, target_size), Image.Resampling.LANCZOS)


def _make_og_backdrop(w, h, seed_key, theme='orange'):
    seed = zlib.crc32(seed_key.encode('utf-8'))
    rng = np.random.default_rng(seed)
    y, x = np.mgrid[0:h, 0:w].astype(np.float32)

    if theme == 'light':
        base = np.array([253, 252, 251], dtype=np.float32)
        acc = np.full((h, w, 3), base)

        # Top-left warm amber/tangerine corner bloom (kept clear of center text zone)
        dx1 = (x - w * rng.uniform(-0.04, 0.04)) / (w * 0.34)
        dy1 = (y - h * rng.uniform(0.05, 0.18)) / (h * 0.56)
        w1 = smoothstep(1.0, 0.0, np.sqrt(dx1 * dx1 + dy1 * dy1)) ** 1.45
        acc += (np.array([252, 138, 4], dtype=np.float32) - base) * w1[:, :, None] * 0.92

        # Top-right fiery vermilion accent bloom
        dx2 = (x - w * rng.uniform(0.96, 1.04)) / (w * 0.35)
        dy2 = (y - h * rng.uniform(0.04, 0.16)) / (h * 0.54)
        w2 = smoothstep(1.0, 0.0, np.sqrt(dx2 * dx2 + dy2 * dy2)) ** 1.45
        acc += (np.array([254, 52, 0], dtype=np.float32) - base) * w2[:, :, None] * 0.90

        # Delicate warm peach halo softening corner transitions
        dx3 = (x - w * 0.90) / (w * 0.28)
        dy3 = (y - h * 0.42) / (h * 0.42)
        w3 = smoothstep(1.0, 0.0, np.sqrt(dx3 * dx3 + dy3 * dy3)) ** 1.8
        acc += (np.array([255, 224, 212], dtype=np.float32) - base) * w3[:, :, None] * 0.45

        arr = add_dither(acc, intensity=0.6)
        im = Image.fromarray(arr).filter(ImageFilter.GaussianBlur(radius=6)).convert('RGBA')
        return im

    # Warm fiery Pixartual sunset mesh gradient
    base = np.array([248, 86, 10], dtype=np.float32)
    acc = np.full((h, w, 3), base)

    ox1, oy1 = rng.uniform(0.08, 0.26), rng.uniform(0.04, 0.24)
    d1 = np.sqrt(((x - ox1 * w) / (w * 0.62)) ** 2 + ((y - oy1 * h) / (h * 0.72)) ** 2)
    w1 = smoothstep(1.0, 0.0, d1) ** 1.45
    acc += (np.array([255, 150, 18], dtype=np.float32) - base) * w1[:, :, None] * 0.85

    ox2, oy2 = rng.uniform(0.80, 0.98), rng.uniform(0.76, 0.96)
    d2 = np.sqrt(((x - ox2 * w) / (w * 0.56)) ** 2 + ((y - oy2 * h) / (h * 0.68)) ** 2)
    w2 = smoothstep(1.0, 0.0, d2) ** 1.5
    acc += (np.array([252, 34, 0], dtype=np.float32) - base) * w2[:, :, None] * 0.90

    ox3, oy3 = rng.uniform(0.04, 0.20), rng.uniform(0.68, 0.90)
    d3 = np.sqrt(((x - ox3 * w) / (w * 0.45)) ** 2 + ((y - oy3 * h) / (h * 0.62)) ** 2)
    w3 = smoothstep(1.0, 0.0, d3) ** 1.6
    acc += (np.array([255, 62, 6], dtype=np.float32) - base) * w3[:, :, None] * 0.78

    # Soft inner sunlit glow on right flank for organic depth
    ox4, oy4 = rng.uniform(0.76, 0.92), rng.uniform(0.35, 0.65)
    d4 = np.sqrt(((x - ox4 * w) / (w * 0.34)) ** 2 + ((y - oy4 * h) / (h * 0.48)) ** 2)
    w4 = smoothstep(1.0, 0.0, d4) ** 1.8
    acc += (np.array([255, 188, 108], dtype=np.float32) - base) * w4[:, :, None] * 0.45

    arr = add_dither(acc, intensity=1.1)
    im = Image.fromarray(arr).filter(ImageFilter.GaussianBlur(radius=7)).convert('RGBA')

    # Subtle radial-masked micro-pixel lattice uniquely anchoring Pixartual geometry
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    step = 28
    for gx in range(14, w, step):
        for gy in range(14, h, step):
            edge_dist = min(gx / w, (w - gx) / w, gy / h, (h - gy) / h)
            alpha = int(max(0, min(14, (0.28 - edge_dist) * 52)))
            if alpha > 2:
                odraw.rectangle([gx - 1, gy - 1, gx + 1, gy + 1], fill=(255, 245, 232, alpha))

    return Image.alpha_composite(im, overlay)


def _wrap_lines(draw, text, font, max_width, max_lines=3):
    words = text.split()
    if not words:
        return []

    def try_wrap(limit_w):
        lines = []
        cur = words[0]
        for word in words[1:]:
            test = f"{cur} {word}"
            bbox = draw.textbbox((0, 0), test, font=font)
            if (bbox[2] - bbox[0]) <= limit_w:
                cur = test
            else:
                lines.append(cur)
                cur = word
        lines.append(cur)
        return lines

    lines = try_wrap(max_width)
    # Re-balance multi-line headings slightly if last line is a short trailing orphan
    if len(lines) == 2 and len(lines[-1].split()) == 1:
        narrowed = try_wrap(int(max_width * 0.78))
        if len(narrowed) == 2:
            lines = narrowed
    if len(lines) > max_lines:
        return None
    return lines


def _draw_centered_lockup(canvas, theme='orange', top_y=60):
    w, _ = canvas.size
    sym_size = 42
    sym_path = (
        'public/pixartual/png/pixartual-symbol-black.png'
        if theme == 'light'
        else 'public/pixartual/png/pixartual-symbol-white.png'
    )
    sym = _load_trimmed_symbol(sym_path, sym_size)

    font_med = ImageFont.truetype('public/fonts/NeutralSans-Medium.ttf', 38)
    font_bold = ImageFont.truetype('public/fonts/NeutralSans-Bold.ttf', 38)

    draw = ImageDraw.Draw(canvas)
    w1 = draw.textlength('Pixartual', font=font_med)
    w2 = draw.textlength('AI', font=font_bold)
    gap = 14
    total_w = sym_size + gap + w1 + w2
    start_x = int(round((w - total_w) / 2))

    canvas.alpha_composite(sym, (start_x, top_y))

    txt_color = (17, 17, 19, 255) if theme == 'light' else (255, 255, 255, 255)
    ai_color = (252, 140, 4, 255) if theme == 'light' else (255, 240, 220, 255)

    # Align cap center of NeutralSans text with symbol vertical center
    ref_box = draw.textbbox((0, 0), 'PixartualAI', font=font_med)
    txt_h = ref_box[3] - ref_box[1]
    txt_y = int(round(top_y + (sym_size - txt_h) / 2 - ref_box[1]))
    txt_x = start_x + sym_size + gap

    draw.text((txt_x, txt_y), 'Pixartual', font=font_med, fill=txt_color)
    draw.text((txt_x + w1, txt_y), 'AI', font=font_bold, fill=ai_color)


def generate_og_card(out_path, title, seed_key, theme='orange', subtitle=None):
    w, h = 1200, 630
    canvas = _make_og_backdrop(w, h, seed_key, theme=theme)
    _draw_centered_lockup(canvas, theme=theme, top_y=64)

    draw = ImageDraw.Draw(canvas)
    headline = title.strip()
    sub_text = subtitle.strip() if subtitle else None

    if not sub_text and len(headline) > 56 and ': ' in headline:
        head_part, tail_part = headline.split(': ', 1)
        if len(head_part) >= 12 and len(tail_part) >= 12:
            headline = head_part.strip()
            sub_text = tail_part.strip()

    # Fit headline font size gracefully from 66px down to 40px
    max_text_w = 940
    chosen_font = None
    chosen_lines = None
    for fsize in range(66, 38, -4):
        cand_font = ImageFont.truetype('public/fonts/NeutralSans-Medium.ttf', fsize)
        lines = _wrap_lines(draw, headline, cand_font, max_text_w, max_lines=3 if not sub_text else 2)
        if lines is not None:
            chosen_font = cand_font
            chosen_lines = lines
            break

    if chosen_font is None:
        chosen_font = ImageFont.truetype('public/fonts/NeutralSans-Medium.ttf', 40)
        chosen_lines = _wrap_lines(draw, headline, chosen_font, max_text_w, max_lines=4) or [headline]

    line_metrics = [draw.textbbox((0, 0), ln, font=chosen_font) for ln in chosen_lines]
    ascent, descent = chosen_font.getmetrics()
    line_step = int(round((ascent + descent) * 1.12))
    head_block_h = line_step * (len(chosen_lines) - 1) + (ascent + descent)

    sub_font = None
    sub_lines = []
    sub_step = 0
    sub_block_h = 0
    sub_gap = 22
    if sub_text:
        sub_font = ImageFont.truetype('public/fonts/NeutralSans-Regular.ttf', 28)
        sub_lines = _wrap_lines(draw, sub_text, sub_font, 860, max_lines=2) or [sub_text]
        sa, sd = sub_font.getmetrics()
        sub_step = int(round((sa + sd) * 1.18))
        sub_block_h = sub_gap + sub_step * (len(sub_lines) - 1) + (sa + sd)

    # Center vertically inside the body zone below top lockup (y=130..575)
    zone_top = 132
    zone_bottom = 572
    total_h = head_block_h + sub_block_h
    cur_y = int(round(zone_top + (zone_bottom - zone_top - total_h) / 2))

    head_color = (20, 20, 22, 255) if theme == 'light' else (255, 255, 255, 255)
    sub_color = (82, 82, 91, 255) if theme == 'light' else (255, 245, 236, 232)

    for idx, ln in enumerate(chosen_lines):
        lw = draw.textlength(ln, font=chosen_font)
        lx = int(round((w - lw) / 2))
        draw.text((lx, cur_y + idx * line_step), ln, font=chosen_font, fill=head_color)

    if sub_text and sub_font is not None:
        sub_y = cur_y + head_block_h + sub_gap
        for idx, ln in enumerate(sub_lines):
            lw = draw.textlength(ln, font=sub_font)
            lx = int(round((w - lw) / 2))
            draw.text((lx, sub_y + idx * sub_step), ln, font=sub_font, fill=sub_color)

    canvas.convert('RGB').save(out_path, format='PNG', optimize=True)


def generate_all_og_images():
    og_posts_dir = 'public/images/og/posts'
    os.makedirs(og_posts_dir, exist_ok=True)

    # Remove stale legacy modulify-named OG files before generating canonical Pixartual OG covers
    for fname in os.listdir(og_posts_dir):
        if 'modulify' in fname.lower():
            os.remove(os.path.join(og_posts_dir, fname))
            print(f"Removed legacy OG asset: {fname}")

    generate_og_card(
        out_path='public/og.png',
        title='Turn Ideas into Interactive Digital Experiences',
        seed_key='pixartual-site-og',
        theme='orange',
        subtitle='Prompt, design, host, and publish without code',
    )
    print(f"Generated public/og.png ({os.path.getsize('public/og.png')} bytes)")

    with open('src/data/posts.json', 'r', encoding='utf-8') as f:
        posts = json.load(f)

    for slug, post in posts.items():
        cover_rel = post.get('cover', '').lstrip('/')
        if not cover_rel:
            continue
        out_path = os.path.join('public', cover_rel)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        theme = 'light' if slug in LIGHT_OG_SLUGS else 'orange'
        generate_og_card(
            out_path=out_path,
            title=post['title'],
            seed_key=slug,
            theme=theme,
        )

    print(f"Generated {len(posts)} Pixartual OG post cover PNGs in {og_posts_dir}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='PixartualAI procedural brand asset generator')
    parser.add_argument('--og-only', action='store_true', help='Only regenerate OpenGraph cover images')
    args = parser.parse_args()

    os.makedirs('public/images', exist_ok=True)
    os.makedirs('public/images/kit', exist_ok=True)

    if not args.og_only:
        generate_cta_bg('public/images/cta-gradient-bg.webp')
        generate_footer_bg('public/images/footer-bg.jpg', dark=False)
        generate_footer_bg('public/images/footer-bg-dark.jpg', dark=True)
        generate_hero_bg('public/images/hero-bg.jpg', dark=False)
        generate_hero_bg('public/images/kit/hero-bg.jpg', dark=False)
        generate_hero_bg('public/images/hero-bg-dark.jpg', dark=True)
        generate_hero_bg('public/images/kit/hero-bg-dark.jpg', dark=True)
        generate_poster('public/images/hero-video-poster.webp')
        generate_corner_glow('public/images/pixartual-bg-left-top.webp')

    generate_all_og_images()
    print("All procedural brand assets generated successfully!")

