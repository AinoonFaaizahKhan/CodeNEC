# Space Biology Knowledge Engine - Design Guidelines

## Design Approach: Research-Focused Data Application

**Selected Approach:** Design System (Carbon Design + Scientific Platform Patterns)

**Rationale:** This is a data-intensive research tool requiring clarity, credibility, and efficiency. Drawing inspiration from IBM Carbon Design System, NASA's digital interfaces, and research platforms like ResearchGate and Google Scholar to create a professional, trustworthy environment for scientific work.

**Core Principles:**
- Information clarity over visual decoration
- Scientific credibility through restrained, professional design
- Efficient data access and visualization
- Role-appropriate information architecture

---

## Color Palette

**Light Mode (Primary):**
- Primary: 210 100% 45% (Deep space blue - professional, scientific)
- Surface: 0 0% 100% (Pure white backgrounds)
- Surface Secondary: 210 20% 97% (Subtle gray for cards/panels)
- Text Primary: 220 15% 20% (Near-black for optimal readability)
- Text Secondary: 220 10% 50% (Medium gray for metadata)
- Border: 220 15% 88% (Subtle dividers)
- Success: 142 70% 45% (Scientific discovery green)
- Warning: 38 95% 55% (Data alert orange)
- Error: 0 70% 50% (Critical red)

**Dark Mode:**
- Primary: 210 95% 60% (Brighter blue for dark backgrounds)
- Surface: 220 15% 12% (Deep charcoal)
- Surface Secondary: 220 12% 16% (Elevated panels)
- Text Primary: 0 0% 95% (Off-white)
- Text Secondary: 220 5% 70% (Muted gray)
- Border: 220 12% 24% (Subtle dark dividers)

**Accent Colors (Data Visualization):**
- Chart 1: 210 100% 55% (Primary blue)
- Chart 2: 142 60% 50% (Green)
- Chart 3: 280 65% 60% (Purple)
- Chart 4: 38 90% 60% (Orange)
- Chart 5: 340 75% 55% (Red)

---

## Typography

**Font Families:**
- Primary: 'Inter' (body text, UI elements) - exceptional readability for data-dense interfaces
- Secondary: 'JetBrains Mono' (code, publication IDs, technical data) - monospaced for precision
- Display: 'Inter' with increased tracking (headings)

**Type Scale:**
- Display (h1): text-4xl lg:text-5xl, font-bold, tracking-tight
- Heading 1 (h2): text-3xl lg:text-4xl, font-semibold
- Heading 2 (h3): text-2xl lg:text-3xl, font-semibold
- Heading 3 (h4): text-xl lg:text-2xl, font-medium
- Body Large: text-base lg:text-lg, font-normal
- Body: text-sm lg:text-base, font-normal
- Small/Meta: text-xs lg:text-sm, font-normal
- Caption: text-xs, font-medium, uppercase, tracking-wide

**Reading Optimization:**
- Maximum line width for text content: max-w-3xl (optimal reading ~75 characters)
- Line height: leading-relaxed (1.625) for body text
- Paragraph spacing: space-y-4

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 24 for consistency

**Grid Structure:**
- Container: max-w-7xl mx-auto px-4 lg:px-8
- Dashboard Grid: 12-column grid (grid-cols-12)
- Card Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Sidebar Layout: 64-unit fixed sidebar + flexible main content

**Section Spacing:**
- Between major sections: py-12 lg:py-16
- Card padding: p-6 lg:p-8
- Component spacing: space-y-6 lg:space-y-8

**Responsive Breakpoints:**
- Mobile-first approach
- Key breakpoints: md (768px), lg (1024px), xl (1280px)

---

## Component Library

### Navigation
**Top Navigation Bar:**
- Fixed header, h-16, with logo, role indicator, search, user menu
- Background: Surface with border-b
- Search bar: Prominent, expandable, with keyboard shortcuts (⌘K)
- Role switcher: Pill-style toggle for switching between Scientist/Manager/Mission Architect views

**Sidebar (Dashboard View):**
- w-64, sticky positioning
- Sections: Quick Filters, Recent Publications, Saved Searches, Knowledge Graph Access
- Collapsible on mobile

### Cards & Containers
**Publication Card:**
- Border, rounded-lg, hover:shadow-lg transition
- Header: Title (font-semibold), Publication ID (mono font)
- Metadata row: Date, Mission, Experiment Type (text-sm, text-secondary)
- AI Summary preview: 2-3 lines with "Read more" expansion
- Footer: Tags, Actions (Save, Share, View Details)

**Dashboard Panel:**
- Elevated surface (Surface Secondary background)
- Rounded corners (rounded-xl)
- Consistent padding (p-6 lg:p-8)
- Header with icon + title + action menu

**Data Visualization Container:**
- Full-width or constrained based on chart type
- White/dark background with subtle border
- Chart title, legend, and interactive controls clearly separated
- Export and full-screen options in top-right

