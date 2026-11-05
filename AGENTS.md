# MBA AI Landing Page implementation instructions

This is a **standalone** copy of the Wharton prototype framework, created with explicit user direction. Never introduce a git submodule, npm file dependency, runtime import, CI dependency, or private network dependency on the source framework repository.

The governing architecture and Wharton old-theme design rules are documented in `WHARTON_WEB_PROTOTYPE_FRAMEWORK_CANONICAL_SPEC.md`, `WHARTON_DESIGN_DECISION_FRAMEWORK.md` and `docs/component-handbook.md`. Those references were copied for background. Where a document suggests building sites in the original shared repo, **this project's standalone repo overrides that workflow**.

Site: `sites/mba-ai/`. Run `npm run dev:mba` and `npm run build:mba`. Keep all MBA copy, CTA links, video metadata and imagery references in site-owned JSON wherever possible. Use `old-theme` and the registered patterns. The bespoke `MBAMedia`, `LearningCycle`, and `PardotEmbed` sections are site-specific additions.

All original media is pending editorial approval. Never invent testimonial quotes, conversion figures, application stats or ROI comparisons. Never publish a fake Pardot submission form. Ensure iframes are from approved Salesforce or Wharton video hosts. Use branch/PR review; do not deploy unpublished admissions content to public hosting without approval.
