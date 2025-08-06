# 🚚 Brison's Moving & Junk Removal – Website

This is the official website for **Brison Culpepper's Moving & Junk Removal**, a local moving and junk removal service based in **Alpharetta, GA**.
The site is designed for speed, SEO, and seamless customer communication — including integration with a custom AI chatbot powered by **n8n**.

---

## 🌟 Features

* **Responsive Next.js site** – optimized for desktop & mobile
* **Service listings** – moving, junk removal, and specialty jobs
* **Contact & booking form** integrated with the chatbot
* **AI-powered intake assistant** via n8n
* **Google Calendar integration** – auto-suggests available slots
* **Google Sheets CRM** – logs all inbound leads, even incomplete
* Hosted on **Vercel** with custom domain
* Secure with **Cloudflare** for DNS + HTTPS

---

## 🛠 Tech Stack

* **Frontend**: [Next.js](https://nextjs.org/)
* **Styling**: TailwindCSS
* **Backend Automations**: [n8n](https://n8n.io/) (self-hosted on Google Cloud Run)
* **Database**: [Neon Postgres](https://neon.tech/) (serverless, pooled)
* **Hosting**: Vercel (frontend), Google Cloud Run (n8n)
* **Integrations**: Google Calendar, Google Sheets
* **Domain & SSL**: Cloudflare

---

## 🚀 Local Development

**Requirements:**

* Node.js
* npm / bun / pnpm / yarn
* Environment variables (see `.env.local.example`)

**Clone the repo:**

```bash
git clone https://github.com/brisonsmoving/brisonsmoving.com.git
cd brisonsmoving.com
```

**Install dependencies:**

```bash
npm install
```

**Run the development server:**

```bash
npm run dev
```

The site will be available at **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Deployment

This repo is connected to **Vercel** under Brison’s account.
When changes are pushed to the `main` branch, Vercel will automatically rebuild and deploy.

**To deploy manually:**

```bash
vercel --prod
```

---

## 🔗 Related Services

* **n8n Automation Backend**
  Hosted at: `https://n8n.brisonsmoving.com`
  Handles lead intake, quoting, Google Sheets logging, and Google Calendar scheduling.

---

## 📌 Maintenance Notes

* Content edits (services, prices, about page) can be done via direct file changes or CMS (if integrated later).
* Keep dependencies updated with `npm update` every few months.
* For DNS or domain settings, manage via Cloudflare.
* For automation workflows, update via the n8n dashboard.
* All secrets and accounts are stored in Bitwarden.

---

## 🧑‍💻 Author

Developed and maintained by **Muhammad Saad / CodeBedouin**.
For inquiries or support, contact **saad@codebedouin.dev**.
