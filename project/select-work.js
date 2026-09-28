const projects = [
  {
    title: "LEAD-TO-CLIENT PIPELINE AUTOMATION",
    category: "Business Systems & Operations",
    image: "../assets/image/project/Lead-to-client.png",
    alt: "Lead-to-client pipeline automation system",
    description:
      "Automated lead capture, nurturing, and Marketing → Sales handoff built around a GoHighLevel pipeline.",
    tags: ["GoHighLevel", "Lead Nurturing", "Sales Handoff"],
    tools: ["GoHighLevel", "Google Calendar", "Email Automation"],
    focus: "Lead capture, nurturing, and Marketing → Sales handoff",
    proof: "Recreated with fictional branding and data.",
    projectLink: "#",
    contactLink: "../contact.html",
  },

  {
    title: "SAAS CRM APPOINTMENT FUNNEL",
    category: "Business Systems & Operations",
    image: "../assets/image/project/SaaS-crm.jpg",
    alt: "SaaS CRM appointment funnel",
    description:
      "Appointment funnel system connecting lead capture, booking, follow-up, and show-up processes.",
    tags: ["Funnel Solutions", "Appointment Flow", "CRM Automation"],
    tools: ["GoHighLevel", "SOP Documentation", "Email", "Google Calendar"],
    focus: "Appointment flow, automation, follow-up, and show-up process",
    proof: "Recreated using a fictional SaaS/agency brand.",
    projectLink: "#",
    contactLink: "../contact.html",
  },

  {
    title: "GOHIGHLEVEL → QUICKBOOKS INTEGRATION",
    category: "Business Systems & Operations",
    image: "../assets/image/project/ghl-quickbooks.jpg",
    alt: "GoHighLevel to QuickBooks integration workflow",
    description:
      "Automated invoicing workflow connecting GoHighLevel with QuickBooks through Pabbly Connect.",
    tags: ["Pabbly Connect", "QuickBooks", "System Integration"],
    tools: ["GoHighLevel", "Pabbly Connect", "QuickBooks"],
    focus: "Automated invoicing and system integration",
    proof:
      "Presented as a neutral integration diagram without client accounting information.",
    projectLink: "#",
    contactLink: "../contact.html",
  },

  {
    title: "SIGNED CONTRACT → CLIENT ONBOARDING",
    category: "Business Systems & Operations",
    image: "../assets/image/project/sign-contract.jpg",
    alt: "Signed contract to client onboarding automation",
    description:
      "Automated onboarding workflow triggered when a client contract is signed, using tags, email templates, and workflow logic.",
    tags: ["Client Onboarding", "Workflow Automation", "GoHighLevel"],
    tools: ["GoHighLevel", "Email Templates", "Tagging Rules"],
    focus: "Turning a signed contract into an automated onboarding workflow",
    proof: "Recreated with fictional client and team information.",
    projectLink: "#",
    contactLink: "../contact.html",
  },

  {
    title: "FACEBOOK PAGE → SALES & LEAD GENERATION",
    category: "Creative Design",
    image: "../assets/image/project/facebook-page.jpg",
    alt: "Facebook page sales and lead generation system",
    description:
      "Customer-facing Facebook Page designed as an entry point for awareness, engagement, and lead generation.",
    tags: ["Creative Design", "Lead Generation", "Meta"],
    tools: ["Facebook", "Meta"],
    focus: "Awareness, engagement, and lead generation",
    proof:
      "Recreated using a fictional brand without exposing the original client's identity.",
    projectLink: "#",
    contactLink: "../contact.html",
  },
];

const projectsGrid = document.getElementById("projects-grid");

projectsGrid.innerHTML = projects
  .map(
    (project) => `
    <article
        class="bg-navy-card rounded-2xl overflow-hidden border border-navy-border hover:border-gold-accent transition-all duration-300 group flex flex-col justify-between shadow-lg">

        <div>
            <div class="h-64 overflow-hidden bg-deep-navy relative">

            <img
                src="${project.image}"
                alt="${project.alt}"
                loading="lazy"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out">

            <div
                class="absolute top-4 right-4 bg-deep-navy/90 border border-gold-accent/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gold-accent">
                ${project.category}
                </div>

            </div>

            <div class="p-6">

                <h3 class="font-impact text-xl uppercase tracking-wide text-white mb-1.5">
                    ${project.title}
                </h3>

                <p class="text-xs text-brand-silver mb-4 leading-relaxed">
                    ${project.description}
                </p>

                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${project.tags
                      .map(
                        (tag) => `
                        <span
                            class="text-[10px] bg-white/5 border border-navy-border px-2 py-0.5 rounded text-brand-silver font-medium">
                            ${tag}
                        </span>
                    `,
                      )
                      .join("")}
                </div>

            </div>
        </div>

        <!-- Project Actions -->
        <div class="px-6 pb-6 flex flex-col sm:flex-row gap-2">

        <!-- Contact -->
        <a
            href="${project.contactLink}"
            class="inline-flex items-center justify-center gap-2 flex-1 border border-navy-border bg-transparent text-brand-light-gray hover:border-gold-accent hover:bg-gold-accent hover:text-deep-navy px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300">

            <span>CONTACT</span>

        </a>

        </div>

    </article>
`,
  )
  .join("");

//           <!-- View Project -->
        // <a
        //     href="${project.projectLink}"
        //     class="btn btn-primary rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300">

        //     <span>VIEW PROJECT</span>

        // </a>