"use client";

const NAVY = "#1e3a5f";
const GOLD = "#c9a84c";
const SCHOOL_NAME = "\u00c9COLE PRIV\u00c9E LIBRE LES LUMI\u00c8RES";
const MOTTO = "Excellence et Lumi\u00e8re";
const REGISTRY = "N\u00b0 R\u00e9pertoire : EPL/DOU/2025";
const PHONE = "+237 233 456 789";
const ADDRESS_LINE = "BP 1234, Douala, Cameroun";
const EMAIL = "contact@epl-lumieres.cm";

function getLogoDataUri(): string {
  var parts: string[] = [];
  parts.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">');
  parts.push('<defs>');
  parts.push('<linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">');
  parts.push('<stop offset="0%" stop-color="#2a4a72"/>');
  parts.push('<stop offset="100%" stop-color="' + NAVY + '"/>');
  parts.push('</linearGradient>');
  parts.push('<linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">');
  parts.push('<stop offset="0%" stop-color="#d4b95e"/>');
  parts.push('<stop offset="100%" stop-color="' + GOLD + '"/>');
  parts.push('</linearGradient>');
  parts.push('</defs>');
  parts.push('<path d="M100 10 L180 40 V130 C180 175 145 210 100 230 C55 210 20 175 20 130 V40 Z" fill="url(#shieldGrad)" stroke="' + GOLD + '" stroke-width="3"/>');
  parts.push('<path d="M100 20 L170 46 V128 C170 168 140 200 100 218 C60 200 30 168 30 128 V46 Z" fill="none" stroke="' + GOLD + '" stroke-width="1.5" opacity="0.5"/>');
  parts.push('<line x1="100" y1="5" x2="100" y2="0" stroke="' + GOLD + '" stroke-width="2" stroke-linecap="round"/>');
  parts.push('<line x1="80" y1="10" x2="75" y2="4" stroke="' + GOLD + '" stroke-width="1.5" stroke-linecap="round"/>');
  parts.push('<line x1="120" y1="10" x2="125" y2="4" stroke="' + GOLD + '" stroke-width="1.5" stroke-linecap="round"/>');
  parts.push('<line x1="60" y1="18" x2="52" y2="12" stroke="' + GOLD + '" stroke-width="1" stroke-linecap="round"/>');
  parts.push('<line x1="140" y1="18" x2="148" y2="12" stroke="' + GOLD + '" stroke-width="1" stroke-linecap="round"/>');
  parts.push('<path d="M50 140 L50 110 Q100 95 100 105 L100 135 Q50 150 50 140 Z" fill="white" opacity="0.95"/>');
  parts.push('<path d="M150 140 L150 110 Q100 95 100 105 L100 135 Q150 150 150 140 Z" fill="white" opacity="0.85"/>');
  parts.push('<line x1="100" y1="105" x2="100" y2="140" stroke="' + NAVY + '" stroke-width="1.5"/>');
  parts.push('<line x1="60" y1="115" x2="92" y2="112" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<line x1="60" y1="120" x2="92" y2="117" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<line x1="60" y1="125" x2="92" y2="122" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<line x1="60" y1="130" x2="92" y2="127" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<line x1="108" y1="112" x2="140" y2="115" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<line x1="108" y1="117" x2="140" y2="120" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<line x1="108" y1="122" x2="140" y2="125" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<line x1="108" y1="127" x2="140" y2="130" stroke="' + NAVY + '" stroke-width="0.7" opacity="0.35"/>');
  parts.push('<ellipse cx="100" cy="72" rx="16" ry="20" fill="#f97316" opacity="0.2"/>');
  parts.push('<path d="M100 30 C106 50 120 60 120 78 C120 90 112 97 100 97 C88 97 80 90 80 78 C80 60 94 50 100 30 Z" fill="#f97316" opacity="0.85"/>');
  parts.push('<path d="M100 42 C104 54 112 62 112 74 C112 83 107 88 100 88 C93 88 88 83 88 74 C88 62 96 54 100 42 Z" fill="#fbbf24" opacity="0.9"/>');
  parts.push('<path d="M100 54 C102 62 106 66 106 72 C106 77 103 80 100 80 C97 80 94 77 94 72 C94 66 98 62 100 54 Z" fill="#fef3c7" opacity="0.95"/>');
  parts.push('<circle cx="100" cy="34" r="2" fill="#fef3c7" opacity="0.8"/>');
  parts.push('<line x1="84" y1="55" x2="76" y2="48" stroke="' + GOLD + '" stroke-width="1.2" opacity="0.4" stroke-linecap="round"/>');
  parts.push('<line x1="116" y1="55" x2="124" y2="48" stroke="' + GOLD + '" stroke-width="1.2" opacity="0.4" stroke-linecap="round"/>');
  parts.push('<line x1="88" y1="38" x2="82" y2="30" stroke="' + GOLD + '" stroke-width="1" opacity="0.3" stroke-linecap="round"/>');
  parts.push('<line x1="112" y1="38" x2="118" y2="30" stroke="' + GOLD + '" stroke-width="1" opacity="0.3" stroke-linecap="round"/>');
  parts.push('<line x1="100" y1="28" x2="100" y2="18" stroke="' + GOLD + '" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>');
  parts.push('<text x="100" y="175" text-anchor="middle" fill="' + GOLD + '" font-size="22" font-weight="700" font-family="Georgia, serif" letter-spacing="5">EPL</text>');
  parts.push('</svg>');
  var svg = parts.join("");
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

export function getDocumentHeader(): string {
  var logoUri = getLogoDataUri();
  var F = "font-family:Georgia,'Times New Roman',serif";

  return [
    '<div style="max-width:180mm;margin:0 auto;">',
    '<div style="border-top:4px solid ' + NAVY + ';margin-bottom:12px;"></div>',
    '<div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:10px;">',
    '<img src="' + logoUri + '" alt="Logo EPL" style="width:70px;height:84px;" />',
    '<div style="text-align:center;">',
    '<div style="font-size:22px;font-weight:700;color:' + NAVY + ';margin:0;letter-spacing:0.5px;' + F + ';">' + SCHOOL_NAME + '</div>',
    '<div style="font-size:12px;color:' + GOLD + ';font-style:italic;margin:3px 0 0 0;letter-spacing:1px;' + F + ';">' + MOTTO + '</div>',
    '</div>',
    '</div>',
    '<div style="display:flex;justify-content:space-between;font-size:10px;color:' + NAVY + ';margin-top:6px;' + F + ';">',
    '<span>' + REGISTRY + '</span>',
    '<span>T\u00e9l : ' + PHONE + '</span>',
    '</div>',
    '<div style="text-align:center;font-size:10px;color:#555;margin-top:3px;' + F + ';">',
    ADDRESS_LINE + ' | ' + EMAIL,
    '</div>',
    '<div style="border-bottom:3px double ' + NAVY + ';margin-top:12px;"></div>',
    '</div>',
  ].join("\n");
}

export function getDocumentFooter(): string {
  var F = "font-family:Georgia,'Times New Roman',serif";

  var sigStyle = "text-align:center;width:30%";
  var lineStyle = "border-top:1px solid " + NAVY + ";width:130px;margin:0 auto;padding-top:8px";
  var roleStyle = "font-size:10px;color:" + NAVY + ";" + F;
  var cachetStyle = "width:50px;height:50px;border:2px solid " + NAVY + ";border-radius:50%;margin:8px auto 0;display:flex;align-items:center;justify-content:center;font-size:7px;color:" + NAVY + ";" + F;

  return [
    '<div style="max-width:180mm;margin:40px auto 0;">',
    '<div style="display:flex;justify-content:space-between;margin-top:20px;">',
    '<div style="' + sigStyle + '">',
    '<div style="' + lineStyle + '">',
    '<div style="' + roleStyle + '">Le Directeur</div>',
    '</div>',
    '<div style="' + cachetStyle + '">Cachet</div>',
    '</div>',
    '<div style="' + sigStyle + '">',
    '<div style="' + lineStyle + '">',
    '<div style="' + roleStyle + '">Le Proviseur</div>',
    '</div>',
    '<div style="' + cachetStyle + '">Cachet</div>',
    '</div>',
    '<div style="' + sigStyle + '">',
    '<div style="' + lineStyle + '">',
    '<div style="' + roleStyle + '">Le Comptable</div>',
    '</div>',
    '<div style="' + cachetStyle + '">Cachet</div>',
    '</div>',
    '</div>',
    '<div style="text-align:right;margin-top:20px;font-size:10px;color:' + NAVY + ';' + F + ';">',
    'Fait \u00e0 Douala, le ............. 20.....',
    '</div>',
    '<div style="text-align:center;margin-top:12px;font-size:8px;color:#888;' + F + ';">',
    'Document officiel de l\u2019\u00c9PL Les Lumi\u00e8res',
    '</div>',
    '<div id="page-number-area" style="text-align:center;margin-top:6px;font-size:9px;color:#aaa;' + F + ';"></div>',
    '</div>',
  ].join("\n");
}

export function printDocument(title: string): void {
  var printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Veuillez autoriser les pop-ups pour imprimer.");
    return;
  }

  var header = getDocumentHeader();
  var footer = getDocumentFooter();

  var parts: string[] = [];
  parts.push('<!DOCTYPE html>');
  parts.push('<html><head><title>' + title + '</title>');
  parts.push('<style>');
  parts.push('@page { size: A4; margin: 15mm; }');
  parts.push('@media print { body { margin: 0; } .no-print { display: none !important; } }');
  parts.push('body { font-family: Georgia, \'Times New Roman\', serif; margin: 0; padding: 15mm; color: ' + NAVY + '; font-size: 12px; line-height: 1.5; }');
  parts.push('.header, .footer { max-width: 180mm; margin: 0 auto; }');
  parts.push('.content { margin-top: 24px; margin-bottom: 40px; }');
  parts.push('h1 { font-size: 18px; color: ' + NAVY + '; text-align: center; margin: 20px 0; font-family: Georgia, \'Times New Roman\', serif; }');
  parts.push('@media print { @page { margin: 15mm; } body { padding: 0; } }');
  parts.push('</style></head><body>');
  parts.push('<div class="header">' + header + '</div>');
  parts.push('<div class="content"><h1>' + title + '</h1></div>');
  parts.push('<div class="footer">' + footer + '</div>');
  parts.push('<script>');
  parts.push('window.onload = function() { window.print(); window.onafterprint = function() { window.close(); }; };');
  parts.push('<\/script>');
  parts.push('</body></html>');

  printWindow.document.write(parts.join("\n"));
  printWindow.document.close();
}

export function generatePDF(title: string): void {
  var message = "Pour g\u00e9n\u00e9rer un PDF :\n\n"
    + "1. Cliquez sur Imprimer ou utilisez Ctrl+P\n"
    + "2. Dans le panneau de destination, choisissez \u00ab Enregistrer en PDF \u00bb\n"
    + "3. Cliquez sur Enregistrer\n\n"
    + "Ou utilisez un outil comme le bouton PDF de votre navigateur.";
  alert(message);
}

export function formatSchoolYear(): string {
  return "2025-2026";
}

export function getTrimestre(n: number): string {
  if (n === 1) return "1er Trimestre";
  if (n === 2) return "2\u00e8me Trimestre";
  if (n === 3) return "3\u00e8me Trimestre";
  return n + "\u00e8me Trimestre";
}
