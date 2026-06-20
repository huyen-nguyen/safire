/* ==================================================================
   ▸▸▸  EDIT ONLY THIS FILE  ◂◂◂
   This is the entire content of your page. Fill in your specifics
   below and the site builds itself. You shouldn't need to touch the
   HTML or CSS at all.

   RULES
   - Leave a value as an empty string ""  to HIDE it.
     (e.g. no PubMed entry yet?  pubmed: ""  → the button disappears)
   - Keep the quotes and commas exactly as shown.
   - Lists (authors, highlights, gifs) can have any number of items —
     just add or remove blocks following the same pattern.
   ================================================================== */

const CONFIG = {

  /* ---------- 0. LOOK & FEEL  (leave any value "" to keep the default) */
  theme: {
    colorMain:   "#1a3e96",       // burgundy brand colour (matches site title)
    colorMainDark:   "#202f80",
    colorSecondary:   "#6c1f2d",
    colorAccent: "#8d283a",       // hover/accent burgundy
  },

  /* ---------- 0b. BRAND LOGO  (optional) ------------------------------ */
  // Put an image in assets/ to replace the default coloured mark in the
  // header + footer. `link` is where clicking the logo/title takes you.
  brandLogo: {
    src:  "assets/safire_logo.svg",            // e.g. "assets/logo.svg"   ("" keeps the default mark)
    link: "#",        // e.g. "https://your-lab.org"  (default: back to top)
    alt:  "Safire",
  },

  /* ---------- 1. PAPER ---------------------------------------- */
  brand:        "Safire",                 // short name in nav + footer
  badge:        "IEEE VIS 2025", // small pill above title
  title:        'Safire: Similarity Framework for ',
  titleEm:      'Visualization Retrieval',
  tagline:      "A conceptual framework for defining visualization similarity in retrieval systems by organizing *what* to compare (criteria) and *how* comparisons are performed (representation modalities).",
  venue:        "IEEE Visualization and Visual Analytics (VIS)",
  year:         "2025",
  doi:          "10.1109/VIS60296.2025.00055",

  /* ---------- 2. AUTHORS -------------------------------------- */
  // `aff` lists the affiliation numbers (see `affiliations` below).
  // Any link left "" is hidden for that author.
  authors: [
    { name: "Huyen N. Nguyen",   aff: [1],    website: "https://huyennguyen.com/", scholar: "https://scholar.google.com/citations?user=tsrO-ZgAAAAJ&hl=en", orcid: "https://orcid.org/0000-0001-6554-2327" },
    { name: "Nils Gehlenborg", aff: [1], website: "https://hidivelab.org/team/members/nils-gehlenborg/", scholar: "https://scholar.google.com/citations?user=YEcBVFAAAAAJ&hl=en", orcid: "https://orcid.org/0000-0003-0327-8297"},
  ],
  affiliations: [
    "Harvard Medical School, Harvard University",   // 1
  ],

  /* ---------- 3. LINKS  (leave "" to hide the button) --------- */
  links: {
    // The main preprint link used by the "Download preprint" buttons AND, by
    // default, by the PDF Preprint viewer below. It can be:
    //   • an arxiv link   -> "https://arxiv.org/pdf/2407.20571"  (embeds natively)
    //   • an OSF link     -> "https://osf.io/preprints/osf/zatw9_v7"  (see note in §10)
    //   • a local file    -> "assets/preprint.pdf"
    pdf:        "https://arxiv.org/pdf/2510.16662",
    code:       "",   // GitHub repository
    data:       "",
    pubmed:     "https://pubmed.ncbi.nlm.nih.gov/42292323/",
    pubmedCentral:     "https://pmc.ncbi.nlm.nih.gov/articles/PMC13260569/",
    ieeexplore: "https://ieeexplore.ieee.org/abstract/document/11298749",   // IEEE Xplore publication page
    ieeevis:    "https://ieeevis.org/year/2025/program/paper_ba183a14-a911-4177-8f18-c35ee2220c67.html",   // IEEE VIS 2026 presentation details
    ismb:       "",
    supplement: "",
    video:      "https://youtu.be/-r69u3gOTsk?si=rEp5X5uc3F8qz3Gm&t=4161",
    license:    "",   // license link used in footer

    // Leave "" to just use `pdf`.
    // OPTIONAL override for ONLY the embedded viewer. Set this to a local copy when the remote host won't embed
    // (e.g. OSF), e.g. "assets/preprint.pdf".
    preprintPdf: "", // local file
  },

  /* ---------- 4. ABSTRACT  (one string per paragraph) -------- */
  abstract: [
    "Effective visualization retrieval necessitates a clear definition of similarity. Despite the growing body of work in specialized visualization retrieval systems, a systematic approach to understanding visualization similarity remains absent. We introduce the Similarity Framework for Visualization Retrieval (Safire), a conceptual model that frames visualization similarity along two dimensions: comparison criteria and representation modalities. Comparison criteria identify the aspects that make visualizations similar, which we divide into primary facets (data, visual encoding, interaction, style, metadata) and derived properties (data-centric and human-centric measures). ",
    "Safire connects what to compare with how comparisons are executed through representation modalities. We categorize existing representation approaches into four groups based on their levels of information content and visualization determinism: raster image, vector image, specification, and natural language description, together guiding what is computable and comparable. We analyze several visualization retrieval systems using Safire to demonstrate its practical value in clarifying similarity considerations. Our findings reveal how particular criteria and modalities align across different use cases. Notably, the choice of representation modality is not only an implementation detail but also an important decision that shapes retrieval capabilities and limitations. Based on our analysis, we provide recommendations and discuss broader implications for multimodal learning, AI applications, and visualization reproducibility.\n",
  ],

  /* ---------- 5. CITATION ------------------------------------- */
  bibtex:
      `@INPROCEEDINGS{nguyen2025safire,
  author={Nguyen, Huyen N. and Gehlenborg, Nils},
  booktitle={2025 IEEE Visualization and Visual Analytics (VIS)}, 
  title={Safire: Similarity Framework for Visualization Retrieval}, 
  year={2025},
  pages={246-250},
  doi={10.1109/VIS60296.2025.00055}}
}`,

  /* ---------- 6a. TEASER FIGURE  (shown under Highlights) ----- */
  teaser: {
    src:     "assets/teaser.png",   // e.g. "assets/teaser.png"   ("" hides it)
    alt:     "System overview of Safire",
    caption: "Safire characterizes  comparison  criteria  determining **what** aspects  of  visualizations  should  be  compared, while representation modalities define **how** these visualizations are represented for comparison. Visualization determinism: the degree to which a representation format guarantees a single, consistent visual rendering",
  },
  /* ---------- 6b. HIGHLIGHTS  (cards; add/remove freely) ------- */

  highlights: [
    { title: "Scales to millions of features", text: "GPU-accelerated rendering with level-of-detail aggregation keeps interaction fluid on datasets that overwhelm conventional tools." },
    { title: "Perceptually grounded encodings", text: "Color, position, and density mappings are chosen from perceptual research to minimise misreading and maximise signal." },
    { title: "Open & extensible", text: "A documented plugin API lets researchers add custom views and integrate VizName into existing analysis pipelines." },
    // { title: "Validated with experts", text: "A controlled study with domain scientists shows faster, more accurate pattern discovery versus baseline tools." },
  ],

  /* ---------- 6c. ABOUT THE NAME  (note under Highlights; "" hides it) */
  aboutName:
      "Geranium stands for ***s**calable, open-source f**ra**mework that turns mill**i**ons of genomic features* into interpretable visual insights, helping researchers find really cool patterns. The logo is drawn with illustrator.",

  /* ---------- 7. DEMO ----------------------------------------- */
  demo: {
    youtubeId: "-r69u3gOTsk", start: 4161      // just the id, e.g. "dQw4w9WgXcQ"  ("" hides the player)
  },

  /* ---------- 8. LOGOS  (institutional / conference) ---------- */
  // Add { src, alt, link } image objects (link is optional).
  // Empty list = show placeholder slots.
  // logos: [
  //   { src: "https://hms.harvard.edu/themes/shared/harvardmedical/logo.svg", alt: "Harvard Medical School", link: "https://hms.harvard.edu/" },
  //   { src: "assets/hidivelogo.png", alt: "HIDIVE Lab", link: "https://hidivelab.org/" },
  // ],

  /* ---------- 9. FOOTER / CONTACT ----------------------------- */
  contactEmail:    "huyen@harvard.edu",
  contactNote:     "Harvard University",
  copyrightHolder: "The Authors",
  licenseName:     "CC BY 4.0",
  conferenceName:  "IEEE VIS 2026",   // shown in footer ("Built for ...")

  /* ---------- 10. PDF PREPRINT VIEWER ------------------------- */
  // Controls how the "PDF Preprint" section (after the Demo) renders the file
  // from links.pdf (or links.preprintPdf if set). Options:
  //   "auto"   (default) – arxiv & local files embed directly; OSF links are
  //                        routed through Google's Docs Viewer so they display
  //                        instead of forcing a download.
  //   "direct" – always use a plain <iframe> (best quality; arxiv + local files).
  //   "google" – always route through Google's Docs Viewer (use for any host
  //              that refuses to be framed).
  //
  // NOTES
  //   • arxiv: works out of the box — paste either the /abs/ or /pdf/ link.
  //   • OSF:   paste the preprint page link (e.g.
  //              "https://osf.io/preprints/osf/zatw9_v7")
  //            and leave this on "auto". The viewer converts it to the OSF
  //            download URL and shows it via the Docs Viewer. This is best-effort
  //            (depends on Google's viewer + a public file). If it doesn't render,
  //            download the PDF into assets/ and set links.preprintPdf to it.
  preprintViewer: "direct",
};