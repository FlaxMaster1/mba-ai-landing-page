/** Shared click/keyboard behavior for hover-capable flip cards. */
export function initializeFlipCards(): void {
  document.querySelectorAll<HTMLButtonElement>(".p-capability-card__button").forEach((button) => {
    if (button.dataset.flipInitialized) return;
    button.dataset.flipInitialized = "true";
    button.addEventListener("click", () => {
      button.setAttribute("aria-pressed", String(button.getAttribute("aria-pressed") !== "true"));
    });
  });
}
