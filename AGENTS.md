# APES CIC Agents

This private repository is used by the APES CIC development team to support work on our websites and related internal web systems.

## Purpose

The repository provides a central place for team-only development resources, agent instructions, prompts, configuration notes, workflow guidance, and supporting material used when maintaining or improving APES CIC websites.

It is intended to help authorised team members work consistently, safely, and efficiently across website development tasks.

## Intended users

This repository is for private use by APES CIC team members and authorised development contributors only. It is not intended for public use, external distribution, or client-facing documentation.

## Typical contents

This repository may include:

* Internal development guidance
* Website support notes
* Agent and automation instructions
* Prompt templates and workflow references
* Private operational notes for development tasks
* Supporting documentation for APES CIC web systems

## AGENTS.md status

`GitHub Agent/AGENTS.md` and `Codex Agent/AGENTS.md` are the current APES CIC working instruction files for repository governance and Codex website implementation work.

They are aligned with APES CIC website release-management expectations and should be treated as the central agent instruction set for APES CIC website work.

The files now define:

* Website files are stored in the root-level `/public/` folder unless repository-specific documentation says otherwise.
* Website work must follow APES CIC versioning, changelog, Change Log Hub, README and GitHub Issue update requirements.
* Codex must verify the current version, Change Log Hub, changelog, README current-release notes, generated-output and issue requirements at the start of planning.
* Change Log Hub entries should follow the `www.apes.org.uk` structure, including version pills, status pills, summary, detailed changes, affected areas, version decision, validation, limitations and rollback notes.
* APES website versioning uses `vMAJOR.MINOR.PATCH` for stable releases and `vMAJOR.MINOR.PATCHb` while a website is in beta.
* Every qualifying website change must have a matching changelog entry and version decision, and all canonical version records must stay aligned.
* APES website brand and feature standards apply to all APES websites, division websites, microsites, intranet pages, portals and static website exports.
* Every APES website footer must include donation, Privacy Policy, Terms of Service and Change Log Hub links.
* APES Newsroom remains the central public destination for news, announcements and updates.

## Recent AGENTS.md changes

The latest update added Change Log Hub and versioning guidance to both managed agent instruction files.

### Added

* Start-of-planning version and Change Log Hub verification requirements.
* A reusable Change Log Hub entry template based on the `www.apes.org.uk` release-record structure.
* Required pill styling classes for version, status, type, fix, accessibility and compliance labels.
* APES semantic versioning rules for major, minor, patch, beta and stable releases.
* Stronger final-response requirements covering Change Log Hub, root changelog, public changelog, version files, README current-release notes and generated release output.

### Changed

* The GitHub agent file now includes a dedicated release-record governance workflow before GitHub audit-trail guidance.
* The Codex agent file now requires release-state verification before implementation planning and file edits.
* The primary website rule now explicitly treats Change Log Hub, versioning and mirrored changelog updates as mandatory release-management checks.
* The final response requirements now ask agents to report version and release-record sync status, not just generic changelog status.

### Preserved

* Existing APES CIC website compliance, SEO, sitemap, Newsroom, footer and error-page requirements.
* The distinction between the GitHub agent's repository-governance role and the Codex agent's implementation workflow role.
* The rule that agents must not invent repository facts, version numbers, routes, deployment steps or issue numbers.

## Maintenance rule

When either managed `AGENTS.md` file changes, update this README so team members can quickly understand what changed, why it matters and how it affects website work.

When the Website Repo Template `AGENTS.md` is updated, review whether this repository should be synchronised again.

## Use and confidentiality

All content in this repository should be treated as internal APES CIC material. Do not share, copy, publish, or reuse repository content outside authorised APES CIC work without approval.

Team members should ensure that any changes are accurate, relevant, and aligned with APES CIC's internal processes, data protection requirements, and website governance standards.

## Contribution guidance

When adding or updating content:

1. Keep documentation clear, current, and practical.
2. Avoid storing unnecessary personal data or sensitive credentials.
3. Use plain language so other team members can follow the guidance easily.
4. Keep website-specific instructions organised by system, workflow, or purpose where possible.
5. Review changes before committing to reduce ambiguity or outdated guidance.
6. Keep `AGENTS.md` and this README aligned when website agent instructions change.

## Repository status

Private internal repository maintained for APES CIC development team use.