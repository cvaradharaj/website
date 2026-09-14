import pathlib
from playwright.sync_api import sync_playwright

repo = pathlib.Path(r"C:\Users\gajen\website.worktrees\homepage-content-updates-global-engagement")
html_path = repo / "marketing" / "brochure" / "brochure.html"
pdf_path = repo / "marketing" / "brochure" / "Control-Standards-Brochure.pdf"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(html_path.resolve().as_uri())
    page.wait_for_timeout(500)
    page.pdf(
        path=str(pdf_path),
        format="A4",
        print_background=True,
        margin={"top": "0", "bottom": "0", "left": "0", "right": "0"},
    )
    browser.close()

print("PDF written to", pdf_path, "size", pdf_path.stat().st_size)
