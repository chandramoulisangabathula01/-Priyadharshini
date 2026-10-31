from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "G-Priyadharshini-Resume.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = A4
NAVY = colors.HexColor("#192a42")
RUST = colors.HexColor("#bd6d50")
SAGE = colors.HexColor("#77886e")
INK = colors.HexColor("#303b4a")
MUTED = colors.HexColor("#68727d")
LINE = colors.HexColor("#d9d8ce")
PAPER = colors.HexColor("#fbfaf5")
LEFT, RIGHT = 48, PAGE_W - 48
WIDTH = RIGHT - LEFT

c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
c.setTitle("G. Priyadharshini | Resume")
c.setAuthor("G. Priyadharshini")
c.setFillColor(PAPER)
c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

# Header
c.setFillColor(NAVY)
c.roundRect(LEFT, PAGE_H - 104, 44, 44, 12, stroke=0, fill=1)
c.setFillColor(colors.white)
c.setFont("Times-Italic", 27)
c.drawCentredString(LEFT + 22, PAGE_H - 90, "P")
c.setFillColor(RUST)
c.circle(LEFT + 36, PAGE_H - 67, 2.5, stroke=0, fill=1)

c.setFillColor(NAVY)
c.setFont("Times-Roman", 28)
c.drawString(LEFT + 58, PAGE_H - 77, "G. Priyadharshini")
c.setFillColor(MUTED)
c.setFont("Helvetica", 9.2)
c.drawString(LEFT + 59, PAGE_H - 94, "ECE STUDENT  /  PYTHON DEVELOPER  /  ASPIRING ISRO PROFESSIONAL")

c.setFillColor(INK)
c.setFont("Helvetica", 8.8)
c.drawRightString(RIGHT, PAGE_H - 65, "priyadharshinigundu@gmail.com")
c.setFillColor(RUST)
c.drawRightString(RIGHT, PAGE_H - 82, "linkedin.com/in/priyadharshini-g-834a5b381")
c.setStrokeColor(LINE)
c.setLineWidth(1)
c.line(LEFT, PAGE_H - 121, RIGHT, PAGE_H - 121)

body = ParagraphStyle("body", fontName="Helvetica", fontSize=8.5, leading=12, textColor=INK, spaceAfter=0)
small = ParagraphStyle("small", parent=body, fontSize=7.8, leading=10.2, textColor=MUTED)


def paragraph(text, x, top, width, style=body):
    p = Paragraph(text, style)
    _, h = p.wrap(width, PAGE_H)
    p.drawOn(c, x, top - h)
    return top - h


def section(label, top):
    c.setFillColor(RUST)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(LEFT, top, label.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    c.line(LEFT + 92, top + 2, RIGHT, top + 2)
    return top - 14


def item(title, subtitle, description, x, top, width, status=None):
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(x, top, title)
    if status:
        c.setFillColor(SAGE if status == "COMPLETED" else RUST)
        c.setFont("Helvetica-Bold", 6.4)
        c.drawRightString(x + width, top + 0.5, status)
    y = paragraph(subtitle, x, top - 4, width, small)
    if description:
        y = paragraph(description, x, y - 4, width, small)
    return y


y = PAGE_H - 148
y = section("Profile", y)
y = paragraph(
    "Second-year B.Tech Electronics and Communication Engineering student at SR University, graduating in 2029. Curious about electronics, Python-based web development, practical circuit design, and the role of communication systems in space exploration.",
    LEFT, y, WIDTH,
) - 13

y = section("Education", y)
y = item("Bachelor of Technology (B.Tech)", "Electronics and Communication Engineering  |  SR University", "Second year  ·  Expected graduation: 2029", LEFT, y, WIDTH) - 13

y = section("Recognition & learning", y)
y = item("Semester Topper", "SR University  |  Semesters 1 and 2", "Completed more than 15 online course certificates.", LEFT, y, WIDTH) - 13

y = section("Skills", y)
skills_left = "<b>Programming</b>  Python; web development<br/><b>Electronics</b>  Basic electronics; circuit design; electronic circuit analysis; RC coupled amplifier"
skills_right = "<b>Currently learning</b>  Advanced circuit design; Hartley oscillator; practical electronics<br/><b>Working style</b>  Communication; teamwork; problem-solving; determination; adaptability; continuous learning"
col_gap = 28
col_w = (WIDTH - col_gap) / 2
left_end = paragraph(skills_left, LEFT, y, col_w, small)
right_end = paragraph(skills_right, LEFT + col_w + col_gap, y, col_w, small)
y = min(left_end, right_end) - 13

y = section("Selected projects", y)
project_gap = 26
project_w = (WIDTH - project_gap) / 2
left_x, right_x = LEFT, LEFT + project_w + project_gap
left_y = item("Smart blind stick", "Assistive technology", "Designed to support safer, more independent navigation for people with visual impairments.", left_x, y, project_w, "COMPLETED") - 10
left_y = item("RC coupled amplifier", "Academic circuit project", "Explored amplifier fundamentals, components, and coupled-stage behavior.", left_x, left_y, project_w, "COMPLETED")
right_y = item("Python-based website development", "Backend and web applications", "Building websites with Python while learning how server-side code supports web experiences.", right_x, y, project_w, "IN PROGRESS") - 10
right_y = item("Hartley oscillator", "Oscillator design and signal generation", "Studying circuit operation and practical analysis.", right_x, right_y, project_w, "IN PROGRESS")
y = min(left_y, right_y) - 13

y = section("Career direction", y)
y = paragraph(
    "Aspires to become an ISRO professional and contribute to India's space exploration. Particularly interested in how electronics and communication engineering help space missions reach farther. Motivated by family, continuous learning, and the belief: <i>Dream big. Stay curious. Never give up.</i>",
    LEFT, y, WIDTH,
) - 13

y = section("Interests", y)
paragraph("Reading  ·  Visiting historical places and temples  ·  Learning about discoveries and events around the world", LEFT, y, WIDTH, small)

c.setStrokeColor(LINE)
c.line(LEFT, 36, RIGHT, 36)
c.setFillColor(MUTED)
c.setFont("Helvetica", 7)
c.drawString(LEFT, 23, "G. PRIYADHARSHINI  ·  B.TECH ECE  ·  SR UNIVERSITY")
c.setFillColor(RUST)
c.drawRightString(RIGHT, 23, "DREAM BIG. STAY CURIOUS. NEVER GIVE UP.")
c.save()
print(OUT)
