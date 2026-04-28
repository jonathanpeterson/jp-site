#### Problem
	Modern knowledge work is interruption-driven. Every context switch costs recovery time, but the real cost is invisible: the loss of the state you were in before the interruption. To-do lists record tasks but not context. Note apps capture thoughts but not the stack. There is no tool designed around the simple reality that most work happens in layers — you were in the middle of something when something else demanded your attention.
#### Solution
	PopLife is a personal interruption manager built around a **stack metaphor**. When you get interrupted, you PUSH. When you finish and return, you POP. The stack is your live working memory — visible, navigable, and persistent.

 Three verbs do everything:

 | Verb | Meaning |
 |------|---------|
 | **PUSH** | I am being interrupted. Capture where I am so I can go handle it. |
 | **POP** | I am done with the top frame. Mark how it ended and return to what I was doing. |
 | **PLAN / DELEGATE / DROP** | Exit types for POP — how the frame resolved. |

 A fourth escape hatch (defer to GTD/calendar) exists for items that are not interruptions but future
 commitments. PopLife does not try to be a task manager.

#### Design Principles
- **Capture is the product.** Speed of PUSH matters more than richness of metadata
- **Stack depth is signal.** At depth 5, the app alerts — not as an error, but as a question: *are you context-switching too much?*
 - **Markdown is the data layer.** Every stack frame is a plain markdown file with YAML frontmatter.
 - No proprietary format. No lock-in. Obsidian can open, edit, and search the entire stack history natively.
 - **AI assists, it doesn't run.** The desktop interface (Claude Code) can help compose POP notes, surface patterns, and suggest when to drop rather than return. The mobile interface has no AI — just fast capture.

#### Architecture

 ### Mobile (MVP target)
 - **React Native / Expo** — cross-platform iOS + Android
 - **Voice or text capture** — braindump on PUSH, minimal friction
 - **Local filesystem** — frames written as `.md` files to device document directory
 - **No AI agent** — speed and simplicity first

 ### Desktop
 - **Claude Code as the interface** — conversational PUSH/POP with AI assistance
 - **Obsidian vault as state store** — the same markdown files, fully editable
 - **Claude reads frame history** — can answer "what was I working on?", help write POP notes, flag
 depth patterns

 ### Shared data format
 ```
 ---
 id: frame-20260310-143022
 pushed_at: 2026-03-10T14:30:22Z
 popped_at: null
 depth: 2
 status: active
 exit_type: null
 ---
 # Working on ATL Reader feed filtering
 Mid-way through GPB source update. Feed URL changed to /news/georgia/rss.xml.
 Next step: verify new articles are appearing in politics category.
 ```

 Files sync between mobile and desktop via iCloud or any file sync service that Obsidian supports.
 ---

 ## MVP Scope

 **In:**
 - PUSH with title + optional body
 - POP with exit type (completed / delegated / dropped)
 - Active stack view with current frame highlighted
 - Depth alert at 5
 - Persistent markdown files (Obsidian-compatible)
 - iOS via Expo Go for initial validation

 **Out (post-MVP):**
 - Voice transcription
 - Claude / AI integration
 - Obsidian plugin
 - Android optimization
 - Sync conflict resolution
 - History / analytics view

 ---

 ## Success Criteria

 The MVP is working when:
 1. A user can PUSH a frame in under 5 seconds
 2. A user can POP with exit type in 2 taps
 3. Stack state survives app restart
 4. Stack files are readable in Obsidian without modification
 5. The depth alert fires correctly at 5 frames
