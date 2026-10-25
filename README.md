# ShownLeads — Pay Per Shown Appointment (PPSA) Agency Website

A high-converting, performance-oriented landing page and compliant lead-intake demonstration website for **ShownLeads**, a specialized marketing partner generating qualified sales appointments for US home-service contractors (roofers, custom cabinet remodelers, countertop fabricators, pergola builders, and high-ticket trade professionals).

---

## 1. Commercial Model: Pay Per Shown Appointment (PPSA)

Unlike conventional monthly retainers (which charge regardless of results) or shared lead brokers (which sell unqualified contact info to multiple competitors), **ShownLeads** ties agency performance fees directly to **qualifying sales consultations that actually attend**.

### The 4-Stage Operational Model
1. **Targeted Meta Ads**: Localized Facebook and Instagram campaigns geofenced to the contractor's licensed territory.
2. **Pre-Screening & Qualification**: Property ownership verified; project scope and budget thresholds validated.
3. **Calendar Booking & Confirmations**: Prospects self-schedule into the estimator's calendar with automated multi-channel confirmations.
4. **Verified Attendance (PPSA Trigger)**: The agency fee is earned solely when an agreed qualifying appointment shows up. Zero fee for unverified no-shows or disqualified meetings.

---

## 2. SMS Consent Compliance (TCPA / CTIA / 10DLC)

This application serves as a gold-standard reference implementation for transparent mobile messaging consent:
- **Affirmative Opt-In**: The SMS consent checkbox is **unchecked by default**.
- **Separate & Voluntary**: Submitting an enquiry **does not** require consenting to SMS messages. Contractors can submit inquiries with phone numbers without consenting to automated texts.
- **Mandatory Exact Consent Language**:
  > *"By checking this box, I agree to receive SMS messages from ShownLeads about my enquiry, strategy-call confirmations, and appointment reminders. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a condition of purchase."*
- **Audit Logging**: Successful demo submissions generate a production-ready compliance audit record (`ConsentRecord`), capturing submission ID, UTC timestamp, exact displayed consent wording, consent version, and communication flags.

---

## 3. Demonstration Mode Disclosures

This initial deployment operates in **Safe Demonstration Mode**:
- **Simulated Form Intake**: Validates inputs client-side and formats a structured compliance record without sending outbound texts or making real third-party API calls.
- **No External Appointments Booked**: Clearly informs users upon submission that no real calendar event has been created.
- **No Live Marketing Guarantees**: Does not fabricate client testimonials, fake ROI figures, or claim impossible "100% closing rates".

---

## 4. Tech Stack

- **Framework**: React 19 with Vite & TypeScript
- **Styling**: Tailwind CSS v4 with custom Midnight Navy palette (`#0B1020`, `#111827`, `#263247`, `#3B82F6`, `#22D3EE`)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 5. Local Development Instructions

### Prerequisites
- Node.js 18+ or 20+
- npm or bun

### Setup
```bash
# Clone the repository
git clone <repo-url>
cd shownleads-landing-page

# Install dependencies
npm install

# Start the local development server (port 3000)
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 6. Vercel / Cloud Run Deployment Instructions

### Vercel Deployment
1. Push your repository to GitHub or GitLab.
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Set Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy.

### Production Environment Variables
Create a `.env` file (based on `.env.example`):
```env
# Optional production integration variables
APP_URL=https://your-domain.com
```

---

## 7. Legal Policies Included

- **Privacy Policy**: Accessible via `/privacy` or `#privacy`.
- **Terms & Conditions**: Accessible via `/terms` or `#terms`.
- Both policies include explicit 10DLC disclosures, carrier liability disclaimers, and opt-out instructions.