### Forms & Inputs
**Search Bar:**
- Large, prominent input (h-12)
- Icon prefix, placeholder "Search 608 publications..."
- Advanced filter button (pills/tags display below)
- Autocomplete dropdown with keyboard navigation

**Filter Controls:**
- Multi-select dropdowns for: Mission, Experiment Type, Date Range, Keywords
- Active filters displayed as removable pills below search
- "Clear all filters" action

**Text Inputs:**
- Consistent height (h-10), rounded-md
- Clear focus states with primary color ring
- Label above input (text-sm, font-medium)
- Helper text below (text-xs, text-secondary)

### Buttons
**Primary Action:** bg-primary, text-white, hover:brightness-110, px-6, py-2.5, rounded-lg, font-medium
**Secondary Action:** border, border-primary, text-primary, hover:bg-primary/5, same dimensions
**Tertiary/Ghost:** text-primary, hover:bg-primary/5, px-4, py-2
**Icon Button:** Circular, w-10 h-10, centered icon, hover state

### Data Display
**Table View (Publications List):**
- Striped rows for readability
- Sortable columns with arrow indicators
- Row hover state with subtle highlight
- Sticky header on scroll
- Compact mode toggle for dense data

**Knowledge Graph Visualization:**
- Full-width container with dark background option
- Node colors by category (Experiment Type, Mission, Result Type)
- Interactive: zoom, pan, click to focus
- Legend panel (collapsible)
- Minimap in corner for navigation

**Trend Charts (Manager Dashboard):**
- Use Recharts or Plotly for consistency
- Line charts for temporal trends
- Bar charts for categorical comparisons
- Scatter plots for correlations
- Consistent color palette from accent colors

**Statistics Cards:**
- Grid layout: 2x2 on desktop, stacked on mobile
- Large number display (text-4xl, font-bold)
- Label below (text-sm, uppercase, tracking-wide)
- Trend indicator (arrow + percentage, colored)

### Role-Specific Components
**Scientist View:**
- Split view: Publication list (left 40%) + Detail panel (right 60%)
- Annotation sidebar with highlights and notes
- Related publications section with connection strength

**Manager Dashboard:**
- Top: 4 KPI cards (Total Publications, Knowledge Gaps, Active Missions, Consensus Rate)
- Middle: Trend charts in 2-column grid
- Bottom: Recent reports table

**Mission Architect View:**
- Mission selector (large pills/cards with images)
- Actionable insights cards with priority badges
- Export panel with format options and filters

### Overlays & Modals
**Publication Detail Modal:**
- Full-screen overlay on mobile, centered large modal on desktop
- Tabbed interface: Summary, Full Text, Connections, Citations
- Close button (top-right), keyboard ESC support
- Scrollable content area

**Report Export Dialog:**
- Centered modal, max-w-2xl
- Format selection (PDF, CSV, JSON)
- Data range and filter options
- Progress indicator during export

---

## Visual Treatments

**Shadows:**
- Card rest: shadow-sm
- Card hover: shadow-lg
- Modal/dropdown: shadow-xl
- Use sparingly for hierarchy

**Borders:**
- Default: 1px solid border color
- Emphasis: 2px for active states
- Rounded corners: rounded-lg for cards, rounded-md for inputs

**Icons:**
- Use Heroicons (outline for default, solid for active states)
- Consistent size: w-5 h-5 for inline, w-6 h-6 for prominent
- Color matches text color in context

**Loading States:**
- Skeleton screens matching final layout
- Pulse animation (animate-pulse)
- Progress bars for known-duration tasks

**Empty States:**
- Centered content with illustrative icon
- Helpful message and suggested action
- Example: "No publications found. Try adjusting your filters."

---

## Animations

**Use Sparingly:**
- Smooth transitions for hover states (transition-all duration-200)
- Fade-in for modal/dropdown appearances (opacity transition)
- Slide-in for sidebars (transform transition)
- NO complex scroll animations or unnecessary motion

---

## Images

**Hero Section:** No traditional hero image - this is a data application, not a marketing site. Instead, lead with functional dashboard immediately upon login.

**Optional Background Graphics:**
- Subtle constellation/space-themed pattern in page backgrounds (low opacity, non-distracting)
- Mission logos/badges in Mission Architect view
- Small author/institution thumbnails in publication cards (if available)

**Visualization Primacy:** Let data visualizations (charts, graphs, knowledge graph) serve as the visual interest rather than decorative imagery.

---

## Accessibility & Dark Mode

- All interactive elements meet WCAG AA contrast ratios
- Keyboard navigation fully supported (Tab, Enter, ESC, arrow keys)
- ARIA labels for all icons and screen reader support
- Dark mode toggle in user menu, persisted to localStorage
- Consistent dark mode implementation across all components including form inputs